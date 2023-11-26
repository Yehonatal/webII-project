<?php
// users/index.php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

echo "Testing from Users!";

include __DIR__ . "/../../includes/DbConnect.php"; // Use an absolute path

include "./register.php";
include "./login.php";

$regObject = new register();
$loginObject = new login();
$DbObject = new DbConnect();
$method = $_SERVER['REQUEST_METHOD'];

$conn = $DbObject->connect();
$user = json_decode(file_get_contents('php://input'));

switch ($method) {
    case 'POST':
        $action = isset($user->action) ? $user->action : '';
        if ($action === 'Register') {
            $regObject->Register($user, $conn);
        } elseif ($action === 'Login') {
            $loginObject->Login($user, $conn);
        } else {
            $response = ['status' => 0, 'message' => 'Invalid action.'];
            echo json_encode($response);
        }
}
