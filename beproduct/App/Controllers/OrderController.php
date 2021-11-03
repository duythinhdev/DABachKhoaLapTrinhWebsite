<?php
namespace App\Controllers;
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/config/constants.php';
include_once PATH_ROOT . '/App/model/order/Order.php';
include_once PATH_ROOT . '/core/middleware/Rest.php';
class OrderController {
    public $dbcon;

    public function __construct()
    {
        $dbconn = new \DbConnect();
        $this->dbcon = $dbconn->connect();
    }

    public function getAll()
    {
        $order =  new \Order();
        $data = $order->get();
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE,$data);
        }
       catch (\Exception $exception)
       {
           $rest->returnResponse(NOT_FOUND,$exception);
       }
    }
    public function create(){
        $order =  new \Order();
        $data = json_decode(file_get_contents('php://input'), true);
        $order->address = $data['address'];
        $order->phone = $data['phone'];
        $order->name = $data['first_name'];
        $order->user_id = $data['user_id'];
        $order->total = $data['total'];
        $order->status = $data['status'];
        $order->create_at = $data['create_at'];
        $order->update_at = $data['update_at'];
        $rest = new \Rest();
        $data = $order->create();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE,$data);
        }
        catch (\Exception $exception)
        {
            $rest->returnResponse(NOT_FOUND,$exception);
        }
    }
}

?>