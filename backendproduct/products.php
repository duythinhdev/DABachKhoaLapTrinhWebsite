<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../jwtpractice/product.php';
include_once '../jwtpractice/DBConnect.php';
include_once '../jwtpractice/rest.php';
$db = new DbConnect();
$db->connect();
$product = new product();
$data = $product->getAllProduct();
$rest = new Rest();
$rest->getBearerToken();
    // Turn to JSON & output
echo json_encode($data);

?>