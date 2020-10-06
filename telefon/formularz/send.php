<?php
// DANE
$imie = $_POST['imie'];
$nazwisko = $_POST['nazwisko'];
$numer_telefonu = $_POST['numer_telefonu'];
$data = $_POST['data'];
$numer_zamowienia = $_POST['numer_zamowienia'];
$notatka= $_POST['notatka'];
// DANE
$connect = mysqli_connect($dbhost,$dbuser,$dbpass);
if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
  }

  $dbhost = 'localhost';
   $dbuser = 'root';
   $dbpass = '';

  
$sql = "INSERT INTO informacje_o_kliencie (imie,nazwisko,data,notatka,numer_telefonu,numer_zamowienia) VALUES ('$imie','$nazwisko','$data','$notatka','$numer_telefonu','$numer_zamowienia')";

if ($connect->query($sql) === TRUE) {
    echo "Dodano";
  } else {
    echo "Error: " . $sql . "<br>" . $connect->error;
  }
  
  $connect->close();



?>