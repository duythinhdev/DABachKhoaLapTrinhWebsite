<?php

// action là callback

$router->post('/user/login', 'UserController@login');

$router->post('/user/signup', 'UserController@signup');
