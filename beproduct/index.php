<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST,GET,DELETE,PUT,OPTIONS');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
// Định nghĩa hằng Path của file index.php
define('PATH_ROOT', __DIR__);

// Autoload class trong PHP
spl_autoload_register(function (string $class_name) {
    include_once PATH_ROOT . '/' . $class_name . '.php';
});

// load class Route
$router = new Core\Http\Route();
include_once PATH_ROOT . '/App/router/index.php';

$parse_str = parse_str(parse_url($_SERVER['REQUEST_URI'])['query'] ?? '', $query);

// Lấy url hiện tại của trang web. Mặc định la /
$request_url = !empty($_GET['url']) ? '/' . $_GET['url'] : '/';

// Lấy phương thức hiện tại của url đang được gọi. (GET | POST). Mặc định là GET.
$methodUrl = !empty($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'GET';

// map URL
$router->map($request_url, $methodUrl, $query);



