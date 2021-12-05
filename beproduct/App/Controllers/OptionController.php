<?php
namespace App\Controllers;
include_once PATH_ROOT . '/app/model/option/option.php';
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/middleware/Rest.php';
include_once PATH_ROOT . '/config/constants.php';
include_once PATH_ROOT . '/app/model/review/review.php';

class OptionController {
    public $dbConn;
    public $data;
    public function __construct()
    {
        $dbcon = new \DbConnect();
        $this->dbConn = $dbcon->connect();
    }
    public function getPagination($request)
    {
        $option = new \option();
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
            $this->data = $option->getAll();
            $count = $option->countAllProduct();
            $pageNumber = 0;
            $pageSize = 0;
        }
        else{
            $start = ( $pageNumber - 1) * $pageSize;
            $option->pagenumber = $start;
            $option->pageSize = $pageSize;
            $this->data = $option->getProductPagination();
            $count = $option->countAllProduct();
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
        $option->type = $data['Types'];
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
        $option->setType($data['Types']);
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

}

?>