<?php
require_once('basicDB.php');
class Menu extends basicDB{
    public function __construct()
    {
        parent::__construct('navigation');

    }
    public function getChilds($id){
     if(empty($id))return null;
     if($this->getConn())
     {

     }
    }
    public function getParentId($id){}
    public  function deleteElement($id){}
}
$menu = new Menu();
//var_dump($menu->getRows());echo "<br><br>";
//var_dump($menu->getRow(2));echo"<br><br>";
//var_dump($menu->getIdRow([name=>'BLOG', link=>'/blog']));echo "<br><br>";
//var_dump($menu->updateRow(3, name,'ABOUT US'));echo"<br>";
//var_dump($menu->deleteRow(2));
