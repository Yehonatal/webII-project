<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include __DIR__ . "/../../includes/DbConnect.php"; // Use an absolute path
include "./products.php";
include "./contracts.php";

$prodObject = new products();
$contObject = new contracts();
$DbObject = new DbConnect();
$method = $_SERVER['REQUEST_METHOD'];

$conn = $DbObject->connect();
$user = json_decode(file_get_contents('php://input'));


switch ($method) {
    case 'POST':
        $action = isset($user->action) ? $user->action : '';
        if ($action === 'create_product') {
            $prodObject->createProduct($user, $conn);
        } elseif ($action === 'create_contract') {
            $contObject->createContract($user, $conn);
        } elseif ($action === 'get_products') {
            $prodObject->getSellerProducts($user, $conn);
        } else {
            $response = ['status' => 0, 'message' => 'Invalid action.'];
            echo json_encode($response);
        }
}
