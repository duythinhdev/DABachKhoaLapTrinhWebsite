<?php

namespace App\Controllers;
//define('PATH_ROOT', __DIR__);
include_once PATH_ROOT . '/App/model/news/news.php';
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/middleware/Rest.php';
include_once PATH_ROOT . '/config/constants.php';

class NewsController
{
    public $dbcon;

    public function __construct()
    {
        $dbconn = new \DbConnect();
        $this->dbcon = $dbconn->connect();
        $rest = new \Rest();
        $rest->validateToken();
    }

    public function rest()
    {
        $rest = new \Rest();
        return $rest;
    }

    public function create()
    {
        $news = new \news();
        $data = json_decode(file_get_contents('php://input'), true);
        $news->id = $data['id'];
        $news->update_post = $data['update_post'];
        $news->is_show = $data['is_show'];
        $news->content = $data['content'];
        $news->created_at = $data['created_at'];
        $news->updated_at = $data['updated_at'];
        $news->user_id = $data['user_id'];
        $news->title = $data['title'];
        $data = $news->create();
        try {
            $this->rest()->returnResponse(SUCCESS_RESPONSE, ['data' => 'post success']);
        } catch (\Exception $exception) {
            $rest->returnResponse(NOT_FOUND, $exception);
        }
    }

    public function get()
    {
        $news = new \news();
        $data = $news->getAll();
        try {
            $this->rest()->returnResponse(SUCCESS_RESPONSE, $data);
        } catch (\Exception $exception) {
            $this->rest()->returnResponse(NOT_FOUND, ['message' => $exception]);
        }
    }

    public function getdetail($quey)
    {
        $new = new \news();

    }
}

?>