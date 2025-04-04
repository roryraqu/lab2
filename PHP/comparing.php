<?php

function input(){
    return trim(fgets(STDIN));
}

function check($S){
    $vowels = "eyuioaEYUIOA";
    $numOfVowels = 0;
    $numOfConsonants = 0;
    for ($i = 0; $i < strlen($S); $i++)
    {
        if (strpos($vowels, $S[$i]) !== false){
            $numOfVowels++;
        }
        else if ($S[$i] !== ' '){
            $numOfConsonants++;
        }
    }
    return ($numOfVowels > $numOfConsonants ? "Да" : ($numOfVowels < $numOfConsonants ? "Нет" : "Одинаково"));
}

function output($S){
    echo check($S);
}

output(input());

?>