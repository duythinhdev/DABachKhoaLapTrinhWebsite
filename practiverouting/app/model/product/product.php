<?php

class product
{
    public $product_name;

    /**
     * @param mixed $product_name
     */
    public function setProductName($product_name)
    {
        $this->product_name = $product_name;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @param mixed $image
     */
    public function setImage($image)
    {
        $this->image = $image;
    }

    /**
     * @param mixed $create_at
     */
    public function setCreateAt($create_at)
    {
        $this->create_at = $create_at;
    }

    /**
     * @param mixed $update_at
     */
    public function setUpdateAt($update_at)
    {
        $this->update_at = $update_at;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @param mixed $id_catergory_product
     */
    public function setIdCatergoryProduct($id_catergory_product)
    {
        $this->id_catergory_product = $id_catergory_product;
    }

    public $id;

    /**
     * @return mixed
     */
    public function getProductName()
    {
        return $this->product_name;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * @return mixed
     */
    public function getCreateAt()
    {
        return $this->create_at;
    }

    /**
     * @return mixed
     */
    public function getUpdateAt()
    {
        return $this->update_at;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return mixed
     */
    public function getIdCatergoryProduct()
    {
        return $this->id_catergory_product;
    }
    public $image;
    public $create_at;
    public $update_at;
    public $description;
    public $id_catergory_product;
    public $tableName = 'product';
    public $dbConn;

    public function __construct()
    {
        $db = new DbConnect();
        $this->dbConn = $db->connect();
    }

    public function getAllProduct()
    {

        $stmt = $this->dbConn->prepare("SELECT * FROM " . $this->tableName);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }

    public function create()
    {
        $query = 'INSERT INTO ' . $this->tableName . ' (id, product_name, image, create_at, update_at, description, id_catergory_product) VALUES(:id, :product_name, :image, :create_at, :update_at, :description, :id_catergory_product)';

        // Prepare statement
        $stmt = $this->dbConn->prepare($query);

        // Clean data
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->product_name = htmlspecialchars(strip_tags($this->product_name));
        $this->image = htmlspecialchars(strip_tags($this->image));
        $this->create_at = htmlspecialchars(strip_tags($this->create_at));
        $this->update_at = htmlspecialchars(strip_tags($this->update_at));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->id_catergory_product = htmlspecialchars(strip_tags($this->id_catergory_product));

        // Bind data
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':product_name', $this->product_name);
        $stmt->bindParam(':image', $this->image);
        $stmt->bindParam(':create_at', $this->create_at);
        $stmt->bindParam(':update_at', $this->update_at);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':id_catergory_product', $this->id_catergory_product);

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
        $stmt = $this->dbConn->prepare('DELETE FROM ' . $this->tableName . ' WHERE id = :idproduct');
        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(':idproduct', $this->id);

        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function update()
    {
        $sql = "UPDATE $this->tableName SET";
        if (null != $this->getProductName()) {
            $sql .= " product_name = '" . $this->getProductName() . "',";
        }

        if (null != $this->getImage()) {
            $sql .= " image = " . $this->getImage() . ",";
        }

        if (null != $this->getDescription()) {
            $sql .= " description = '" . $this->getDescription() . "',";
        }
        if (null != $this->getIdCatergoryProduct()) {
            $sql .= " id_catergory_product = '" . $this->getIdCatergoryProduct() . "',";
        }


        $sql .= " create_at = :create_at, 
					  update_at = :update_at
					WHERE 
						id = :id";

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
        $stmt = $this->dbConn->prepare("SELECT * FROM " . $this->tableName. "	WHERE 
						id = :id");
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();
        $product = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $product;
    }
}

?>