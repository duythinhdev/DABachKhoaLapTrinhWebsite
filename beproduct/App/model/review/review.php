<?php

class review
{
    public $count_start;
    public $create_at;
    public $update_at;
    public $content;
    public $user_id;
    public $product_id;
    public $tableName = 'review';
    public $pagenumber;
    public $pageSize;
    public $dbConn;
    public $id;

    /**
     * @return mixed
     */
    public function getCountStart()
    {
        return $this->count_start;
    }

    /**
     * @param mixed $count_start
     */
    public function setCountStart($count_start)
    {
        $this->count_start = $count_start;
    }

    /**
     * @return mixed
     */
    public function getCreateAt()
    {
        return $this->create_at;
    }

    /**
     * @param mixed $create_at
     */
    public function setCreateAt($create_at)
    {
        $this->create_at = $create_at;
    }

    /**
     * @return mixed
     */
    public function getUpdateAt()
    {
        return $this->update_at;
    }

    /**
     * @param mixed $update_at
     */
    public function setUpdateAt($update_at)
    {
        $this->update_at = $update_at;
    }

    /**
     * @return mixed
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param mixed $content
     */
    public function setContent($content)
    {
        $this->content = $content;
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
    public function getProductId()
    {
        return $this->product_id;
    }

    /**
     * @param mixed $product_id
     */
    public function setProductId($product_id)
    {
        $this->product_id = $product_id;
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

    public function __construct()
    {
        $db = new DbConnect();
        $this->dbConn = $db->connect();
    }

    public function getAll(){
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
    public function getProductPagination()
    {

        $stmt = $this->dbConn->prepare("SELECT * FROM " . $this->tableName  ." LIMIT " . $this->pagenumber . ','. $this->pageSize);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }

    public function create()
    {
        $query = 'INSERT INTO ' . $this->tableName . ' (count_start, created_at, updated_at, product_id, content, user_id) VALUES ( :count_start, :created_at, :updated_at, :product_id, :content, :user_id)';

        // Prepare statement
        $stmt = $this->dbConn->prepare($query);

        // Clean data
        $this->count_start = htmlspecialchars(strip_tags($this->count_start));
        $this->content = htmlspecialchars(strip_tags($this->content));
        $this->create_at = htmlspecialchars(strip_tags($this->create_at));
        $this->update_at = htmlspecialchars(strip_tags($this->update_at));
        $this->product_id = htmlspecialchars(strip_tags($this->product_id));
        $this->user_id = htmlspecialchars(strip_tags($this->user_id));
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d', time());
        $this->create_at = $date;
        $this->update_at = $date;
        // Bind data
        if(isset($this->create_at) || isset($this->update_at))
        {
    
            $stmt->bindParam(':created_at', $this->create_at);
            $stmt->bindParam(':updated_at', $this->update_at);
        }

        $stmt->bindParam(':count_start', $this->count_start);
        $stmt->bindParam(':product_id', $this->product_id );

        $stmt->bindParam(':content', $this->content);
        $stmt->bindParam(':user_id', $this->user_id);

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
        if (null != $this->getCountStart()) {
            $sql .= " count_start = '" . $this->getCountStart() . "',";
        }

        if (null != $this->getContent()) {
            $sql .= " content = " . $this->getContent() . ",";
        }

        if (null != $this->getUserId()) {
            $sql .= " user_id = '" . $this->getUserId(). "',";
        }
        if (null != $this->getProductId()) {
            $sql .= " product_id = '" .  $this->getProductId() . "',";
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
        if(isset($this->create_at) || isset($this->update_at))
        {
    
            $stmt->bindParam(':created_at', $this->create_at);
            $stmt->bindParam(':updated_at', $this->update_at);
        }

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
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }
}

?>