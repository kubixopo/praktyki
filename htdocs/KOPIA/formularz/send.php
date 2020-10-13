<?php
// DANE
$imie = $_POST['imie'];
$nazwisko = $_POST['nazwisko'];
$numer_telefonu = $_POST['numer_telefonu'];
$data = $_POST['data'];
$numer_zamowienia = $_POST['numer_zamowienia'];
$notatka= $_POST['notatka'];
// DANE
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'telefon';

$conn = new mysqli($dbhost,$dbuser,$dbpass,$dbname);
if($conn->connect_error){
    die("Connection error");
}

 

  
$sql = "INSERT INTO informacje_o_kliencie (imie,nazwisko,data,notatka,numer_telefonu,numer_zamowienia) VALUES ('$imie','$nazwisko','$data','$notatka','$numer_telefonu','$numer_zamowienia')";

if ($conn->query($sql) === TRUE) {
    echo "Dodano";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();



?>