<!DOCTYPE html>
<html>

<head>
    <title>Order form</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="main-block">
        <h1>Zamowienie</h1>
        <form action="send.php" method="POST">
            <div class="info">
                <input type="text" name="imie" placeholder="Imie">
                <input type="text" name="nazwisko" placeholder="Nazwisko">
                <input type="text" name="numer_telefonu" placeholder="Numer telefonu">
                <input type="date" name="data" placeholder="Data">
                <input type="number" name="numer_zamowienia" placeholder="Numer zamowienia">
                <input type="text" name="notatka" placeholder="Notatka">

            </div>
            <button href="/" class="button">Wyslij</button>
        </form>
    </div>
</body>

</html>