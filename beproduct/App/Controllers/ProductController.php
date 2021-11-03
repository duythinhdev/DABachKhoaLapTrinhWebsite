<?php

namespace App\Controllers;
//define('PATH_ROOT', __DIR__);
include_once PATH_ROOT . '/App/model/product/product.php';
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/middleware/Rest.php';
include_once PATH_ROOT . '/config/constants.php';

class ProductController
{
    public $data;
    public function __construct()
    {
        $db = new \DbConnect();
        $db->connect();
    }

    public function getPagination($request)
    {
        $product = new \product();
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
            $this->data = $product->getAll();
            $count = $product->countAllProduct();
            $pageNumber = 0;
            $pageSize = 0;
        }
        else{
            $start = ( $pageNumber - 1) * $pageSize;
            $product->pagenumber = $start;
            $product->pageSize = $pageSize;
            $this->data = $product->getProductPagination();
            $count = $product->countAllProduct();
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
        $product = new \product();
//        $product->id = $data['id'];
        $product->product_name = $data['product_name'];
        $product->image = $data['image'];
        $product->description = $data['description'];
        $product->id_catergory_product = $data['id_catergory_product'];
        $data =  $product->create();
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE, $data);
        } catch (Exception $e) {
            $rest->throwError(NOT_FOUND, $e);
        }
    }

    public function delete($request)
    {
        $product = new \product();
        $product->id = $request['params'][1];
        $product->delete();
    }

    public function put($request)
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $product = new \product();
        $product->setId($request['params'][1]);
        $product->setCreateAt($data['create_at']);
        $product->setDescription($data['description']);
        $product->setUpdateAt($data['update_at']);
        $product->setImage($data['image']);
        $product->setProductName($data['product_name']);
        $product->setIdCatergoryProduct($data['id_catergory_product']);
        $product->update();
    }

    public function getdetail($request)
    {
        $product = new \product();
        $product->setId($request['query']['id']);
        $data = $product->getdetail();
        echo json_encode($data);
    }
}
