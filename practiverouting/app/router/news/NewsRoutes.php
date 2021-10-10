<?php

$router->post('/news/post', 'NewsController@create');
$router->get('/news/get', 'NewsController@get');


?>