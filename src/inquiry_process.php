<?php
include_once 'config.php';

$name = mysqli_real_escape_string($conn, $_POST["name"]);
$phone = mysqli_real_escape_string($conn, $_POST["mobile"]);
$email = mysqli_real_escape_string($conn, $_POST["email"]);
$order = mysqli_real_escape_string($conn, $_POST["order"]);

$query = "INSERT INTO inquiry(name, phone, email, `order`) VALUES ('$name', '$phone', '$email', '$order')";

if (mysqli_query($conn, $query)) {
    echo "<script> alert('Record Inserted Successfully, we will contact you as soon as possible,Thank You '+'$name'+'!'); window.location.href='contacUs.html'; </script>";
} else {
    echo "<script> alert('Sorry, something went wrong. Please try again') </script>";
}

// close the connection
mysqli_close($conn);
?>
