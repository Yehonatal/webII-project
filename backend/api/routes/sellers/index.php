<?php
$path = explode('/', $_SERVER['REQUEST_URI']);
print_r($path);

$user = json_decode(file_get_contents('php://input'));
print_r($user);
echo "Testing from Sellers!";
