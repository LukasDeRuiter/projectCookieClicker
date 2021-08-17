<?php

include('../connection.php');

if(!$connection) {
    echo "error: " . mysqli_connect_error();
    exit();
}

$sqlUnits = "SELECT * FROM unit WHERE userID = " . $_GET['id'];

$resultUnits = mysqli_query($connection, $sqlUnits);

$allUnits = mysqli_fetch_all($resultUnits, MYSQLI_ASSOC);

mysqli_free_result($resultUnits);
?>