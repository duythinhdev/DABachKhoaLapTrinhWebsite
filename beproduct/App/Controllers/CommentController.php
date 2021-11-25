<?php

namespace App\Controllers;
include_once PATH_ROOT . '/config/constants.php';
include_once PATH_ROOT . '/core/middleware/Rest.php';
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/App/model/comment/Comment.php';

class CommentController
{

    public function __construct()
    {
        $db = new \DbConnect();
        $db->connect();
    }

    public function getAll()
    {
        $comment = new \Comment();
        if(isset($request['query']['pagenumber']) && isset($request['query']['pagesize']))
        {
            $pageNumber = $request['query']['pagenumber'];
            $pageSize = $request['query']['pagesize'];
        }
        else {
            $pageNumber = null;
            $pageSize = null;
        }
        if($pageNumber === null && $pageSize === null)
        {
            $this->data = $comment->getAll();
            $count = $comment->countAll();
            $pageNumber = 0;
            $pageSize = 0;
        }
        else{
            $start = ( $pageNumber - 1) * $pageSize;
            $comment->pagenumber = $start;
            $comment->pageSize = $pageSize;
            $this->data = $comment->getProductPagination();
            $count = $comment->countAll();
        }
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE,$this->data , $count ,$pageNumber,$pageSize);
        } catch (Exception $e) {
            $rest->throwError(NOT_FOUND, $e);
        }
    }

    public function create()
    {
        $comment = new \Comment();
        $data = json_decode(file_get_contents('php://input'), true);
        $rest = new \Rest();
        $comment->user_id = $data['user_id'];
        $comment->content = $data['content'];
        $comment->new_id = $data['new_id'];
        $response = $comment->create();
        try {
            if ($response) {
                $rest->returnResponse(SUCCESS_RESPONSE, $data);
            }
        } catch (\Exception $exception) {
            $rest->returnResponse(REQUEST_METHOD_NOT_VALID, $exception);
        }
    }
    public function delete($request){
        $comment = new \Comment();
        $id = $request['query']['id'];
        $rest = new \Rest();
        $comment->id = $id;
        $data =  $comment->delete();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE, $data);
        } catch (\Exception $exception) {
            $rest->returnResponse(REQUEST_METHOD_NOT_VALID, $exception);
        }
    }
    public function update($request)
    {
        $id  = $request['params'][1];
        $data = json_decode(file_get_contents('php://input'), true);
        $comment = new \Comment();
        $comment->id = $id;
        $comment->setUserId($data['user_id']);
        $comment->setNewId($data['new_id']);
        $comment->setContent($data['content']);
        $comment->created_at = $data['created_at'];
        $comment->updated_at = $data['updated_at'];
        $comment->update();
    }

}

?>