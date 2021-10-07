<?php

class user {
    public $id;
    public $permission;
    public $Name;
    public $first_name;
    public $phone;
    public $email;
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
        $query = 'INSERT INTO ' . $this->tableName . ' (id, permission, Name, first_name, Phone, email, password,created_at,updated_at,last_name)
         VALUES(:id, :permission, :Name, :first_name, :phone, :email, :password,:created_at,:updated_at,:last_name)';

        // Prepare statement
        $stmt = $this->dbConn->prepare($query);

        // Clean data
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->permission = htmlspecialchars(strip_tags($this->permission));
        $this->Name = htmlspecialchars(strip_tags($this->Name));
        $this->first_name = htmlspecialchars(strip_tags($this->first_name));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->created_at = htmlspecialchars(strip_tags($this->created_at));
        $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));
        $this->last_name = htmlspecialchars(strip_tags($this->last_name));
        // Bind data
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':permission', $this->permission);
        $stmt->bindParam(':Name', $this->Name);
        $stmt->bindParam(':first_name', $this->first_name);
        $stmt->bindParam(':phone', $this->phone);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);
        $stmt->bindParam(':created_at', $this->created_at);
        $stmt->bindParam(':updated_at', $this->updated_at);
        $stmt->bindParam(':last_name', $this->last_name);
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