<?php

namespace App\Controllers;

use Rest;

//define('PATH_ROOT', __DIR__);
include_once PATH_ROOT . '/app/model/product/product.php';
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/middleware/Rest.php';
include_once PATH_ROOT . '/config/constants.php';
include_once PATH_ROOT . '/app/model/review/review.php';

class ReviewController
{
    public $data;
    public function __construct()
    {
        $db = new \DbConnect();
        $db->connect();
    }

    public function getPagination($request)
    {
        $review = new \review();
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
            $this->data = $review->getAll();
            $count = $review->countAll();
            $pageNumber = 0;
            $pageSize = 0;
        }
        else{
            $start = ( $pageNumber - 1) * $pageSize;
            $review->pagenumber = $start;
            $review->pageSize = $pageSize;
            $this->data = $review->getProductPagination();
            $count = $review->countAll();
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
        $review = new \review();
        $this->validationToken();
        $review->count_start = $data['count_start'];
        $review->product_id = $data['product_id'];
        $review->content = $data['content'];
        $review->user_id = $data['user_id'];
        $review->setCreateAt($data['create_at']);
        $review->setUpdateAt($data['update_at']);
        $review->create();
    }

    public function delete($request)
    {
        $review = new \review();
        $rest = new Rest();
        $rest->validateToken();
        $review->id = $request['params'][1];
        $review->delete();
    }

    public function put($request)
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $review = new \review();
        $this->validationToken();
        $review->setId($request['params'][1]);
        $review->setCountStart($data['count_start']);
        $review->setProductId($data['product_id']);
        $review->setContent($data['content']);
        $review->setUserId($data['user_id']);
        $review->setCreateAt($data['created_at']);
        $review->setUpdateAt($data['updated_at']);
        $review->update();
    }
    public function validationToken() {
        $rest = new Rest();
        $rest->validateToken();
    }
    public function getdetail($request)
    {
        $review = new \review();
        $this->validationToken();
        $review->setId($request['query']['id']);
        $data = $review->getdetail();
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE,$data);
        } catch (Exception $e) {
            $rest->throwError(NOT_FOUND, $e);
        }
    }
}

?>