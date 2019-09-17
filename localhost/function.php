<?php
define("M_PI",3,14);
if(empty($a))
{
echo"<p>существует</p>";
}
else{
echo"<p>не существует</p>";
}
$panel=[
    'Home'=>'/home',
    'Blog'=>'/blog',
    'About us'=>'/about us'
];
echo"<pre>";
var_dump($panel);
echo"</pre>";
foreach ($panel as $key=>$value)
{
    echo $key."+".$value."<br>";
}
?>
<nav class="navigate">
    <ul>
        <?php
        foreach ($panel as$key=>$value)
        {
            echo"<li><a href='$value'>$key</a></li>";
        }
        ?>
    </ul>
</nav>
