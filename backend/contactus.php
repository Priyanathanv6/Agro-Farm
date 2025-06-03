<?php
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set("display_errors", 1);

// DB connection
$conn = new mysqli("localhost", "root", "", "agri", 3307);
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Sanitize and validate input
$userName = $_POST['username'] ?? '';
$userEmail = $_POST['useremail'] ?? '';
$userPhone = $_POST['userphone'] ?? '';
$userComments = $_POST['usercomments'] ?? '';

if (!$userName || !$userEmail || !$userPhone || !$userComments) {
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

// Check for existing email
$stmt = $conn->prepare("SELECT id FROM contact WHERE useremail = ?");
$stmt->bind_param("s", $userEmail);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'Email already exists.']);
    exit;
}
$stmt->close();

// Insert new record
$stmt = $conn->prepare("INSERT INTO contact (username, useremail, userphone, comments) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $userName, $userEmail, $userPhone, $userComments);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Data inserted successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>


<!-- create table contact(id int primary key auto_increment, username varchar(100),useremail varchar(100),userphone bigint not null, comments varchar(100)); -->