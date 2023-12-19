<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


include __DIR__ . "/../../includes/DbConnect.php"; // Use an absolute path
include "./products.php";
include "./bids.php";


$prodObject = new products();
$bidObject = new Bids();
$DbObject = new DbConnect();
$method = $_SERVER['REQUEST_METHOD'];

$conn = $DbObject->connect();
$user = json_decode(file_get_contents('php://input'));




switch ($method) {
    case 'POST':
        $action = isset($user->action) ? $user->action : '';
        if ($action === 'get_all_products') {
            $prodObject->getAllAvailableProducts($conn);
        } elseif ($action === 'current_product') {
            $bidObject->getCurrentProduct($conn, $user->product_id);
        } elseif ($action === 'bid_on_product') {
            $bidObject->bidOnProduct($conn, $user);
        } else {
            $response = ['status' => 0, 'message' => 'Invalid action.'];
            echo json_encode($response);
        }
}
