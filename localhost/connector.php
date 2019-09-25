<?php
require_once('config.php');

class connector{

    private $conn=null;
    function __construct(){}
    function __destruct(){}
    public function openConnection()
    {
        $this->conn=mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
        if($this->conn)
        {
            return $this->conn;
        }
            echo mysqli_connect_error();
    }
    public function closeConnection()
    {
        mysqli_close($this->conn);
    }


}