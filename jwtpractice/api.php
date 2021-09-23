<?php
class api extends Rest
{
    public $dbConn;

    public function __construct()
    {
        parent::__construct();
        $db = new DbConnect();
        $this->dbConn = $db->connect();
    }

    public function generateToken()
    {
        $email = $this->validateParameter('email', $this->param['email'], STRING);
        $pass = $this->validateParameter('pass', $this->param['pass'], STRING);
        try {
            $stmt = $this->dbConn->prepare("SELECT * FROM user WHERE email = :email AND password = :pass");
            $stmt->bindParam(":email", $email);
            $stmt->bindParam(":pass", $pass);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            if(!is_array($user)) {
                $this->returnResponse(INVALID_USER_PASS, "Email or Password is incorrect.");
            }

            if( $user['permission'] == 0 ) {
                $this->returnResponse(USER_NOT_ACTIVE, "User is not activated. Please contact to admin.");
            }

            $payload = [
                'iat' => time(),
                'iss' => 'localhost',
                'exp' => time() + (15*60),
                'userId' => $user['id']
            ];

            $token = JWT::encode($payload, SECRETE_KEY);

            $data = ['token' => $token];
            $this->returnResponse(SUCCESS_RESPONSE, $data);
        } catch (Exception $e) {
            $this->throwError(JWT_PROCESSING_ERROR, $e->getMessage());
        }
    }

    public function addCustomer()
    {
        $email = $this->validateParameter('email', $this->param['email'], STRING, false);
        $name = $this->validateParameter('name', $this->param['name'], STRING, false);
        $addr = $this->validateParameter('addr', $this->param['addr'], STRING, false);
        $mobile = $this->validateParameter('mobile', $this->param['mobile'], STRING, false);
        try {
            $token = $this->getBearerToken();
            $payload = JWT::decode($token, SECRETE_KEY, ['HS256']);

            $stmt = $this->dbConn->prepare("SELECT * FROM users WHERE id = :userId");
            $stmt->bindParam(":userId", $payload->userId);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            if (!is_array($user)) {
                $this->returnResponse(INVALID_USER_PASS, "Email or Password is incorrect.");
            }

            if ($user['active'] == 0) {
                $this->returnResponse(USER_NOT_ACTIVE, "User is not activated. Please contact to admin.");
            }
            $cust = new Customer();
            $cust->setName($name);
            $cust->setEmail($email);
            $cust->setAddress($addr);
            $cust->setMobile($mobile);
            $cust->setCreatedBy($payload->userId);
            $cust->setCreatedOn(date('Y-m-d'));

            $booStatus = true;
            if (!$cust->insert()) {
                $errMsg = 'Failed to insert';
                $booStatus = false;
            } else {
                $message = 'Inserted successfully';
            }
            $this->returnResponse(SUCCESS_RESPONSE, $message);

        } catch (Exception $e) {
            $this->throwError(JWT_PROCESSING_ERROR, $e->getMessage());
        }
    }

    public function getCustomerDetail()
    {
        $customerId = $this->validateParameter('customerId', $this->param['customerId'], INTEGER);
        $cust = new Customer();
        $cust->setId($customerId);
        $customer = $cust->getCustomerDetailsById();
        if (!is_array($customer)) {
            $this->returnResponse(SUCCESS_RESPONSE, ['message' => 'Customer detail not found.']);
        }
        $response['customerId'] = $customer['id'];
        $response['cutomerName'] = $customer['name'];
        $response['email'] = $customer['email'];
        $response['mobile'] = $customer['mobile'];
        $response['address'] = $customer['address'];
        $response['createdBy'] = $customer['created_user'];
        $response['lastUpdatedBy'] = $customer['updated_user'];
        $this->returnResponse(SUCCESS_RESPONSE, $response);
    }
    public function updateCustomer() {
        $customerId = $this->validateParameter('customerId', $this->param['customerId'], INTEGER);
        $name = $this->validateParameter('name', $this->param['name'], STRING, false);
        $addr = $this->validateParameter('addr', $this->param['addr'], STRING, false);
        $mobile = $this->validateParameter('mobile', $this->param['mobile'], INTEGER, false);

        $cust = new Customer;
        $cust->setId($customerId);
        $cust->setName($name);
        $cust->setAddress($addr);
        $cust->setMobile($mobile);
        $cust->setUpdatedBy($this->userId);
        $cust->setUpdatedOn(date('Y-m-d'));

        if(!$cust->update()) {
            $message = 'Failed to update.';
        } else {
            $message = "Updated successfully.";
        }

        $this->returnResponse(SUCCESS_RESPONSE, $message);
    }

    public function deleteCustomer() {
        $customerId = $this->validateParameter('customerId', $this->param['customerId'], INTEGER);

        $cust = new Customer;
        $cust->setId($customerId);

        if(!$cust->delete()) {
            $message = 'Failed to delete.';
        } else {
            $message = "deleted successfully.";
        }

        $this->returnResponse(SUCCESS_RESPONSE, $message);
    }
    public function getallCustomer()
    {
        $cust = new Customer;
        if(!$cust->getAllCustomers()) {
            $message = 'Failed to delete.';
        } else {
            $message = "deleted successfully.";
        }
        $this->returnResponse(SUCCESS_RESPONSE, $message);
    }
}


?>