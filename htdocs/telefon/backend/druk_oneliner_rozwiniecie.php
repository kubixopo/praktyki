<?php
require_once 'dompdf/autoload.inc.php';
use Dompdf\Dompdf;
$link='http://localhost/telefon/backend/strona_drukowania.php';
$dompdf = new Dompdf();
$dompdf->loadHtml(file_get_contents($link));
$dompdf->setPaper('A4', 'landscape');
$dompdf->render();
$dompdf->stream();
?>