<?php
include_once PATH_ROOT . '/config/constants.php';
include_once PATH_ROOT . '/core/jwt/jwt.php';

class Rest
{
    protected $serviceName;
    protected $param;
    protected $dbConn;
    protected $userId;

    public function __construct()
    {
        $db = new DbConnect;
        $this->dbConn = $db->connect();

    }
    
    public function validateToken()
    {
        try {
            $token = $this->getBearerToken();
            $payload = \JWT::decode($token, SECRETE_KEY, ['HS256']);
            $stmt = $this->dbConn->prepare("SELECT * FROM user WHERE id = :userId");
            $stmt->bindParam(":userId", $payload->userId);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            if (!is_array($user)) {
                $this->returnResponse(INVALID_USER_PASS, "This user is not found in our database.");
            }

            if ($user['permission'] == 0) {
                $this->returnResponse(USER_NOT_ACTIVE, "This user may be decactived. Please contact to admin.");
            }
            $this->userId = $payload->userId;
        } catch (Exception $e) {
            $this->throwError(ACCESS_TOKEN_ERRORS, $e->getMessage());
        }
    }

    public function processApi()
    {
        try {
            $api = new API;
            $rMethod = new reflectionMethod('API', $this->serviceName);
            if (!method_exists($api, $this->serviceName)) {
                $this->throwError(API_DOST_NOT_EXIST, "API does not exist.");
            }
            $rMethod->invoke($api);
        } catch (Exception $e) {
            $this->throwError(API_DOST_NOT_EXIST, "API does not exist.");
        }

    }

    public function throwError($code, $message)
    {
        $errorMsg = json_encode(['error' => ['status' => $code, 'message' => $message]]);
        echo $errorMsg;
        exit;
    }

    public function returnResponse($code, $data, $totalpage = null,$pagenumber = null ,$pagesize = null)
    {
        if ($totalpage !== null|| $pagenumber !== null || $pagesize !== null ) {
            $response = json_encode(['response' => ['status' => $code,'pagenumber' => $pagenumber, 'pagesize'  => $pagesize , 'totalpage'  => $totalpage, "data" => $data]]);
            echo $response;
            exit;
        }
        $response = json_encode(['response' => ['status' => $code, "data" => $data]]);
        echo $response;
        exit;
    }             

    /**
     * Get hearder Authorization
     * */
    public function getAuthorizationHeader()
    {
        $headers = null;
        if (isset($_SERVER['Authorization'])) {
            $headers = trim($_SERVER["Authorization"]);
        } else if (isset($_SERVER['HTTP_AUTHORIZATION'])) { //Nginx or fast CGI
            $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
        } elseif (function_exists('apache_request_headers')) {
            $requestHeaders = apache_request_headers();
            // Server-side fix for bug in old Android versions (a nice side-effect of this fix means we don't care about capitalization for Authorization)
            $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
            if (isset($requestHeaders['Authorization'])) {
                $headers = trim($requestHeaders['Authorization']);
            }
        }
        return $headers;
    }

    /**
     * get access token from header
     * */
    public function getBearerToken()
    {
        $headers = $this->getAuthorizationHeader();
        // HEADER: Get the access token from the header
        if (!empty($headers)) {
            if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
                return $matches[1];
            }
        }
        $this->throwError(ATHORIZATION_HEADER_NOT_FOUND, 'Access Token Not found');
    }
}

?>