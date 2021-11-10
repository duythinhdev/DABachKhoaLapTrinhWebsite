<?php

class News
{
    public $created_at;
    public $updated_at;
    public $is_show;
    public $title;
    public $user_id;

    /**
     * @return mixed
     */
    public function getIsShow()
    {
        return $this->is_show;
    }

    /**
     * @param mixed $is_show
     */
    public function setIsShow($is_show)
    {
        $this->is_show = $is_show;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
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
    public $tableName = 'news';
    public $pagenumber;
    public $pageSize;
    public $id;
    public $dbConn;

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
        $query = 'INSERT INTO ' . $this->tableName . ' (title, created_at, updated_at, is_show, user_id) VALUES ( :title,:created_at, :updated_at, :is_show, :user_id)';

        // Prepare statement
        $stmt = $this->dbConn->prepare($query);

        // Clean data
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->created_at = htmlspecialchars(strip_tags($this->created_at));
        $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));
        $this->is_show = htmlspecialchars(strip_tags($this->is_show));
        $this->user_id = htmlspecialchars(strip_tags($this->user_id));

        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d', time());
        $this->created_at = $date;
        $this->updated_at = $date;
        // Bind data
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':created_at', $this->created_at);
        $stmt->bindParam(':updated_at', $this->updated_at);
        $stmt->bindParam(':is_show', $this->is_show);
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
        if (null != $this->getTitle()) {
            $sql .= " title = '" . $this->getTitle() . "',";
        }

        if (null != $this->getUserId()) {
            $sql .= " user_id = " . $this->getUserId() . ",";
        }

        if (null != $this->getIsShow()) {
            $sql .= " is_show = '" . $this->getIsShow() . "',";
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