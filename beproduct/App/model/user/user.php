<?php

class user
{
    public $id;

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

    /**
     * @return mixed
     */
    public function getPermission()
    {
        return $this->permission;
    }

    /**
     * @param mixed $permission
     */
    public function setPermission($permission)
    {
        $this->permission = $permission;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->Name;
    }

    /**
     * @param mixed $Name
     */
    public function setName($Name)
    {
        $this->Name = $Name;
    }

    /**
     * @return mixed
     */
    public function getFirstName()
    {
        return $this->first_name;
    }

    /**
     * @param mixed $first_name
     */
    public function setFirstName($first_name)
    {
        $this->first_name = $first_name;
    }

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
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param mixed $username
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }
    public $permission;
    public $Name;
    public $first_name;
    public $phone;
    public $username;
    public $password;
    public $created_at;
    public $updated_at;
    public $last_name;
    public $is_active;
    public $tableName = 'user';
    public $dbConn;
    public $image;

    public function setImage($image) {
        $this->image = $image;
    }
    public function setCreatedAt($created_at) {
        $this->image = $created_at;
    }
    public function setUpdatedAt($updated_at) {
        $this->image = $updated_at;
    }


    public function __construct()
    {
        $db = new DbConnect();
        $this->dbConn = $db->connect();
    }

    public function createUser()
    {
        $query = 'INSERT INTO ' . $this->tableName . ' (permission, Name, full_name, phone, username, password,created_at,updated_at,is_active)
         VALUES(:permission, :Name, :full_name, :phone, :username, :password,:created_at,:updated_at,:is_active)';

        // Prepare statement
        $stmt = $this->dbConn->prepare($query);

        // Clean data
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->permission = htmlspecialchars(strip_tags($this->permission));
        $this->Name = htmlspecialchars(strip_tags($this->Name));
        $this->first_name = htmlspecialchars(strip_tags($this->first_name));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->created_at = htmlspecialchars(strip_tags($this->created_at));
        $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));


        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d', time());
        $this->created_at = $date;
        $this->updated_at = $date;
        // Bind data
        $stmt->bindParam(':permission', $this->permission);
        $stmt->bindParam(':Name', $this->Name);
        $stmt->bindParam(':full_name', $this->first_name);
        $stmt->bindParam(':phone', $this->phone);
        $stmt->bindParam(':username', $this->username);
        $stmt->bindParam(':password', $this->password);
        $stmt->bindParam(':created_at', $this->created_at);
        $stmt->bindParam(':updated_at', $this->updated_at);
        $stmt->bindParam(':is_active', $this->is_active);
        // Execute query
        if ($stmt->execute()) {
            return true;
        }
        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;
    }

    public function getAll()
    {
        $stmt = $this->dbConn->prepare("SELECT * FROM " . $this->tableName);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }

    public function countAll()
    {
        $stmt = $this->dbConn->prepare("SELECT COUNT(*)  as total FROM " . $this->tableName);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }

    public function getPagination()
    {

        $stmt = $this->dbConn->prepare("SELECT * FROM " . $this->tableName . " LIMIT " . $this->pagenumber . ',' . $this->pageSize);
        $stmt->execute();
        $user = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $user;
    }

    public function getDetail(){
        $stmt = $this->dbConn->prepare("SELECT * FROM " . $this->tableName . "	WHERE 
        id = :id");
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }
    public function update()
    {
        $sql = "UPDATE $this->tableName SET";
        if (null != $this->getFirstName()) {
            $sql .= " full_name = '" . $this->getFirstName() . "',";
        }

        if (null != $this->getName()) {
            $sql .= " name = " . $this->getName() . ",";
        }

        if (null != $this->getPhone()) {
            $sql .= " phone = '" . $this->getPhone() . "',";
        }
        if (null != $this->getPassword()) {
            $sql .= " password = '" . $this->getPassword() . "',";
        }


        $sql .= " created_at = :created_at, 
					  updated_at = :updated_at
					WHERE 
						id = :id";
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d', time());
        $this->created_at = $date;
        $this->updated_at = $date;
        $stmt = $this->dbConn->prepare($sql);
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':created_at', $this->create_at);
        $stmt->bindParam(':updated_at', $this->update_at);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
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

}

?>