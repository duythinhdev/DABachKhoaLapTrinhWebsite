<?php
include_once PATH_ROOT . '/config/DBConnect.php';

class category_product
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

    public $name;

    /**
     * @return mixed
     */
    public $create_at;
    public $update_at;
    public $tableName = 'category_product';
    public $dbConn;

    public function __construct()
    {
        $db = new DbConnect();
        $this->dbConn = $db->connect();
    }

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

    public function getAll()
    {
        $stmt = $this->dbConn->prepare("SELECT * FROM " . $this->tableName);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }

    public function countAllProduct()
    {
        $stmt = $this->dbConn->prepare("SELECT COUNT(*)  as total FROM " . $this->tableName);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }

    public function getProductPagination()
    {

        $stmt = $this->dbConn->prepare("SELECT * FROM " . $this->tableName . " LIMIT " . $this->pagenumber . ',' . $this->pageSize);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }

    public function create()
    {
        $query = 'INSERT INTO ' . $this->tableName . ' (name,created_at,updated_at) VALUES (:name,:created_at,:updated_at)';

        // Prepare statement
        $stmt = $this->dbConn->prepare($query);

        // Clean data
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->create_at = htmlspecialchars(strip_tags($this->create_at));
        $this->update_at = htmlspecialchars(strip_tags($this->update_at));

        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d', time());
        $this->create_at = $date;
        $this->update_at = $date;
        // Bind data
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':created_at', $this->create_at);
        $stmt->bindParam(':updated_at', $this->update_at);

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
        if (null != $this->getName()) {
            $sql .= " name = '" . $this->getName() . "',";
        }

        $sql .= " created_at = :created_at, 
					  updated_at = :updated_at
					WHERE 
						id = :id";
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d', time());
        $this->create_at = $date;
        $this->update_at = $date;
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

    public function getdetail()
    {
        $stmt = $this->dbConn->prepare("SELECT * FROM " . $this->tableName . " WHERE 
						id = :id");
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }
}

?>