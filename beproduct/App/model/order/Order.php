<?php
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/middleware/ModelInterFace.php';
class Order implements ModelInterFace {
    public $id;
    public $address;
    public $phone;
    public $name;
    public $user_id;
    public $status;
    public $total;
    public $create_at;
    public $update_at;
    public $dbConn;
    public $tableName = 'order';
    public function __construct()
    {
        $dbcon = new DbConnect();
        $this->dbConn = $dbcon->connect();
    }

    public function get(){
        $query = 'SELECT * FROM ' . $this->tableName;
        $stmt = $this->dbConn->prepare($query)->execute();
        $order = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $order;
    }
    public function getDetail(){

    }
    public function create(){
        $query = 'INSERT INTO ' . $this->tableName . ' (address, phone,first_name, user_id, status, total,create_at,update_at)
         VALUES ( :address, :phone, :first_name, :user_id, :status, :total, :create_at, :update_at)';

        // Prepare statement
        $stmt = $this->dbConn->prepare($query);

        // Clean data
        $this->address = htmlspecialchars(strip_tags($this->address));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->user_id = htmlspecialchars(strip_tags($this->user_id));
        $this->status = htmlspecialchars(strip_tags($this->status));
        $this->total = htmlspecialchars(strip_tags($this->total));
        $this->create_at = htmlspecialchars(strip_tags($this->create_at));
        $this->update_at = htmlspecialchars(strip_tags($this->update_at));

        // Bind data
        $stmt->bindParam(':address', $this->product_name);
        $stmt->bindParam(':phone', $this->phone);
        $stmt->bindParam(':first_name', $this->name);
        $stmt->bindParam(':user_id', $this->user_id);
        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':total', $this->total);
        $stmt->bindParam(':create_at', $this->create_at);
        $stmt->bindParam(':update_at', $this->update_at);

        // Execute query
        if ($stmt->execute()) {
            return true;
        }
        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;
    }
    public function delete(){

    }
    public function update(){

    }
}
?>