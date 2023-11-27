<?php
// users/login.php
class login
{

    public function Login($user, $conn)
    {
        if (empty($user->username) || empty($user->password)) {
            $response = ['status' => 0, 'message' => 'Missing required fields.'];
            echo json_encode($response);
            return;
        }

        if ($user->role === "seller") {
            $sql = "SELECT Users.*, Sellers.* FROM Users LEFT JOIN Sellers ON Users.user_id = Sellers.user_id WHERE Users.username = :username AND Users.role = 'seller'";
        } else if ($user->role === "buyer") {
            $sql = "SELECT Users.*, Buyers.* FROM Users LEFT JOIN Buyers ON Users.user_id = Buyers.user_id WHERE Users.username = :username AND Users.role = 'buyer'";
        } else if ($user->role !== "seller" && $user->role !== "buyer") {
            $response = ['status' => 0, 'message' => 'Invalid role.'];
            echo json_encode($response);
            return;
        }

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username', $user->username);
        $stmt->execute();

        $userData = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$userData) {
            $response = ['status' => 0, 'message' => 'Username not found.'];
            echo json_encode($response);
            return;
        }

        $hashedPassword = $userData['password'];
        if (password_verify($user->password, $hashedPassword)) {
            $response = ['status' => 1, 'message' => 'Login successful.', 'userData' => $userData];
        } else {
            $response = ['status' => 0, 'message' => 'Incorrect password.'];
        }

        echo json_encode($response);
    }
}
