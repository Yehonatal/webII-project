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

        echo "Here!";

        $sql = "SELECT username, password FROM Users WHERE username = :username";
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
            $response = ['status' => 1, 'message' => 'Login successful.'];
        } else {
            $response = ['status' => 0, 'message' => 'Incorrect password.'];
        }

        echo json_encode($response);
    }
}
