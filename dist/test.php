<?php

$array = [
    ["name" => "John", "age" => 12, "cars" => ["Ford", "BMW", "Fiat"]],
    ["name" => "John1", "age" => 10, "cars" => ["Ford", "BMW", "Fiat"]],
    ["name" => "John2", "age" => 21, "cars" => ["Ford", "BMW", "Fiat"]],
    ["name" => "John3", "age" => 60, "cars" => ["Ford", "BMW", "Fiat"]],
    ["name" => "John4", "age" => 30, "cars" => ["Ford", "BMW", "Fiat"]]
];
echo json_encode($array);
