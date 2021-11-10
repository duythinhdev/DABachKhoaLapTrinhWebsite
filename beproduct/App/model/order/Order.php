<?php

class Order
{
    public $phone;
    public $address;
    public $tableName = 'news';
    public $pagenumber;
    public $pageSize;
    public $name;
    public $user_id;
    public $status;
    public $total_order;
    public $id;

    /**
     * @return mixed
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * @param mixed $phone
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    /**
     * @return mixed
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * @param mixed $address
     */
    public function setAddress($address)
    {
        $this->address = $address;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * @param mixed $user_id
     */
    public function setUserId($user_id)
    {
        $this->user_id = $user_id;
    }

    /**
     * @return mixed
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @param mixed $status
     */
    public function setStatus($status)
    {
        $this->status = $status;
    }

    /**
     * @return mixed
     */
    public function getTotalOrder()
    {
        return $this->total_order;
    }

    /**
     * @param mixed $total_order
     */
    public function setTotalOrder($total_order)
    {
        $this->total_order = $total_order;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }
    public $dbConn;
    public $created_at;
    public $updated_at;

    public function __construct()
    {
        $db = new DbConnect();
        $this->dbConn = $db->connect();
    }

    public function getAll(){
        $stmt = $this->dbConn->prepare("SELECT * FROM " . $this->tableName);
        $stmt->execute();
        $news = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $news;
    }
    public function countAll()
    {
        $stmt = $this->dbConn->prepare("SELECT COUNT(*)  as total FROM " . $this->tableName);
        $stmt->execute();
        $news = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $news;
    }
    public function getProductPagination()
    {

        $stmt = $this->dbConn->prepare("SELECT * FROM " . $this->tableName  ." LIMIT " . $this->pagenumber . ','. $this->pageSize);
        $stmt->execute();
        $news = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $news;
    }

    public function create()
    {
        $query = 'INSERT INTO ' . $this->tableName . ' (address, phone, name, status, user_id, total_order, created_at, updated_at ) VALUES ( :address,:phone, :name, :status, :user_id , :total_order, :created_at, :updated_at)';

        // Prepare statement
        $stmt = $this->dbConn->prepare($query);

        // Clean data
        $this->address = htmlspecialchars(strip_tags($this->address));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->status = htmlspecialchars(strip_tags($this->status));
        $this->user_id = htmlspecialchars(strip_tags($this->user_id));
        $this->total_order = htmlspecialchars(strip_tags($this->total_order));
        $this->created_at = htmlspecialchars(strip_tags($this->created_at));
        $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));

        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d', time());
        $this->created_at = $date;
        $this->updated_at = $date;
        // Bind data
        $stmt->bindParam(':address', $this->address);
        $stmt->bindParam(':phone', $this->phone);
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':user_id', $this->user_id);
        $stmt->bindParam(':total_order', $this->total_order);
        $stmt->bindParam(':created_at', $this->created_at);
        $stmt->bindParam(':updated_at', $this->updated_at);

        // Execute query
        if ($stmt->execute()) {
            return true;
        }
        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;
    }

    public function delete()
    {
        $stmt = $this->dbConn->prepare('DELETE FROM ' . $this->tableName . ' WHERE id = :id');
        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(':id', $this->id);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function update()
    {
        $sql = "UPDATE $this->tableName SET";
        if (null != $this->getAddress()) {
            $sql .= " address = '" . $this->getAddress() . "',";
        }

        if (null != $this->getPhone()) {
            $sql .= " phone = '" . $this->getPhone() . "',";
        }
        if (null != $this->getPhone()) {
            $sql .= " name = '" . $this->getName() . "',";
        }

        if (null != $this->getStatus()) {
            $sql .= " status = '" . $this->getStatus() . "',";
        }

        if (null != $this->getUserId()) {
            $sql .= " user_id = " . $this->getUserId() . ",";
        }

        if (null != $this->getTotalOrder()) {
            $sql .= " status = '" . $this->getTotalOrder() . "',";
        }

        $sql .= " created_at = :created_at, 
					  updated_at = :updated_at
					WHERE 
						id = :id";

        $stmt = $this->dbConn->prepare($sql);
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d', time());
        $this->created_at = $date;
        $this->updated_at = $date;
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':created_at', $this->created_at);
        $stmt->bindParam(':updated_at', $this->updated_at);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function getdetail()
    {
        $stmt = $this->dbConn->prepare("SELECT * FROM " . $this->tableName . "	WHERE 
						id = :id");
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();
        $news = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $news;
    }
}

?>