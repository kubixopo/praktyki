<?php

$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'telefon';

$conn = new mysqli($dbhost,$dbuser,$dbpass,$dbname);
if($conn->connect_error){
    die("Connection error");
}
$sql = "INSERT INTO archiwum (imie) VALUES ('$imie')";
 

  

  
  $conn->close();



?>