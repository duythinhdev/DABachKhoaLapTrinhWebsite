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
    public $dbConn;
    public function __construct()
    {
        $db = new \DbConnect();
        $this->dbcon = $db->connect();
        $rest = new \Rest();
        $rest->validateToken();
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
        $img_name = $_FILES['image']['name'];
        $img_size = $_FILES['image']['size'];
        $tmp_name = $_FILES['image']['tmp_name'];
        $error = $_FILES['image']['error'];
        if($error ==  0)
        {
            if($img_size > 125000)
            {
                echo "Sorry, your file is too large";
            }
            else {
                $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
                $img_ex_lc = strtolower($img_ex);
                $allowed_exs = array("jpg", "jpeg", "png");     

                if (in_array($img_ex_lc, $allowed_exs)) {
                    $new_img_name = uniqid("IMG-", true).'.'.$img_ex_lc;
                    $img_upload_path = 'asset/'.$new_img_name;
                    move_uploaded_file($tmp_name, $img_upload_path);
                    $product->image = $img_upload_path;
                    $product->product_name = $_POST['product_name'];
                    $product->description = $_POST['description'];
                    $product->id_catergory_product = $_POST['id_category'];
                    $data = $product->create();
                    $rest = new \Rest();
                    try {
                        $rest->returnResponse(SUCCESS_RESPONSE, $data);
                    } catch (Exception $e) {
                        $rest->throwError(NOT_FOUND, $e);
                    }
                    // Insert into Database
                    echo "cannot upload file";
                }else {
                    $em = "You can't upload files of this type";
                    echo $em;
                }
            }
        }
        else {
            $em = "unknown error occurred!";
            echo $em;
        }
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE, $data);
        } catch (Exception $e) {
            $rest->throwError(NOT_FOUND, $e);
        }
    }


    public function postImage() {
        $product = new \product();
        $img_name = $_FILES['image']['name'];
        $img_size = $_FILES['image']['size'];
        $tmp_name = $_FILES['image']['tmp_name'];
        $error = $_FILES['image']['error'];
        if($error ==  0)
        {
            if($img_size > 125000)
            {
                echo "Sorry, your file is too large";
            }
            else {
                $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
                $img_ex_lc = strtolower($img_ex);
                $allowed_exs = array("jpg", "jpeg", "png"); 

                if (in_array($img_ex_lc, $allowed_exs)) {
                    $new_img_name = uniqid("IMG-", true).'.'.$img_ex_lc;
                    $img_upload_path = 'asset/'.$new_img_name;
                    move_uploaded_file($tmp_name, $img_upload_path);
                    $product->image = $img_upload_path;
                    $data = $product->create();
                    $rest = new \Rest();
                    try {
                        $rest->returnResponse(SUCCESS_RESPONSE, $data);
                    } catch (Exception $e) {
                        $rest->throwError(NOT_FOUND, $e);
                    }
                    // Insert into Database
                    echo "cannot upload file";
                }else {
                    $em = "You can't upload files of this type";
                    echo $em;
                }
            }
        }
        else {
            $em = "unknown error occurred!";
            echo $em;
        }
        // var_dump($_FILES['image']);
        // die;
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
