<?php
// buyer/products.php

class Products
{
    public function getAllAvailableProducts($conn)
    {
        $sql = "SELECT * FROM Products";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $productsData = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($productsData) {
            $response = ['status' => 1, 'message' => 'Getting products successful.', 'productsData' => $productsData];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to get product data.'];
        }

        echo json_encode($response);
    }
}