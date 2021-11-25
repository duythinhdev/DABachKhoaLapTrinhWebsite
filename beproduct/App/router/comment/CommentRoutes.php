<?php

$router->get('/v1/comment/getall', 'CommentController@getAll');
$router->post('/v1/comment/post','CommentController@create');
$router->delete('/v1/comment/delete/{id}','CommentController@delete');
$router->put('/v1/comment/update/{id}','CommentController@update');
$router->put('/v1/comment/getdetail','CommentController@getdetail');
?>