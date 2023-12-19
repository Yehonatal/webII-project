<?php

class Bids
{
    public function getCurrentProduct($conn, $product_id)
    {
        $sql = "SELECT * FROM Products WHERE product_id = :product_id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':product_id', $product_id, PDO::PARAM_INT);

        if (!$stmt->execute()) {
            $response = ['status' => 0, 'message' => 'Failed to get product data.'];
        }

        $productsData = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($productsData) {
            $response = ['status' => 1, 'message' => 'Getting product successful.', 'productsData' => $productsData];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to get product data.'];
        }

        echo json_encode($response);
    }

    public function bidOnProduct($conn, $user)
    {
        $product_id = $user->product_id;
        $bid = $user->bid;
        $bid_detail = $user->bid_detail;
        $user_id = $user->user_id;
        $bid_detail = $user->bid_detail;
        $bid_id = $this->generateBidId($conn);

        $sql = "INSERT INTO Bids (bid_id, buyer_id, product_id, amount, status, timestamp, bid_detail) VALUES (:bid_id, :buyer_id, :product_id, :amount, :status, NOW(), :bid_detail)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':bid_id', $bid_id, PDO::PARAM_INT);
        $stmt->bindParam(':buyer_id', $user_id, PDO::PARAM_INT);
        $stmt->bindParam(':product_id', $product_id, PDO::PARAM_INT);
        $stmt->bindParam(':amount', $bid, PDO::PARAM_STR);
        $stmt->bindValue(':status', 'pending', PDO::PARAM_STR);
        $stmt->bindParam(':bid_detail', $bid_detail, PDO::PARAM_STR);

        try {
            $stmt->execute();
            $response = ['status' => 1, 'message' => 'Bid placed successfully.'];
        } catch (PDOException $e) {
            $response = ['status' => 0, 'message' => 'Failed to place bid. Error: ' . $e->getMessage()];
        }

        echo json_encode($response);
    }

    private function generateBidId($conn): int
    {
        $bid_id = mt_rand(1000, 9999);

        while (!$this->isUniqueBidId($bid_id, $conn)) {
            $bid_id = mt_rand(1000, 9999);
        }

        return $bid_id;
    }

    private function isUniqueBidId($bid_id, $conn): bool
    {
        $sql = "SELECT COUNT(*) FROM Bids WHERE bid_id = :bid_id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':bid_id', $bid_id, PDO::PARAM_INT);
        $stmt->execute();
        $count = $stmt->fetchColumn();

        return $count == 0;
    }
}