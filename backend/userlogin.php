<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $con = mysqli_connect("localhost", "root", "", "agri", 3307);

//     if (!$con) {
//         die("Connection failed: " . mysqli_connect_error());
//     }

//     $username = mysqli_real_escape_string($con, $_POST['username']);
//     $pass = mysqli_real_escape_string($con, $_POST['password']);

//     $hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

//     $sql = "INSERT INTO userlogin (username,userloginpassword) VALUES ('$username','$hashed_pass')";
//     if (mysqli_query($con, $sql)) {
//         echo "success";
//     } else {
//         echo "Error: " . mysqli_error($con);
//     }

//     mysqli_close($con);
// } else {
//     echo "Invalid request";
// }
?>

<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Connect to database
    $conn = new mysqli("localhost", "root", "", "agri", 3307);

    // Check connection
    if ($conn->connect_error) {
        echo json_encode(['success' => false, 'message' => 'Database connection failed.']);
        exit;
    }

    // Get posted data
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $role     = $_POST['role'] ?? '';

    if (empty($username) || empty($password) || empty($role)) {
        echo json_encode(['success' => false, 'message' => 'All fields are required.']);
        exit;
    }

    // Query only these three fields: username, password, role
    $stmt = $conn->prepare("SELECT password FROM userlogin WHERE username = ? AND role = ?");
    $stmt->bind_param("ss", $username, $role);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($hashedPassword);
        $stmt->fetch();

        if (password_verify($password, $hashedPassword)) {
            echo json_encode(['success' => true, 'message' => 'Login successful', 'role' => $role]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Incorrect password']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'User not found']);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
?>


