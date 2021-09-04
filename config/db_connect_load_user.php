<?php

include('../connection.php');

if(!$connection) {
    echo "error: " . mysqli_connect_error();
    exit();
}

$user = $_GET['id'];

$sql3 = "SELECT userCookies, userLevel, userCookiesEaten, userCookieLevelCap, userDevotion, userOfferedCookies, userOfferedUnits,
 userBoughtLand, userCookiesOfInsight, cookieLevel FROM user WHERE userID = $user";

$result3 = mysqli_query($connection, $sql3);

$whatWeGot = mysqli_fetch_all($result3, MYSQLI_ASSOC);
$oldCookies = $whatWeGot[0]['userCookies'];
$oldLevel = $whatWeGot[0]['userLevel'];
$oldCookiesEaten = $whatWeGot[0]['userCookiesEaten'];
$oldCookieLevelCap = $whatWeGot[0]['userCookieLevelCap'];
$oldDevotion = $whatWeGot[0]['userDevotion'];
$oldOfferedCookies = $whatWeGot[0]['userOfferedCookies'];
$oldOfferedUnits = $whatWeGot[0]['userOfferedUnits'];
$oldBoughtLand = $whatWeGot[0]['userBoughtLand'];
$oldCookiesOfInsight = $whatWeGot[0]['userCookiesOfInsight'];
$oldCookieLevel = $whatWeGot[0]['cookieLevel'];

mysqli_free_result($result3);
?>