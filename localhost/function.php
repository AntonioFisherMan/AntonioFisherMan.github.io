<?php
require_once("config.php");
$panel = [
    'Home' => ['Home1' => '/home', 'Home2' => '/home2'],
    'About us' => ['About us1' => '/about us1', 'About us2' => '/about us2'],
    'Main' => ['Main1' => '/main1', 'Main2' => '/main2']
];
function getConfig($key)
{
    if (empty($key)) {

        return null;
    }
    $config = [
        'lang' => 'en',
        'title' => 'первый проект',
        'description' => 'Работа'
    ];
    if (isset($config[$key])){
        return $config[$key];
    } else {
        return null;
    }
}
function getOptions($min,$max)
{
$connect=mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
if($connect)
{
    $query="SELECT id,name,value FROM options LIMIT $min,$max";
    $result=mysqli_query($connect,$query);
    if($result->num_rows>0){
        mysqli_close($connect);
        return mysqli_fetch_all($result,MYSQLI_ASSOC);
    }
}
}
function getOptionId($name,$value)
{
    if(empty($name)||empty($value))
    {
        return null;
    }

    $connect=mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
    if($connect)
    {
        $query="SELECT id FROM options WHERE name='$name' AND VALUE ='$value'";
        $result=mysqli_query($connect,$query);
        if($result->num_rows>0){
            mysqli_close($connect);
            return mysqli_fetch_assoc($result)['id'];
        }
    }
}
function getOption($name)
{
if(empty($name))
{
    return null;
}

    $connect=mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
    if($connect)
    {
        $query="SELECT name FROM options WHERE name='$name'";
        $result=mysqli_query($connect,$query);
        if($result->num_rows>0){
            mysqli_close($connect);
            return mysqli_fetch_assoc($result)['name'];
        }
    }
}
function addOption($name,$value)
{
    $connect=mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
    if($connect)
    {
        $query = "INSERT INTO options(name,value) VALUES ('$name','$value')";
        mysqli_query($connect,$query);
        if(mysqli_affected_rows($connect)==1){

            return true;
        }
        else{
            return false;
        }
        mysqli_close($connect);
    }
}
function deleteOptions($id)
{
    if(empty($id))return null;
    $connect=mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
    if($connect)
    {
        $query="DELETE FROM options WHERE id='$id' LIMIT 1";
        mysqli_query($connect,$query);
        if(mysqli_affected_rows($connect)==1){

            return true;
        }
        else{
            return false;
        }
        mysqli_close($connect);
    }

}

?>
<nav >
    <ul class="navigate">
        <?php
        foreach ($panel as $key => $value) {
            echo "<li>$key<div class='divHover'>";
            foreach ($value as $key2 => $value2) {
                echo "<span><a href='$value2'>$key2</a></span>";
            }
            echo "</div></li>";
        }
        ?>
    </ul>
</nav>
