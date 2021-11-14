<?php
namespace App\Controllers;
include_once PATH_ROOT . '/App/model/user/user.php';
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/jwt/jwt.php';
include_once PATH_ROOT . '/config/constants.php';
include_once PATH_ROOT . '/core/middleware/Rest.php';
class UserController
{
    public $dbConn;
    public $data;
    public function __construct()
    {
        $db = new \DbConnect();
        $this->dbConn = $db->connect();
    }
    public function login()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $this->dbConn->prepare("SELECT * FROM user WHERE username = :email AND password = :password");
        $stmt->bindParam(":email", $data['email']);
        $stmt->bindParam(":password", $data['password']);
        $stmt->execute();
        $user = $stmt->fetch(\PDO::FETCH_ASSOC);
        $rest = new  \Rest();
        if(!is_array($user)) {
            $rest->returnResponse(INVALID_USER_PASS, "Email or Password is incorrect.");
        }
        if( $user['is_active'] == 0 ) {
            $rest->returnResponse(USER_NOT_ACTIVE, "User is not activated. Please contact to admin.");
        }
        $payload = [
            'iat' => time(),
            'iss' => 'localhost',
            'exp' => time() + (86400 * 10),
            'userId' => $user['id']
        ];
        $data = \JWT::encode($payload,SECRETE_KEY);
        $token = ['token' => $data ];
        try{
            $rest->returnResponse(SUCCESS_RESPONSE,$token);
        }
        catch (\Exception $exception)
        {
            $rest->returnResponse(NOT_FOUND,$exception);
        }
    }
    public function loginAdmin()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $this->dbConn->prepare("SELECT * FROM user WHERE username = :email AND password = :password");
        $stmt->bindParam(":email", $data['email']);
        $stmt->bindParam(":password", $data['password']);
        $stmt->execute();
        $user = $stmt->fetch(\PDO::FETCH_ASSOC);
        $rest = new  \Rest();
        if(!is_array($user)) {
            $rest->returnResponse(INVALID_USER_PASS, "Email or Password is incorrect.");
        }
        if( $user['is_active'] == 0 ) {
            $rest->returnResponse(USER_NOT_ACTIVE, "User is not activated. Please contact to admin.");
        }
        if( $user['permission'] != 1 ) {
            $rest->returnResponse(API_DOST_NOT_EXIST, "User is not Admin");
        }
        else {
            $payload = [
                'iat' => time(),
                'iss' => 'localhost',
                'exp' => time() + (86400 * 10),
                'userId' => $user['id']
            ];
            $data = \JWT::encode($payload,SECRETE_KEY);
            $token = ['token' => $data ];
            try{
                $rest->returnResponse(SUCCESS_RESPONSE,$token);
            }
            catch (\Exception $exception)
            {
                $rest->returnResponse(NOT_FOUND,$exception);
            }
        }
    }
    public function signup()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $user = new \user();
        $user->permission = $data['permission'];
        $user->Name = $data['name'];
        $user->first_name = $data['full_name'];
        $user->phone = $data['phone'];
        $user->username = $data['username'];
        $user->password = $data['password'];
        $user->createUser();
    }

    public function getAllUser(){
        $user = new \user();
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
            $this->data = $user->getAll();
            $count = $user->countAll();
            $pageNumber = 0;
            $pageSize = 0;
        }
        else{
            $start = ( $pageNumber - 1) * $pageSize;
            $user->pagenumber = $start;
            $user->pageSize = $pageSize;
            $this->data = $user->getPagination();
            $count = $user->countAll();
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