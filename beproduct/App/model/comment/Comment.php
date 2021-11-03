<?php
include_once PATH_ROOT . '/config/DBConnect.php';
include_once PATH_ROOT . '/core/middleware/ModelInterFace.php';

class Comment implements ModelInterFace
{
    public $id;
    public $user_id;
    public $created_at;
    public $updated_at;
    public $content;
    public $new_id;
    public $tableName = 'comment';
    public $dbcon;
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
        $dbcon = new DbConnect();
        $this->dbcon = $dbcon->connect();
    }

    public function get()
    {
        $query = 'SELECT * FROM ' . $this->tableName;
        $stmt = $this->dbcon->prepare($query);
        $stmt->execute();
        $comment = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $comment;
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


        $sql .= " created_at = :create_at, 
					  updated_at = :updated_at
					WHERE 
						id = :id";

        $stmt = $this->dbcon->prepare($sql);
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':create_at', $this->created_at);
        $stmt->bindParam(':updated_at', $this->updated_at);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
    public function getDetail()
    {
        // TODO: Implement getDetail() method.
    }

}


?>