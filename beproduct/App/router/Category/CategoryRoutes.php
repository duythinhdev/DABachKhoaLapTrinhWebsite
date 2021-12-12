<?php

$router->get('/v1/categoryproduct/getall', 'CategoryController@getPagination');

$router->post('/v1/categoryproduct/post', 'CategoryController@post');

$router->delete('/v1/categoryproduct/delete/{id}', 'CategoryController@delete');

$router->put('/v1/categoryproduct/update/{id}', 'CategoryController@put');

$router->get('/v1/categoryproduct/getdetail', 'CategoryController@getdetail');

$router->get('/v1/categoryproduct/getaboutproduct', 'CategoryController@getAboutProduct');


?>