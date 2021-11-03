<?php

$router->get('/comment/getall', 'CommentController@getAll');
$router->post('/comment/post','CommentController@create');
$router->delete('/comment/delete/{id}','CommentController@delete');
$router->put('/comment/update/{id}','CommentController@update');
?>