<?php
require_once('functions.php');
//$api = new api();
//$api->processApi();
include_once "core/autoload.php";
$routing = new Routing();

echo $routing->get("home","Animal@cat");
echo $routing->get("about",function (){
    echo "About page";
});
?>