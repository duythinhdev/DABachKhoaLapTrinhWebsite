<?php
class order_option {
    public $quantity;
    public $total;
    public $order_id;
    public $option_id;
    public $id;
    public $update_at;
    public $create_at;
    public $tableName = 'option_order';
    public $pagenumber;
    public $pageSize;

    public function __construct()
    {
        $db = new DbConnect();
        $this->dbConn = $db->connect();
    }
    public function getAll(){
        $sql = 'SELECT option_order.total, option_order.quantity, option.size, option.type,option.price,order.address,order.phone,order.name FROM ' .$this->tableName. ' INNER JOIN option  option ON   option.id = option_order.option_id    INNER JOIN  order  order ON order.id = option_order.order_id';
        $stmt = $this->dbConn->prepare($sql);
        $stmt->execute();
        $option_order = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $option_order;
    }
    public function countAllProduct()
    {
        $stmt = $this->dbConn->prepare("SELECT COUNT(*) as total FROM " . $this->tableName);
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
        $query = 'INSERT INTO ' . $this->tableName . ' (quantity, total, order_id, option_id, update_at,create_at) VALUES ( :quantity, :total, :order_id, :option_id, :update_at, :create_at)';

        // Prepare statement
        $stmt = $this->dbConn->prepare($query);

        // Clean data
        $this->quantity = htmlspecialchars(strip_tags($this->quantity));
        $this-> total= htmlspecialchars(strip_tags($this->total));
        $this->order_id = htmlspecialchars(strip_tags($this->order_id));
        $this->option_id = htmlspecialchars(strip_tags($this->option_id));
        $this->update_at = htmlspecialchars(strip_tags($this->update_at));
        $this->create_at = htmlspecialchars(strip_tags($this->create_at));

        // Bind data
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d', time());
        $this->create_at = $date;
        $this->update_at = $date;
        $stmt->bindParam(':quantity', $this->quantity);
        $stmt->bindParam(':total', $this->total);
        $stmt->bindParam(':order_id', $this->order_id);
        $stmt->bindParam(':option_id', $this->option_id);
        $stmt->bindParam(':option_id', $this->option_id);
        $stmt->bindParam(':create_at', $this->create_at);
        $stmt->bindParam(':update_at', $this->update_at);

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
        if (null != $this->getSize()) {
            $sql .= " size = '" . $this->getSize() . "',";
        }

        if (null != $this->getType()) {
            $sql .= " type = " . $this->getType() . ",";
        }

        if (null != $this->getPrice()) {
            $sql .= " price = '" . $this->getPrice() . "',";
        }
        if (null != $this->getQuantity()) {
            $sql .= " quantity = '" . $this->getQuantity() . "',";
        }
        if (null != $this->getQuantity()) {
            $sql .= " product_id = '" . $this->getProductId() . "',";
        }

        $sql .= " create_at = :create_at, 
					  update_at = :update_at
					WHERE 
						id = :id";
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $date = date('Y-m-d', time());
        $this->create_at = $date;
        $this->update_at = $date;
        $stmt = $this->dbConn->prepare($sql);
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':create_at', $this->create_at);
        $stmt->bindParam(':update_at', $this->update_at);
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