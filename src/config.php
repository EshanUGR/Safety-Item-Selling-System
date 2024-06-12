<?php

	$servername = "localhost:3306";
	$username = "root";
	$password = "Ravindu12345";
	$db = "gloves";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $db);

	// Check connection
	if ($conn->connect_error) 
	{
		die("Connection failed: " . $conn->connect_error);
	}
	else{

		echo "Connected successfully";
	}
	
	
?>