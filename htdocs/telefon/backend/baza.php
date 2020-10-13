<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'telefon';

$conn = new mysqli($dbhost,$dbuser,$dbpass,$dbname);
// USUWANIE
if(isset($_GET['p'])) {
    if($_GET['p'] == "usun") {
        $id = $_GET['id'];
        $conn->query("DELETE FROM informacje_o_kliencie WHERE id=$id");
        // header("refresh: 0; url =baza.php"); 
    } 
    
}

// USUWANIE
// PRZENOSZENIE
if(isset($_GET['p'])) {
    if($_GET['p'] == "przenies") {
        $id = $_GET['id'];
        $conn->query("INSERT INTO archiwum SELECT * FROM informacje_o_kliencie WHERE id = $id;");
        $conn->query("DELETE FROM informacje_o_kliencie WHERE id=$id;");
        // header("refresh: 0; url =baza.php"); 
    } 
    
}
// PRZENOSZENIE
// DRUKOWANIE
if(isset($_GET['p'])) {
    if($_GET['p'] == "drukuj") {
        $id = $_GET['id'];
        
         header("refresh: 0; url=drukowanie.php");
    } 
    
}
// DRUKOWANIE
?>

        <table>
            <?php
        $result = $conn->query("SELECT * FROM informacje_o_kliencie");
        while($row = $result->fetch_assoc()) {
            ?>
                <tr>
                    <td>
                        <?php echo $row['imie'];?>
                    </td>
                    <td>
                        <?php echo $row['nazwisko'];?>
                    </td>
                    <td>
                        <?php echo $row['data'];?>
                    </td>
                    <td>
                        <?php echo $row['notatka'];?>
                    </td>
                    <td>
                        <?php echo $row['numer_telefonu'];?>
                    </td>
                    <td>
                        <?php echo $row['numer_zamowienia'];?>
                    </td>

                    <td><input onclick="window.location ='?p=usun&id=<?php echo $row['id']; ?>'" type="button" value="Usuń" /></td>
                    <td><input onclick="window.location ='?p=przenies&id=<?php echo $row['id']; ?>'" type="button" value="Przenieś do archiwum" /></td>
                    <td><input onclick="window.location ='?p=drukuj&id=<?php echo $row['id']; ?>'" type="button" value="Drukuj" /></td>
                </tr>
                <?php
                
            }
            
            ?>
        </table>
        <!-- <button id="but" type="button" href='../stronaglowna/index.php'>Powrót</button> -->

        <?php

$conn->close();

?>
</body>

</html>