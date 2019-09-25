<?php
require_once("connector.php");

class BasicDB {
    private $tableName = '';
    private $connector = NULL;
    private $conn = NULL;

    public function __construct($newNameT){
        $this->connector = new Connector();
        $this->conn = $this->connector->openConnection();
        $this->tableName = $newNameT;
    }
    public function __destruct(){
        $this->connector->closeConnection();
        unset($this->connector);
    }
    public function getConn(){
        return $this->conn;
    }
    public function getRows($min = 0, $max = 10){
        $query = "SELECT * FROM ".$this->tableName." LIMIT $min, $max";
        return $this->executeQuery($query, "SELECT");
    }
    public function getIdRow($options){
        var_dump($options);
        if($this->conn){
            $query = "SELECT id FROM ".$this->tableName." WHERE";
            foreach ($options as $key => $value) {
                $query = $query." $key = '$value' AND";
            }
            $query = substr($query, 0, strlen($query)-4);
            echo $query;
            $result = $this->executeQuery($query, "SELECT");
            if(count($result) > 0){
                return $result[0]['id'];
            }
        } else {
            echo mysqli_connect_error();
        }
    }
    public function getRow($id){
        if(empty($id)) return null;

        if($this->conn){
            $query = "SELECT * FROM ".$this->tableName." WHERE id = $id";

            $result = $this->executeQuery($query, "SELECT");
            if(count($result) == 1){
                return $result[0];
            }
        } else {
            echo mysqli_connect_error();
        }
    }
    public function updateRow($id, $col, $newValue){
        if(empty($id) || empty($col) && empty($newValue)) return null;

        if($this->conn){
            if($newValue != NULL) $query = "UPDATE ".$this->tableName." SET $col = '$newValue' WHERE id = $id LIMIT 1";
            else $query = "UPDATE ".$this->tableName." SET $col = NULL WHERE id = $id LIMIT 1";
            $this->executeQuery($query, "UPDATE");
            if(mysqli_affected_rows($this->conn) == 1){
                return true;
            } else {
                return false;
            }
        } else {
            echo mysqli_connect_error();
        }
    }
    public function deleteRow($id){
        if(empty($id)) return null;

        if($this->conn){
            $query = "DELETE FROM ".$this->tableName." WHERE id = '$id'";
            if($this->executeQuery($query, "DELETE") == 1){
                return true;
            }else{
                return false;
            }
        } else {
            echo mysqli_connect_error();
        }
    }
    public function addRow($row){
        if($this->conn){
            $query = "INSERT INTO ".$this->tableName."(";
            foreach ($row as $key => $value) {
                $query = $query."$key,";
            }
            $query = substr($query, 0, strlen($query)-1);
            $query = $query.") VALUES(";
            foreach ($row as $key => $value) {
                if($value != NULL) $query = $query."'$value',";
                else $query = $query."NULL,";
            }
            $query = substr($query, 0, strlen($query)-1);
            $query = $query.")";
            echo $query;
            $this->executeQuery($query, "INSERT");
            if(mysqli_affected_rows($this->conn) == 1){
                return true;
            } else {
                return false;
            }
        } else {
            echo mysqli_connect_error();
        }
    }
    public function changeTableName($newTableName){
        $newTableName = strtolower($newTableName);
        if($this->conn){
            $queryGetTables = "SHOW TABLES";
            $result = $this->executeQuery($queryGetTables, "SELECT");
            for ($i = 0; $i < count($result); $i++){
                foreach ($result[$i] as $key => $value){
                    var_dump($value)."<br>";
                    if(strcmp($value, $newTableName) == 0){
                        $this->tableName = $newTableName;
                        return true;
                    }
                }
            }

        } else {
            echo mysqli_connect_error();
        }
        return false;
    }

    protected function executeQuery($query, $mode = "SELECT"){
        $result = mysqli_query($this->conn, $query);
        switch ($mode){
            case "SELECT":
                if($result->num_rows > 0){
                    return mysqli_fetch_all($result, MYSQLI_ASSOC);
                }
                break;
            case "INSERT":
            case "UPDATE":
            case "DELETE":
                return mysqli_affected_rows($this->conn);
            default:
                return NULL;
                break;
        }
    }
}

/*$dat = new BasicDB('options');
*/