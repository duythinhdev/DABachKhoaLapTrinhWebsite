<?php
include_once PATH_ROOT . '/config/DBConnect.php';

class news
{
    public $id;
    public $update_post;
    public $is_show;
    public $content;
    public $created_at;
    public $updated_at;
    public $user_id;
    public $title;
    public $tableName = 'news';
    public $dbconn;


    public function __construct()
    {
        $db = new DbConnect();
        $this->dbconn = $db->connect();
    }

    public function create()
    {
        $query = 'INSERT INTO ' . $this->tableName . ' (id, update_post, is_show, content, created_at, updated_at, user_id, title) VALUES (:id, :update_post, :is_show, :content, :created_at, :updated_at, :user_id, :title)';
        $stmt = $this->dbconn->prepare($query);
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->update_post = htmlspecialchars(strip_tags($this->update_post));
        $this->is_show = htmlspecialchars(strip_tags($this->is_show));
        $this->content = htmlspecialchars(strip_tags($this->content));
        $this->created_at = htmlspecialchars(strip_tags($this->created_at));
        $this->updated_at = htmlspecialchars(strip_tags($this->updated_at));
        $this->user_id = htmlspecialchars(strip_tags($this->user_id));

        // Bind data
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':update_post', $this->update_post);
        $stmt->bindParam(':is_show', $this->is_show);
        $stmt->bindParam(':content', $this->content);
        $stmt->bindParam(':created_at', $this->created_at);
        $stmt->bindParam(':updated_at', $this->updated_at);
        $stmt->bindParam(':user_id', $this->user_id);
        $stmt->bindParam(':title', $this->title);
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
        $query = 'SELECT * FROM ' . $this->tableName;
        $stmt = $this->dbconn->prepare($query);
        $stmt->execute();
        $news = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $news;
    }

    public function getDetail()
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