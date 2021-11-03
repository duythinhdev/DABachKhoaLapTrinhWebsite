<?php
namespace App\Controllers;
include_once PATH_ROOT . '/App/model/user/user.php';
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/jwt/jwt.php';
include_once PATH_ROOT . '/core/middleware/Rest.php';
include_once PATH_ROOT . '/config/constants.php';
class UserController
{
    public $dbConn;
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
        if(!is_array($user)) {
            $this->returnResponse(INVALID_USER_PASS, "Email or Password is incorrect.");
        }

        if( $user['permission'] == 0 ) {
            $this->returnResponse(USER_NOT_ACTIVE, "User is not activated. Please contact to admin.");
        }
        $payload = [
            'iat' => time(),
            'iss' => 'localhost',
            'exp' => time() + (86400 * 10),
            'userId' => $user['id']
        ];
        $data = \JWT::encode($payload,SECRETE_KEY);
        $token = ['token' => $data, 'exp'=> time() + (86400 * 10) ];
        $rest = new \Rest();
        try{
            $rest->returnResponse(SUCCESS_RESPONSE,$token);
        }
        catch (\Exception $exception)
        {
            $rest->returnResponse(NOT_FOUND,$exception);
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
}

?>