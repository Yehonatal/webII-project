<?php

include '../sellers/create.php';
include '../buyers/create.php';

class Register
{
    public function registerUser($user, $conn): void
    {
        try {
            if (empty($user->username) || empty($user->password) || empty($user->email) || empty($user->role)) {
                $response = ['status' => 0, 'message' => 'Missing required fields.'];
                echo json_encode($response);
                return;
            }

            // Ensure a valid role is provided
            if (!in_array($user->role, ['seller', 'buyer'])) {
                $response = ['status' => 0, 'message' => 'Invalid user role.'];
                echo json_encode($response);
                return;
            }

            $user->user_id = $this->generateUniqueUserId($conn);
            $hashedPassword = password_hash($user->password, PASSWORD_DEFAULT);

            $sql = "INSERT INTO Users(user_id, username, password, email, role, user_image_url, contact_number) 
                    VALUES(:user_id, :username, :password, :email, :role, :user_image_url, :contact_number)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':user_id', $user->user_id);
            $stmt->bindParam(':username', $user->username);
            $stmt->bindParam(':password', $hashedPassword);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':role', $user->role);
            $stmt->bindParam(':user_image_url', $user->user_image_url);
            $stmt->bindParam(':contact_number', $user->contact_number);

            if ($stmt->execute()) {
                $this->handleRoleSpecificRegistration($user, $conn);
                $response = ['status' => 1, 'message' => 'User Record created successfully.'];
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
        $user_id = mt_rand(1000, 9999);

        while (!$this->isUniqueUserId($user_id, $conn)) {
            $user_id = mt_rand(1000, 9999);
        }

        return $user_id;
    }

    private function isUniqueUserId($user_id, $conn): bool
    {
        $sql = "SELECT COUNT(*) FROM Users WHERE user_id = :user_id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':user_id', $user_id);
        $stmt->execute();
        $count = $stmt->fetchColumn();

        return $count == 0;
    }

    private function handleRoleSpecificRegistration($user, $conn): void
    {
        if ($user->role == "seller") {
            $sellerObj = new RegisterSeller();
            $sellerObj->registerSeller($user->user_id, $user->contact_number, $user->company_name, $conn);
        } elseif ($user->role == "buyer") {
            $buyerObj = new RegisterBuyer();
            $buyerObj->registerBuyer($user->user_id, $user->contact_number, $user->full_name, $conn);
        }
    }
}
