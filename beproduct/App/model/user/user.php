<?php

class user
{
    public $id;
    public $permission;
    public $Name;
    public $first_name;
    public $phone;
    public $username;
    public $password;
    public $created_at;
    public $updated_at;
    public $last_name;
    public $tableName = 'user';
    public $dbConn;


    public function __construct()
    {
        $db = new DbConnect();
        $this->dbConn = $db->connect();
    }

    public function createUser()
    {
        $query = 'INSERT INTO ' . $this->tableName . ' (permission, Name, full_name, phone, username, password,created_at,updated_at)
         VALUES(:permission, :Name, :full_name, :phone, :username, :password,:created_at,:updated_at)';

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
        // Execute query
        if ($stmt->execute()) {
            return true;
        }
        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;
    }
}

?>