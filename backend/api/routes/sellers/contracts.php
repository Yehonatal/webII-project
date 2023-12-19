<?php
// sellers/contracts.php

class contracts
{

    public function createContract($user, $conn)
    {
        $seller_id = $user->seller_id;
        $buyer_id = $user->buyer_id;
        $product_id = $user->product_id;
        $contract_details = $user->contract_details;
        $contract_id = $this->generateContractId($conn);

        $sql = "INSERT INTO Contracts (contract_id,seller_id, buyer_id, product_id, contract_details, status, timestamp)
                VALUES (:contract_id, :seller_id, :buyer_id, :product_id, :contract_details, 'pending', NOW())";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':contract_id', $contract_id);
        $stmt->bindParam(':seller_id', $seller_id);
        $stmt->bindParam(':buyer_id', $buyer_id);
        $stmt->bindParam(':product_id', $product_id);
        $stmt->bindParam(':contract_details', $contract_details);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Contract submitted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to submit contract.'];
        }

        echo json_encode($response);
    }

    public function getAllBids($user, $conn)
    {
        $sql = "SELECT
                    Bids.bid_id,
                    Bids.amount,
                    Bids.status AS bid_status,
                    Bids.timestamp AS bid_timestamp,
                    Buyers.buyer_id, 
                    Buyers.full_name AS buyer_name,
                    Buyers.contact_number AS buyer_contact,
                    Products.product_id, 
                    Products.name AS product_name,
                    Products.description AS product_description,
                    Products.price AS product_price,
                    Products.status AS product_status,
                    Products.product_type,
                    Products.image_url,
                    Sellers.company_name AS seller_company,
                    Sellers.contact_number AS seller_contact
                FROM
                    Bids
                JOIN Buyers ON Bids.buyer_id = Buyers.buyer_id
                JOIN Products ON Bids.product_id = Products.product_id
                JOIN Sellers ON Products.seller_id = Sellers.seller_id
                WHERE
                    Products.seller_id = :seller_id;";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':seller_id', $user->seller_id);
        $stmt->execute();

        $productsData = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($productsData) {
            $response = ['status' => 1, 'message' => 'Getting bids successful.', 'productsData' => $productsData];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to get bids.'];
        }
        echo json_encode($response);
    }

    private function generateContractId($conn): int
    {
        $contract_id = mt_rand(1000, 9999);

        while (!$this->isUniqueContractId($contract_id, $conn)) {
            $contract_id = mt_rand(1000, 9999);
        }

        return $contract_id;
    }

    private function isUniqueContractId($contract_id, $conn): bool
    {
        $sql = "SELECT COUNT(*) FROM Contracts WHERE contract_id = :contract_id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':contract_id', $contract_id, PDO::PARAM_INT);
        $stmt->execute();
        $count = $stmt->fetchColumn();

        return $count == 0;
    }
}