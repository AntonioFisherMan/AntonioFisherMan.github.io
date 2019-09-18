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
    if (isset($config[$key])) {
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
