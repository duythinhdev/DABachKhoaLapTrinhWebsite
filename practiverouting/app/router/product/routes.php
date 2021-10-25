<?php

// action là callback

$router->get('/product/get', 'ProductController@getPagination');

$router->get('/product/getdetail', 'ProductController@getdetail');

$router->post('/product/post', 'ProductController@post');

$router->delete('/product/delete/{id}', 'ProductController@delete');

$router->put('/product/put/{id}', 'ProductController@put');

?>

