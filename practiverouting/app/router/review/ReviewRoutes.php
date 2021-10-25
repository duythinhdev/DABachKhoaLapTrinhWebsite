<?php
$router->get('/v1/review/getall', 'ReviewController@getPagination');
$router->post('/v1/review/post','ReviewController@post');
$router->delete('/v1/review/delete/{id}','ReviewController@delete');
$router->put('/v1/review/update/{id}','ReviewController@put');
$router->get('/v1/review/getdetail','ReviewController@getdetail');
?>