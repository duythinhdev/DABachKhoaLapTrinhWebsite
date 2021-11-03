<?php
$router->get('/v1/order/getall', 'OrderController@getAll');
$router->post('/v1/order/post','OrderController@create');
$router->delete('/v1/order/delete/{id}','OrderController@delete');
$router->put('/v1/order/update/{id}','OrderController@update');
 ?>