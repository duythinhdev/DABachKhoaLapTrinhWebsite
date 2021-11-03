<?php

// action là callback

$router->get('/v1/option/get', 'OptionController@getPagination');

$router->get('/v1/option/getdetail', 'OptionController@getdetail');

$router->post('/v1/option/post', 'OptionController@post');

$router->delete('/v1/option/delete/{id}', 'OptionController@delete');

$router->put('/v1/option/put/{id}', 'OptionController@put');

?>

