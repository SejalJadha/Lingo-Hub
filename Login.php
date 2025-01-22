<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "miniproject";
    $conn = new mysqli($host, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    if (isset($_POST["loginemail"]) && isset($_POST["loginpassword"])) {
        $email = $_POST["loginemail"];
        $password = $_POST["loginpassword"];
        $stmt = $conn->prepare("SELECT * FROM dataset WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row["password"])) {
                echo "<script>alert('Login successful!');</script>";
               
               
            } else {
                echo "<script>alert('Email or Password Mismatched');</script>";
            }
        } else {
            echo "<script>alert('Register first to Login');</script>";
        }
    }

    if (isset($_POST["registeremail"]) && isset($_POST["registerpassword"]) && isset($_POST["username"])) {
        $username = $_POST["username"];
        $email = $_POST["registeremail"];
        $password = $_POST["registerpassword"];
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $conn->prepare("INSERT INTO dataset (email, password, username) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $email, $hashedPassword, $username);
        
        if ($stmt->execute()) {
            echo "<script>alert('Registration successful! Now Login.');</script>";
        } else {
            echo "<script>alert('Registration failed: " . $stmt->error . "');</script>";
        }
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Slide Navbar</title>
	<link rel="stylesheet" type="text/css" href="slide navbar style.css">
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="Login.css">
</head>
<body>
	
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">

			<div class="signup">
				<form action="Login.php" method="post">
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="User name" required="">
					<input type="email" name="registeremail" placeholder="Email" required="">
					<input type="password" name="registerpassword" placeholder="Password" required="">
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form action ="Login.php" method="post">
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="loginemail" placeholder="Email" required="">
					<input type="password" name="loginpassword" placeholder="Password" required="">
					<button>Login</button>
				</form>
			</div>
	</div>
</body>
</html>