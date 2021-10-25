<?php

namespace App\Controllers;
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
//        $rest = new \Rest();
//        $rest->validateToken();
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
            $count = $review->countAllProduct();
            $pageNumber = 0;
            $pageSize = 0;
        }
        else{
            $start = ( $pageNumber - 1) * $pageSize;
            $review->pagenumber = $start;
            $review->pageSize = $pageSize;
            $this->data = $review->getProductPagination();
            $count = $review->countAllProduct();
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
//        $product->id = $data['id'];
        $review->count_start = $data['count_start'];
        $review->create_at = $data['create_at'];
        $review->update_at = $data['update_at'];
        $review->product_id = $data['product_id'];
        $review->content = $data['content'];
        $review->user_id = $data['user_id'];
        $review->create();
    }

    public function delete($request)
    {
        $review = new \review();
        $review->id = $request['params'][1];
        $review->delete();
    }

    public function put($request)
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $review = new \review();
        $review->setId($request['params'][1]);
        $review->setCountStart($data['count_start']);
        $review->setCreateAt($data['create_at']);
        $review->setUpdateAt($data['update_at']);
        $review->setProductId($data['product_id']);
        $review->setContent($data['content']);
        $review->setUserId($data['user_id']);
        $review->update();
    }

    public function getdetail($request)
    {
        $review = new \product();
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