<?php

class RegisterBuyer
{
    public function registerBuyer($user_id, $contact_number, $full_name, $conn)
    {
        $sql = "INSERT INTO Buyers(buyer_id, user_id, full_name, contact_number) VALUES(:buyer_id,:user_id, :full_name,:contact_number)";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':buyer_id', $user_id);
        $stmt->bindParam(':user_id', $user_id);
        $stmt->bindParam(':full_name', $full_name);
        $stmt->bindParam(':contact_number', $contact_number);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Buyer Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
    }
}
