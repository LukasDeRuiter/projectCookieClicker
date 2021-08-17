<?php

include('../connection.php');

if(!$connection) {
    echo "error: " . mysqli_connect_error();
    exit();
}

$sql = "SELECT * FROM user";

$result = mysqli_query($connection, $sql);

$allUserSaves = mysqli_fetch_all($result, MYSQLI_ASSOC);

$lastSave = end($allUserSaves);
$lastSaveID = $lastSave["userID"];

mysqli_free_result($result);
?>