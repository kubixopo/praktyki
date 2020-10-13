<?php
// echo"dziala<br/>";
// $liczba = 10;
// $los1=rand(0,100);
// $los2=rand(0,100);
// if($los1<$los2){
//     echo "los1 < los2; 1=$los1, 2=$los2";

    

// }
// else if($los1<20 && $los2 <20){
//     echo "przypadek 2.";

// }
// else{
//     echo "cos innego";
// }



##############################

// for($i=0; $i <10 ; $i++){
//     echo $i.  ", ";
// }

// while ($a <= 10) {
//     # code...
// }

// $i=0;
// while($i<50){
    
//     $i+2;
//     echo $i;
// }

// $content=file_get_contents("dane.txt");
// $rows = explode("/n",$content);

// foreach($rows as $row){
//     $row = explode(' ',$row);
// }
// var_dump($row);


$n = rand(10,50);
$numbs = [];
for($i=0; $i<$n;$i++){
    $numbs[]=rand(1,100)." ".rand(1,100)." ".rand(1,100);

}
$numbs = implode("\n", $numbs);
file_get_contents("dane.txt",$numbs);
$content = file_get_contents("dane.txt");
file_put_contents("dane.txt",$numbs);
var_dump($content);
$content = explode("\n", $content);
$obj=[0,0];
$wys=[0,0];
$pp=[0,0];


foreach($content as $pr => $numbs){
    $numbs = explode(" ", $numbs);
}
    if((int)$numbs[0]*(int)$numbs[1]*(int)$numbs[2]>$obj[0]){
        $obj=[(int)$numbs[0]*(int)$numbs[1]*(int)$numbs[2],$pr+1];
    }
    if((int)$numbs[2]>$wys[0]){
        $wys=[(int)$numbs[2],$pr+1];
    }
    if((int)$numbs[0]*(int)$numbs[1]>$pp[0]){
        $pp=[(int)$numbs[0]*(int)$numbs[1],$pr+1];
    }
    echo "$obj[0]";
?>