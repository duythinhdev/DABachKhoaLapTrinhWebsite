<?php

$router->post('/news/post','NewsController@create');
$router->get('/news/getall','NewsController@get');




?>