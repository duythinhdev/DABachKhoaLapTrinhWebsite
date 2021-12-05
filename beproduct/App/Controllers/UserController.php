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
    public function forgetpassword() {
        
    }
    public function login()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $this->dbConn->prepare("SELECT * FROM user WHERE username = :email AND password = :password");
        $password = sha1($data['password']);
        $stmt->bindParam(":email", $data['email']);
        $stmt->bindParam(":password", $password);
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
        $token = ['token' => $data ,'fullname' => $user['full_name'], 'name' => $user['name']];
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
        $password = sha1($data['password']);
        $stmt->bindParam(":email", $data['email']);
        $stmt->bindParam(":password", $password);
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
            $payload = [
                'iat' => time(),
                'iss' => 'localhost',
                'exp' => time() + (86400 * 7),
                'userId' => $user['id']
            ];
            $data = \JWT::encode($payload,SECRETE_KEY);
            $token = [ 'token' => $data, 'fullname' => $user['full_name'], 'name' => $user['name']];
            try{
                $rest->returnResponse(SUCCESS_RESPONSE,$token);
            }
            catch (\Exception $exception)
            {
                $rest->throwError(NOT_FOUND,$exception);
            }
    }
    public function signup()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $this->dbConn->prepare("SELECT * FROM user WHERE username = :username AND full_name = :full_name");
        $stmt->bindParam(":username", $data['username']);
        $stmt->bindParam(":full_name", $data['full_name']);
        $stmt->execute();
        $userValidation = $stmt->fetch(\PDO::FETCH_ASSOC);
        $user = new \user();
        $rest = new  \Rest();
        $this->validationSignUp($data,$userValidation,$user,$rest);
        $user->is_active = 1;
        $user->permission = 3;
        $data = $user->createUser();
        try{
            $rest->throwError(SUCCESS_RESPONSE,$data);
        }
        catch (\Exception $exception)
        {
            $rest->returnResponse(NOT_FOUND,$exception);
        }
    }
    
    public function validationSignUp($data,$users,$user,$rest){
        if($users){
            if(is_null($users['username']))
            {
                $users = '';
            }
            if($users['username'] === $data['username'] || $users['full_name'] === $data['full_name'])
            {
                $rest->throwError(BAD_REQUEST,'request invalid data');
            }
        }
        if(isset($data['name'])) {
            $user->Name = $data['name'];
        }
        else {
            $rest->throwError(VALIDATION,'A name required');
        }
        if(isset($data['full_name'])) {
            $user->first_name = $data['full_name'];
        }
        else {
            $rest->throwError(VALIDATION,'A full_name required');
        }
        if(isset($data['phone'])) {
            $user->phone = $data['phone'];
        }
        else {
            $rest->throwError(VALIDATION,'A phone required');
        }
        if(isset($data['username'])) {
            $user->username = $data['username'];
        }
        else {
            $rest->throwError(VALIDATION,'A username required');
        }
        if(isset($data['password'])) {
            $user->password = sha1($data['password']);
        }
        else {
            $rest->throwError(VALIDATION,'A password required');
        }

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

    public function delete($request)
    {
        $user = new \user();
        $user->id = $request['params'][1];
        $user->delete();
    }

    public function getDetail($request) {
        $user = new \user();
        $user->setId($request['query']['id']);
        $data = $user->getDetail();
        $rest = new \Rest();
        try {
            $rest->returnResponse(SUCCESS_RESPONSE, $data);
        } catch (Exception $e) {
            $rest->throwError(NOT_FOUND, $e);
        }
    }
    public function update($request){
        $user = new \user();
        $data = json_decode(file_get_contents('php://input'), true);
        $user->setId($request['params'][1]);
        $user->setFirstName($data['full_name']);
        $user->setUsername($data['username']);
        $user->setName($data['name']);
        $user->setPhone($data['phone']);
        $user->setPassword($data['password']);
        $user->setPermission($data['permission']);
        $user->setCreatedAt($data['created_at']);
        $user->setUpdatedAt($data['updated_at']);
        $user->update();
    }
    public function postUser()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $img_name = $_FILES['image']['name'];
        $img_size = $_FILES['image']['size'];
        $tmp_name = $_FILES['image']['tmp_name'];
        $error = $_FILES['image']['error'];
        $user = new \user();
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
                    $user->setImage($img_upload_path);
                    $user->setFirstName($_POST['full_name']);
                    $user->setUsername($_POST['username']);
                    $user->setName($_POST['name']);
                    $user->setPhone($_POST['phone']);
                    $user->setPassword($_POST['password']);
                    $user->setPermission($_POST['permission']);
                    $user->setPassword($_POST['created_at']);
                    $user->setPermission($_POST['updated_at']);
                    $data = $user->createUser();
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
}
?>