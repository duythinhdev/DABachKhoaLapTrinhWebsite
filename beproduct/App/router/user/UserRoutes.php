<?php

// action là callback

$router->post('/v1/user/login', 'UserController@login');

$router->put('/v1/user/put/{id}', 'UserController@update');

$router->post('/v1/user/loginadmin', 'UserController@loginAdmin');

$router->post('/v1/user/signup', 'UserController@signup');

$router->post('/v1/user/postuser', 'UserController@postUser');

$router->get('/v1/user/getall', 'UserController@getAllUser');

$router->get('/v1/user/getdetail', 'UserController@getDetail');

$router->delete('/v1/user/delete/{id}', 'UserController@delete');


?>