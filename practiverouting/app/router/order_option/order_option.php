<?php
$router->get('/v1/oderoption/get', 'Order_OptionController@getPagination');

$router->get('/v1/oderoption/getdetail', 'Order_OptionController@getdetail');

$router->post('/v1/oderoption/post', 'Order_OptionController@post');

$router->delete('/v1/oderoption/delete/{id}', 'Order_OptionController@delete');

$router->put('/v1/oderoption/put/{id}', 'Order_OptionController@put');


?>