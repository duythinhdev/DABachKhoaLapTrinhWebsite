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
        $stmt = $this->dbConn->prepare("SELECT * FROM user WHERE email = :email AND password = :password");
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
            'exp' => time() + (86400 * 30 ),
            'userId' => $user['id']
        ];
        $data = \JWT::encode($payload,SECRETE_KEY);
        $token = ['token' => $data];
        $rest = new \Rest();
        $rest->returnResponse(SUCCESS_RESPONSE,$token);
    }
    public function signup()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $user = new \user();
        $user->id = $data['id'];
        $user->permission = $data['permission'];
        $user->Name = $data['Name'];
        $user->first_name = $data['first_name'];
        $user->phone = $data['phone'];
        $user->email = $data['email'];
        $user->password = base64_encode($data['password']);
        $user->created_at = $data['created_at'];
        $user->updated_at = $data['updated_at'];
        $user->last_name = $data['last_name'];
        $user->createUser();
    }
}

?>