<?php

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
