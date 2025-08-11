<?php
// Ensure no output before JSON response
ob_end_clean();

// Return JSON content type
header('Content-Type: application/json');

// Enable error reporting for debugging (remove in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// ==== CONFIG ====
// Load API key from environment variable or config file for security
$RESEND_API_KEY = getenv('RESEND_API_KEY') ?: "re_VxTGEST4_ESyjK54YEZPpMhYeXvXhKcQk";
$TO_EMAIL = "potharajutharunrana@gmail.com";

// ==== READ JSON INPUT ====
$input = json_decode(file_get_contents("php://input"), true);

// Basic validation
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$message = trim($input['message'] ?? '');

if (!$name || !$email ||!$message) {
    http_response_code(400);
    echo json_encode(["error" => "All fields are required"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email address"]);
    exit;
}

// Sanitize inputs to prevent XSS
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// ==== BUILD HTML EMAIL ====
$htmlContent = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Techno Communications LLC</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f9; color: #333;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background: #fff; border-radius: 8px; overflow: hidden;">
    <tr>
      <td style="background: linear-gradient(to right, #1a73e8, #6b21a8); padding: 20px; text-align: center;">
        <img src="https://internal.techno-communications.com/logoT.webp" alt="Techno Logo" style="max-width: 300px;" />
      </td>
    </tr>
    <tr>
      <td style="padding: 20px;">
        <p>Dear Techno Communications Team,</p>
        <p>You have received a new inquiry through the contact form:</p>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Message:</strong></p>
        <p>{$message}</p>
        <p>Sincerely,<br>Techno Communications LLC Team</p>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

// ==== SEND VIA RESEND API ====
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.resend.com/emails");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer {$RESEND_API_KEY}",
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "from" => "ticketing@techno-communications.com",
    "to" => [$TO_EMAIL],
    "reply_to" => $email,
    "html" => $htmlContent
]));

// Execute request
$response = curl_exec($ch);
$httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

// ==== ERROR HANDLING ====
if ($curlError) {
    http_response_code(500);
    echo json_encode(["error" => "cURL error: $curlError"]);
    exit;
}

// Parse Resend API response
$responseData = json_decode($response, true);
if ($httpStatus !== 200 || isset($responseData['error'])) {
    http_response_code($httpStatus);
    echo json_encode(["error" => $responseData['error'] ?? "Failed to send email"]);
    exit;
}

// Success response
http_response_code(200);
echo json_encode(["message" => "Email sent successfully"]);