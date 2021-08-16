<?php

$connectionSave = mysqli_connect('localhost', 'lukasderuiter', '-', 'project_cookie_clicker');

if(!$connectionSave) {
    echo "error: " . mysqli_connect_error();
    exit();
}

$sqlUnits = "SELECT * FROM unit WHERE userID = " . $_GET['id'];

$resultUnits = mysqli_query($connectionSave, $sqlUnits);

$allUnits = mysqli_fetch_all($resultUnits, MYSQLI_ASSOC);

mysqli_free_result($resultUnits);
?>