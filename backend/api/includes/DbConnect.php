<?php
// api/includes/DbConnect.php
class DbConnect
{
    private $SERVER = "localhost";
    private $USER = "root";
    private $PSW = "";
    private $Db_Name = "YourHome";

    public function connect()
    {
        try {
            $connection = new PDO('mysql:host=' . $this->SERVER . ';dbname=' . $this->Db_Name, $this->USER, $this->PSW);
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $connection;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}


/* 
    How to use this?
        - Include the file in to the file you want to import the connection into
        - create the object using the class DbConnect 
        - using object->connect() the connection will be returned 
        - var_dump the connection to check

*/