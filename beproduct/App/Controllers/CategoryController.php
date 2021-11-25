<?php

namespace App\Controllers;
include_once PATH_ROOT . '/App/model/category_product/category_product.php';
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/middleware/Rest.php';
include_once PATH_ROOT . '/config/constants.php';

class CategoryController
{
    public $data;
    public function __construct()
    {
        $db = new \DbConnect();
        $db->connect();
    }

    public function getPagination($request)
    {
        $order_option = new \category_product();
        if (isset($request['query']['pagenumber']) && isset($request['query']['pagesize'])) {
            $pageNumber = $request['query']['pagenumber'];
            $pageSize = $request['query']['pagesize'];
        } else {
            $pageNumber = null;
            $pageSize = null;
        }
        if ($pageNumber === null && $pageSize === null) {
            $this->data = $order_option->getAll();
            $count = $order_option->countAllProduct();
            $pageNumber = 0;
            $pageSize = 0;
        } else {
            $start = ($pageNumber - 1) * $pageSize;
            $order_option->pagenumber = $start;
            $order_option->pageSize = $pageSize;
            $this->data = $order_option->getProductPagination();
            $count = $order_option->countAllProduct();
        }
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE, $this->data, $count, $pageNumber, $pageSize);
        } catch (Exception $e) {
            $rest->throwError(NOT_FOUND, $e);
        }
    }


    public function post()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $category_product = new \category_product();
        $category_product->name = $data['name'];
        $category_product->create();
    }

    public function delete($request)
    {
        $category_product = new \category_product();
        $category_product->id = $request['params'][1];
        $category_product->delete();
    }

    public function put($request)
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $category_product = new \category_product();
        $category_product->setId($request['params'][1]);
        $category_product->setName($data['name']);
        $updateData = $category_product->update();
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE, $updateData);
        } catch (Exception $e) {
            $rest->throwError(NOT_FOUND, $e);
        }
    }

    public function getdetail($request)
    {
        $category_product = new \category_product();
        $category_product->setId($request['query']['id']);
        $data = $category_product->getdetail();
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE, $data);
        } catch (Exception $e) {
            $rest->throwError(NOT_FOUND, $e);
        }
    }
}

?>