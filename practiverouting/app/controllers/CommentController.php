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
        $rest = new \Rest();
        $data = $comment->getAll();
        $rest->returnResponse(SUCCESS_RESPONSE, $data);
    }

    public function create()
    {
        $comment = new \Comment();
        $data = json_decode(file_get_contents('php://input'), true);
        $rest = new \Rest();
        $comment->user_id = $data['user_id'];
        $comment->created_at = $data['created_at'];
        $comment->updated_at = $data['updated_at'];
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
        $id = $request['params'][1];
        $rest = new \Rest();
        $comment->id = $id;
        $comment->delete();
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