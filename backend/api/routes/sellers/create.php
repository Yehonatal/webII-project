<?php

class RegisterSeller
{
    public function registerSeller($user_id, $contact_number, $company_name, $conn)
    {
        $sql = "INSERT INTO Sellers(seller_id, user_id, company_name, contact_number) VALUES(:seller_id,:user_id, :company_name,:contact_number)";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':seller_id', $user_id);
        $stmt->bindParam(':user_id', $user_id);
        $stmt->bindParam(':company_name', $company_name);
        $stmt->bindParam(':contact_number', $contact_number);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Seller Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
    }
}
