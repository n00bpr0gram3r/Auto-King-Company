require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Excel file setup
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Contacts');
const excelFilePath = path.join(__dirname, 'contacts.xlsx');

// Initialize Excel headers
worksheet.columns = [
  { header: 'Timestamp', key: 'timestamp' },
  { header: 'Name', key: 'name' },
  { header: 'Email', key: 'email' },
  { header: 'Phone', key: 'phone' },
  { header: 'Service', key: 'service' },
  { header: 'Message', key: 'message' }
];

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: process.env.SMTP_PORT || 465,
  secure: true,
  secureConnection: false,
  tls: {
    ciphers: 'SSLv3'
  },
  requireTLS: true,
  debug: true,
  connectionTimeout: 10000,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Save to Excel endpoint
app.post('/api/save-to-excel', async (req, res) => {
  try {
    const data = req.body;
    worksheet.addRow(data);
    await workbook.xlsx.writeFile(excelFilePath);
    res.json({ success: true, message: 'Data saved to Excel' });
  } catch (error) {
    console.error('Error saving to Excel:', error);
    res.status(500).json({ success: false, message: 'Error saving data' });
  }
});

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service || 'N/A'}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 