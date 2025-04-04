<?php

function input(){
    return trim(fgets(STDIN));
}

$n = (int)input();
for ($i = 0; $i < $n; $i++){
    $num = (int)input();
    echo ($num % 100 < 60 && intdiv($num, 100) < 24) ? "YES" : "NO";
    echo PHP_EOL;
}

?>