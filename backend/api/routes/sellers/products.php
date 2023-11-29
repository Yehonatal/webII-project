<?php
// sellers/products.php

class products
{

    public function createProduct($user, $conn)
    {
        
        try {
            $user->product_id = $this->generateUniqueUserId($conn);
    
            $sql = "INSERT INTO Products(product_id, seller_id, name, description, price, status, product_type, image_url) 
                        VALUES(:product_id, :seller_id, :name, :description, :price, :status, :product_type, :image_url)";
            $status = "available";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':product_id', $user->product_id);
            $stmt->bindParam(':seller_id', $user->seller_id);
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':description', $user->product_detail);
            $stmt->bindParam(':price', $user->product_price);
            $stmt->bindParam(':status', $status);
            $stmt->bindParam(':product_type', $user->house_type);
            $stmt->bindParam(':image_url', $user->user_image_url);
    
            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Product Record created successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($response);
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    private function generateUniqueUserId($conn): int
    {
        $product_id = mt_rand(1000, 9999);

        while (!$this->isUniqueUserId($product_id, $conn)) {
            $product_id = mt_rand(1000, 9999);
        }

        return $product_id;
    }

    private function isUniqueUserId($product_id, $conn): bool
    {
        $sql = "SELECT COUNT(*) FROM Products WHERE product_id = :product_id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':product_id', $product_id);
        $stmt->execute();
        $count = $stmt->fetchColumn();

        return $count == 0;
    }
}