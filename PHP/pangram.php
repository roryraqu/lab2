<?php

function input(){
    return trim(fgets(STDIN));
}

function check($sentence){
    $letters = array();
    foreach (str_split($sentence) as $s){
        $letters[$s] = 1;
    }
    $isPan = true;
    for ($c = ord('a'); $c <= ord('z'); $c++){
        $char = chr($c);
        if (!isset($letters[$char])){
            echo "There is no " . $char . PHP_EOL;
            $isPan = false;
        }
    }
    return $isPan;
}

function output($sentence){
    echo check($sentence) ? 'true' : 'false';
}

$sentence = input();
output($sentence);

?>