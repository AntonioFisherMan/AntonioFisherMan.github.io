<?php
require("function.php");
?>

<!doctype html>
<html lang="<?php echo getConfig('lang');?>">
    <meta charset="UTF-8">
    <meta name="<?php echo getConfig('description');?>">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo getConfig('title');?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php
echo"<pre>";
echo var_dump(getOptions(1,10));
echo"</pre>";
?>
</body>
</html>
