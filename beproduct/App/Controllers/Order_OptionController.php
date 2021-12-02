<?php
namespace App\Controllers;
include_once PATH_ROOT . '/App/model/oder_option/order_option.php';
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/middleware/Rest.php';
include_once PATH_ROOT . '/config/constants.php';
class Order_OptionController {
    public $dbConn;
    public $data;
    public function __construct()
    {
        $dbcon = new \DbConnect();
        $this->dbConn = $dbcon->connect();
    }
    public function getPagination($request)
    {
        $order_option = new \order_option();
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
            $this->data = $order_option->getAll();
            $count = $order_option->countAllProduct();
            $pageNumber = 0;
            $pageSize = 0;
        }
        else{
            $start = ( $pageNumber - 1) * $pageSize;
            $order_option->pagenumber = $start;
            $order_option->pageSize = $pageSize;
            $this->data = $order_option->getProductPagination();
            $count = $order_option->countAllProduct();
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
        $option = new \option();
        $option->size = $data['size'];
        $option->type = $data['type'];
        $option->price = $data['price'];
        $option->quantity = $data['quantity'];
        $option->product_id = $data['product_id'];
        $option->create();
    }

    public function delete($request)
    {
        $option = new \option();
        $option->id = $request['params'][1];
        $option->delete();
    }

    public function put($request)
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $option = new \option();
        $option->setId($request['params'][1]);
        $option->setSize($data['size']);
        $option->setType($data['type']);
        $option->setPrice($data['price']);
        $option->setQuantity($data['quantity']);
        $option->setProductId($data['product_id']);
        $option->update();
    }

    public function getdetail($request)
    {
        $option = new \option();
        $option->setId($request['query']['id']);
        $data = $option->getdetail();
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE,$data);
        } catch (Exception $e) {
            $rest->throwError(NOT_FOUND, $e);
        }
    }
    public function getdataAboutOptionOrder($request){
        $order_option = new \order_option();
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
            $this->data = $order_option->getAll();
            $count = $order_option->countAllProduct();
            $pageNumber = 0;
            $pageSize = 0;
        }
        else{
            $start = ( $pageNumber - 1) * $pageSize;
            $order_option->pagenumber = $start;
            $order_option->pageSize = $pageSize;
            $this->data = $order_option->getAboutOptionOrderPagination();
            $count = $order_option->countAllProduct();
        }
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE,$this->data , $count ,$pageNumber,$pageSize);
        } catch (Exception $e) {
            $rest->throwError(NOT_FOUND, $e);
        }
    }

}




?>