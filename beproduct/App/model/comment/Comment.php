<?php
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/middleware/ModelInterFace.php';

class Comment
{
    public $id;
    public $user_id;
    public $created_at;
    public $updated_at;
    public $content;
    public $new_id;
    public $tableName = 'comment';
    public $dbcon;
    public $pagenumber;
    public $pageSize;
    /**
     * @return mixed
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * @return mixed
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @return mixed
     */
    public function getNewId()
    {
        return $this->new_id;
    }

    /**
     * @param mixed $user_id
     */
    public function setUserId($user_id)
    {
        $this->user_id = $user_id;
    }

    /**
     * @param mixed $content
     */
    public function setContent($content)
    {
        $this->content = $content;
    }

    /**
     * @param mixed $new_id
     */
    public function setNewId($new_id)
    {
        $this->new_id = $new_id;
    }

    public function __construct()
    {
        $dbconn = new DbConnect();
        $this->dbcon = $dbconn->connect();
    }

    public function getAll(){
        $stmt = $this->dbcon->prepare("SELECT * FROM " . $this->tableName);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }
    public function countAll()
    {
        $stmt = $this->dbcon->prepare("SELECT COUNT(*)  as total FROM " . $this->tableName);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }
    public function getProductPagination()
    {

        $stmt = $this->dbcon->prepare("SELECT * FROM " . $this->tableName  ." LIMIT " . $this->pagenumber . ','. $this->pageSize);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }

    public function getCommentAboutProduct(){
        $stmt = $this->dbcon->prepare("SELECT * FROM " . $this->tableName  ." LIMIT " . $this->pagenumber . ','. $this->pageSize);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }
    public function create()
    {
        $query = 'INSERT INTO ' . $this->tableName . ' (user_id, created_at, updated_at, content, new_id) VALUES ( :user_id, :created_at, :updated_at, :content, :new_id)';

        // Prepare statement
        $stmt = $this->dbcon->prepare($query);

        // Clean data
        $this->user_id = htmlspecialchars(strip_tags($this->user_id));
        $this->created_at = htmlspecialchars(strip_tags($this->created_at));
        $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));
        $this->content = htmlspecialchars(strip_tags($this->content));
        $this->new_id = htmlspecialchars(strip_tags($this->new_id));
        
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d', time());
        $this->create_at = $date;
        $this->update_at = $date;
        // Bind data
        $stmt->bindParam(':user_id', $this->user_id);
        $stmt->bindParam(':created_at', $this->created_at);
        $stmt->bindParam(':updated_at', $this->updated_at);
        $stmt->bindParam(':content', $this->content);
        $stmt->bindParam(':new_id', $this->new_id);

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
        $stmt = $this->dbcon->prepare('DELETE FROM ' . $this->tableName . ' WHERE id = :idcomment');
        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(':idcomment', $this->id);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function update()
    {
        $sql = "UPDATE $this->tableName SET";
        if (null != $this->getUserId()) {
            $sql .= " user_id = '" . $this->getUserId() . "',";
        }

        if (null != $this->getNewId()) {
            $sql .= " new_id = " . $this->getNewId() . ",";
        }

        if (null != $this->getContent()) {
            $sql .= " content = '" . $this->getContent() . "',";
        }


        $sql .= " created_at = :created_at, 
					  updated_at = :updated_at
					WHERE 
						id = :id";
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d', time());
        $this->created_at = $date;
        $this->updated_at = $date;
        $stmt = $this->dbcon->prepare($sql);
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':created_at', $this->created_at);
        $stmt->bindParam(':updated_at', $this->updated_at);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
    public function getDetail()
    {
        $stmt = $this->dbcon->prepare("SELECT * FROM " . $this->tableName . "WHERE id = :id" );
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }

}


?>