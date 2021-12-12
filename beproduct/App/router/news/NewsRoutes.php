<?php

$router->get('/v1/news/get', 'NewsController@getPagination');
$router->post('/v1/news/post', 'NewsController@post');
$router->put('/v1/news/put/{id}', 'NewsController@put');
$router->delete('/v1/news/delete', 'NewsController@delete');
$router->get('/v1/news/getdetail', 'NewsController@getdetail');

?>