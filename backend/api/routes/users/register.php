<?php

// users/register.php

class register
{

    public function Register($user, $conn): void
    {
        try {
            if (empty($user->username) || empty($user->password) || empty($user->email)) {
                $response = ['status' => 0, 'message' => 'Missing required fields.'];
                echo json_encode($response);
                return;
            }
            $user->user_id = $this->generateUniqueUserId($conn);
            $hashedPassword = password_hash($user->password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO Users(user_id, username, password, email, role, user_image_url) VALUES(:user_id, :username, :password, :email, :role, :user_image_url)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':user_id', $user->user_id);
            $stmt->bindParam(':username', $user->username);
            $stmt->bindParam(':password', $hashedPassword);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':role', $user->role);
            $stmt->bindParam(':user_image_url', $user->user_image_url);


            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
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
}