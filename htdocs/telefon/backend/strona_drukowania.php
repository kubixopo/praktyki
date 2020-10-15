<!DOCTYPE html>
<html lang="pl">
<head>
    <!-- UI Author: Jakub Rudnik -->
    <!-- Scripts: Jakub Chełpa -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   
</head>
<style>
*{
    font-size: 20px;
}



</style>

<body>

<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'telefon';

$conn = new mysqli($dbhost,$dbuser,$dbpass,$dbname);

$id=$_GET['id'];

$result = $conn->query("SELECT * FROM informacje_o_kliencie WHERE id=$id");

        
?>
   
                  <div class="wrapper">
        <header>
            <p class="title"><b><span style="font-size: larger; margin-left: 40%;">Komputronik Opole</span></b></p>
        </header>
        <div class="content">
            <div class="content__top">
                <div class="content__top__order">
                    <p class="title"><b>Nr. zamowienia :</b> <?php
                   $row=$result->fetch_assoc();
                        echo $row["numer_zamowienia"]; 
                  ?></p>
                    
                </div>
                <div class="content__top__client">
                    
                    <div class="content__top__client__info">
                        <p class="info"><b>Imie:</b> <?php
                        echo $row["imie"]; 
                  ?></p>
                        <p class="info__regular"></p>
                    </div>
                    <div class="content__top__client__info">
                        <p class="info"><b>Nazwisko: </b><?php echo $row["nazwisko"];?></p>
                        <p class="info__regular"></p>
                    </div>
                    <div class="content__top__client__info">
                        <p class="info"><b>Nr. Tel. :</b> <?php echo $row["numer_telefonu"];?></p>
                       
                    </div>
                </div>
            </div>
            <div class="content__down">
                <p class="title"><b>Dane techniczne : </b><?php echo $row["notatka"];?></p>
                
            </div>
        
            <div class="footer">
                <p class="footer__description"><b><span style="font-size: larger; margin-left: 70%;">Komputronik Opole &copy; 2020</span></b></p>
            </div>
        </div>
    </div>




                  





                  
