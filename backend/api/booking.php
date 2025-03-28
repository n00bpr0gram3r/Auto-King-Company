<?php
define('ALLOWED_ACCESS', true);
// Prevent direct access to this file
if (!defined('ALLOWED_ACCESS')) {
    die('Direct access not permitted');
}
// Disable error reporting for notices and warnings
error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
ini_set('display_errors', 0);

// Set CORS headers first, before any output
$allowedOrigins = [
    'https://autokingksa.com',
    'http://localhost:4200'  // For local development
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}

header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 3600');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit();
}

// Validate required fields
$requiredFields = ['name', 'email', 'phone', 'service', 'date', 'time'];
$missingFields = [];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $missingFields[] = $field;
    }
}

if (!empty($missingFields)) {
    http_response_code(400);
    echo json_encode([
        'error' => 'Missing required fields',
        'fields' => $missingFields
    ]);
    exit();
}

// Validate email
if (!isValidEmail($data['email'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit();
}

// Validate phone
if (!isValidPhone($data['phone'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid phone number format']);
    exit();
}

try {
    // Get database connection
    $conn = getDBConnection();
    if (!$conn) {
        throw new Exception('Database connection failed');
    }

    // Prepare SQL statement
    $sql = "INSERT INTO bookings (name, email, phone, service, booking_date, booking_time, message, created_at) 
            VALUES (:name, :email, :phone, :service, :date, :time, :message, NOW())";
    
    $stmt = $conn->prepare($sql);
    
    // Sanitize and prepare data
    $name = sanitizeInput($data['name']);
    $email = sanitizeInput($data['email']);
    $phone = sanitizeInput($data['phone']);
    $service = sanitizeInput($data['service']);
    $date = sanitizeInput($data['date']);
    $time = sanitizeInput($data['time']);
    $message = sanitizeInput($data['message'] ?? '');
    
    // Bind parameters
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':service', $service);
    $stmt->bindParam(':date', $date);
    $stmt->bindParam(':time', $time);
    $stmt->bindParam(':message', $message);
    
    // Execute the statement
    $stmt->execute();
    
    // Get the last inserted ID
    $bookingId = $conn->lastInsertId();
    
    // Send email notification
    $to = $_ENV['RECIPIENT_EMAIL']; // Send to admin email
    $subject = "New Booking Request - " . $service;
    
    $emailBody = "
    <h2>New Booking Request</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Phone:</strong> {$phone}</p>
    <p><strong>Service:</strong> {$service}</p>
    <p><strong>Date:</strong> {$date}</p>
    <p><strong>Time:</strong> {$time}</p>
    <p><strong>Message:</strong> " . ($message ?: 'N/A') . "</p>
    ";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . $_ENV['SMTP_USER'] . "\r\n";
    $headers .= "Reply-To: {$email}\r\n";

    mail($to, $subject, $emailBody, $headers);
    
    // Send WhatsApp notification using UltraMsg
    $whatsappMessage = "*🚗 New Booking Request!*\n\n"
        . "*Customer Details:*\n"
        . "👤 Name: {$name}\n"
        . "📞 Phone: {$phone}\n"
        . "📧 Email: {$email}\n\n"
        . "*Service Details:*\n"
        . "🔧 Service: {$service}\n"
        . "📅 Date: {$date}\n"
        . "⏰ Time: {$time}\n\n"
        . ($message ? "*Additional Message:*\n{$message}" : "");

    $whatsappUrl = "https://api.ultramsg.com/" . $_ENV['ULTRAMSG_INSTANCE_ID'] . "/messages/chat";
    $whatsappData = [
        'token' => $_ENV['ULTRAMSG_TOKEN'],
        'to' => $_ENV['ADMIN_WHATSAPP_NUMBER'],
        'body' => $whatsappMessage,
        'priority' => '1',
        'referenceId' => ''
    ];

    $ch = curl_init($whatsappUrl);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($whatsappData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_exec($ch);
    curl_close($ch);
    
    // Log the notifications for debugging
    logError('Email notification sent to: ' . $to);
    logError('WhatsApp notification: ' . $whatsappMessage);
    
    // Send success response
    echo json_encode([
        'success' => true,
        'message' => 'Booking submitted successfully',
        'booking_id' => $bookingId
    ]);
    
} catch (Exception $e) {
    logError('Error processing booking:', $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'error' => 'An error occurred while processing your booking',
        'message' => $e->getMessage()
    ]);
}
?> 