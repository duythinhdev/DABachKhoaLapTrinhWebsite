<?php
namespace App\Controllers;
//define('PATH_ROOT', __DIR__);
include_once PATH_ROOT . '/app/model/product/product.php';
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/middleware/Rest.php';
include_once PATH_ROOT . '/config/constants.php';
class ProductController
{
    public function __construct()
    {
        $db = new \DbConnect();
        $db->connect();
        $rest = new \Rest();
        $rest->validateToken();
    }
    public function get($request)
    {
        $product = new \product();
        $data = $product->getAllProduct();
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE,$data);
        }
        catch (Exception $e)
        {
            $rest->throwError(NOT_FOUND,$e);
        }
    }
    public function post()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $product = new \product();
        $product->id = $data['id'];
        $product->product_name = $data['product_name'];
        $product->image = $data['image'];
        $product->create_at = $data['create_at'];
        $product->update_at = $data['update_at'];
        $product->description = $data['description'];
        $product->id_catergory_product = $data['id_catergory_product'];
        $product->create();
    }
    public function delete($request)
    {
        $product = new \product();
        $product->id = $request['params']['id'];
        $product->delete();
    }
    public function put($request)
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $product = new \product();
        $product->setId($request['params'][0]);
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
