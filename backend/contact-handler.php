<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Load environment variables from .env file
require __DIR__ . '/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Function to save to Excel
function saveToExcel($data) {
    require_once 'vendor/autoload.php';
    
    $spreadsheet = new PhpOffice\PhpSpreadsheet\Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();
    
    // If file exists, load it
    $file = 'contacts.xlsx';
    if (file_exists($file)) {
        $spreadsheet = PhpOffice\PhpSpreadsheet\IOFactory::load($file);
        $sheet = $spreadsheet->getActiveSheet();
    } else {
        // Set headers if new file
        $sheet->setCellValue('A1', 'Timestamp');
        $sheet->setCellValue('B1', 'Name');
        $sheet->setCellValue('C1', 'Email');
        $sheet->setCellValue('D1', 'Phone');
        $sheet->setCellValue('E1', 'Service');
        $sheet->setCellValue('F1', 'Message');
    }
    
    // Get last row
    $lastRow = $sheet->getHighestRow() + 1;
    
    // Add new row
    $sheet->setCellValue('A' . $lastRow, date('Y-m-d H:i:s'));
    $sheet->setCellValue('B' . $lastRow, $data['name']);
    $sheet->setCellValue('C' . $lastRow, $data['email']);
    $sheet->setCellValue('D' . $lastRow, $data['phone']);
    $sheet->setCellValue('E' . $lastRow, $data['service'] ?? 'N/A');
    $sheet->setCellValue('F' . $lastRow, $data['message'] ?? 'N/A');
    
    $writer = PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, 'Xlsx');
    $writer->save($file);
    
    return true;
}

// Function to send email
function sendEmail($data) {
    $to = $_ENV['RECIPIENT_EMAIL'];
    $subject = "New Contact Form Submission - " . ($data['service'] ?? 'General Inquiry');
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: ' . $_ENV['SMTP_USER'] . "\r\n";
    
    $message = "
    <html>
    <head>
        <title>New Contact Form Submission</title>
    </head>
    <body>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {$data['name']}</p>
        <p><strong>Email:</strong> {$data['email']}</p>
        <p><strong>Phone:</strong> {$data['phone']}</p>
        <p><strong>Service:</strong> " . ($data['service'] ?? 'N/A') . "</p>
        <p><strong>Message:</strong> " . ($data['message'] ?? 'N/A') . "</p>
    </body>
    </html>
    ";
    
    return mail($to, $subject, $message, $headers);
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $response = array();
    $success = true;
    
    // Save to Excel
    try {
        if (!saveToExcel($data)) {
            $success = false;
            $response['excel_error'] = 'Failed to save to Excel';
        }
    } catch (Exception $e) {
        $success = false;
        $response['excel_error'] = $e->getMessage();
    }
    
    // Send email
    try {
        if (!sendEmail($data)) {
            $success = false;
            $response['email_error'] = 'Failed to send email';
        }
    } catch (Exception $e) {
        $success = false;
        $response['email_error'] = $e->getMessage();
    }
    
    $response['success'] = $success;
    echo json_encode($response);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
} 