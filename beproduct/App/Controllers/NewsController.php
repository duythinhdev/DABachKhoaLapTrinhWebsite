<?php
namespace App\Controllers;
include_once PATH_ROOT . '/app/model/option/option.php';
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/middleware/Rest.php';
include_once PATH_ROOT . '/config/constants.php';
include_once PATH_ROOT . '/app/model/news/news.php';

class NewsController {

    public $dbConn;
    public $data;
    public function __construct()
    {
        $dbcon = new \DbConnect();
        $this->dbConn = $dbcon->connect();
    }
    public function getPagination($request)
    {
        $news = new \News();
        if(isset($request['query']['pagenumber']) && isset($request['query']['pagesize']))
        {
            $pageNumber = $request['query']['pagenumber'];
            $pageSize = $request['query']['pagesize'];
        }
        else {
            $pageNumber = null;
            $pageSize = null;
        }
        if($pageNumber == null && $pageSize === null)
        {
            $this->data = $news->getAll();
            $count = $news->countAll();
            $pageNumber = 0;
            $pageSize = 0;
        }
        else{
            $start = ( $pageNumber - 1) * $pageSize;
            $news->pagenumber = $start;
            $news->pageSize = $pageSize;
            $this->data = $news->getProductPagination();
            $count = $news->countAll();
        }
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE,$this->data , $count ,$pageNumber,$pageSize);
        } catch (Exception $e) {
            $rest->throwError(NOT_FOUND, $e);
        }
    }


    public function post()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $option = new \News();
        $option->user_id = $data['user_id'];
        $option->is_show = $data['is_show'];
        $option->title = $data['title'];
        $option->create();
    }

    public function delete($request)
    {
        $news = new \news();
        $news->id = $request['params'][1];
        $news->delete();
    }

    public function put($request)
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $news = new \News();
        $news->setId($request['params'][1]);
        $news->setUserId($data['user_id']);
        $news->setIsShow($data['is_show']);
        $news->setTitle($data['title']);
        $news->update();
    }

    public function getdetail($request)
    {
        $news = new \News();
        $news->id = $request['query']['id'];
        $data = $news->getdetail();
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE,$data);
        } catch (Exception $e) {
            $rest->throwError(NOT_FOUND, $e);
        }
    }
}

?>