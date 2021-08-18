<?php

include('../connection.php');

if(!$connection) {
    echo "error: " . mysqli_connect_error();
    exit();
}

$user = $_GET['id'];

$sql3 = "SELECT userCookies FROM user WHERE userID = $user";

$result3 = mysqli_query($connection, $sql3);

$whatWeGot = mysqli_fetch_all($result3, MYSQLI_ASSOC);
$oldCookies = $whatWeGot[0]['userCookies'];

mysqli_free_result($result3);
?>