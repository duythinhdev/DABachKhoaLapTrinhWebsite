<?php

// action là callback

$router->get('/v1/product/get', 'ProductController@getPagination');

$router->get('/v1/product/getdetail', 'ProductController@getdetail');

$router->post('/v1/product/post', 'ProductController@post');

$router->delete('/v1/product/delete/{id}', 'ProductController@delete');

$router->put('/v1/product/put/{id}', 'ProductController@put');

?>
