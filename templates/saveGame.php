<?php

include('config/db_connect.php');

$saveName = "";
$savePassword = "";
$saveCookies = "";

$nameError = "";
$passwordError = "";

if(isset($_POST['submit'])) {

    $saveCookies = $_POST['cookiesSave'];
    $saveLevel = $_POST['levelSave'];
    $saveEatenCookies = $_POST['cookiesEatenSave'];
    $saveCookieLevelCap = $_POST['cookieLevelCapSave'];
    $saveDevotion = $_POST['devotionSave'];
    $saveOfferedCookies = $_POST['offeredCookiesSave'];
    $saveOfferedUnits = $_POST['offeredUnitsSave'];
    $saveBoughtLand = $_POST['boughtLandSave'];
    $saveCookiesOfInsight = $_POST['cookiesOfInsightSave'];

    $saveCookieLevel = $_POST['cookieLevelSave'];

    $newSaveID = $lastSaveID + 1;

    if(empty($_POST['name'])) {
        $nameError = "A name is required!";
    } else {
        $nameError = "";
        $saveName = $_POST['name'];
        if(!preg_match('/^[a-zA-Z\s]+$/', $saveName)) {
            $nameError = "Please enter a name using only lowercase and uppercase letters!";
            $saveName = "";
        }
    }

    if(empty($_POST['password'])) {
        $passwordError = "A password is required that is made out of numbers!";
    } else {
        $passwordError = "";
        $savePassword = $_POST['password'];
        if(!filter_var($savePassword , FILTER_VALIDATE_INT)) {
            $passwordError = "Please enter a password that is made out of numbers!";
            $savePassword = "";
    }
}

    if($nameError == "" && $passwordError == "") {

        $saveName = mysqli_real_escape_string($connection, $_POST['name']);
        $savePassword = mysqli_real_escape_string($connection, $_POST['password']);
        $saveCookies = mysqli_real_escape_string($connection, $_POST['cookiesSave']);

        $sql = "INSERT INTO user(userID,userName,userPassword,userCookies,userLevel,userCookiesEaten,userCookieLevelCap, 
        userDevotion,userOfferedCookies,userOfferedUnits,userBoughtLand,userCookiesOfInsight,cookieLevel) 
        VALUES('$newSaveID', '$saveName', '$savePassword', '$saveCookies', '$saveLevel', '$saveCookieEaten', '$saveCookieLevelCap', 
        '$saveDevotion', '$saveOfferedCookies', '$saveOfferedUnits', '$saveBoughtLand', '$saveCookiesOfInsight', '$saveCookieLevel')";

        if(mysqli_query($connection, $sql)) {

            for($i = 0; $i < $amountOfUnits; $i++) {
            $saveUnitName = $_POST['unitNumber' . $i . '0'];
            $saveUnitCookies = $_POST['unitNumber' . $i . '1'];
            $saveUnitCost = $_POST['unitNumber' . $i . '2'];
            $saveUnitAmount  = $_POST['unitNumber' . $i . '3'];
            $saveUnitIntervalTime = $_POST['unitNumber' . $i . '4'];
            $saveUnitMultiplyer = $_POST['unitNumber' . $i . '5'];
            $saveUnitCostMultiplyer = $_POST['unitNumber' . $i . '6'];
            $saveUnitHomeland = $_POST['unitNumber' . $i . '7'];
            $sql2 = "INSERT INTO unit(unitName,unitCookies,unitCost,unitAmount,intervalTime,unitMultiplyer,unitCostMultiplyer,unitHomeland,
            userID) VALUES('$saveUnitName', '$saveUnitCookies', '$saveUnitCost', '$saveUnitAmount', '$saveUnitIntervalTime', '$saveUnitMultiplyer' , '$saveUnitCostMultiplyer',
             '$saveUnitHomeland', '$newSaveID')";
         mysqli_query($connection, $sql2);
            }


            mysqli_close($connection);
        } else {
            echo "Error with database connection: " . mysqli_error($connection);
        }
    } else{
        echo "Form is not filled in correctly!";
    }
}


?>

<div class = "saveContainer" id="saveContainerID">
<h2 class="saveTitle">Save your game here</h2>
<form class="saveGameForm" method="POST" action="index.php">
    <label class="saveLabel">Please create a (unique) playerName: </label> <br>
    <input type="text" name="name" class="saveInputField" value="<?php echo htmlspecialchars($saveName) ?>">
    <p class="errormessage"><?php echo $nameError ?></p>

    <label class="saveLabel">Please create a password: </label> <br>
    <input type="text" name="password" class="saveInputField" value="<?php echo htmlspecialchars($savePassword) ?>">
    <p class="errormessage"><?php echo $passwordError ?></p>

    <input type="hidden" value="" id="cookiesSave" name="cookiesSave">
    <input type="hidden" value="" id="levelSave" name="levelSave">
    <input type="hidden" value="" id="cookiesEatenSave" name="cookiesEatenSave">
    <input type="hidden" value="" id="cookieLevelCapSave" name="cookieLevelCapSave">
    <input type="hidden" value="" id="devotionSave" name="devotionSave">
    <input type="hidden" value="" id="offeredCookiesSave" name="offeredCookiesSave">
    <input type="hidden" value="" id="offeredUnitsSave" name="offeredUnitsSave">
    <input type="hidden" value="" id="boughtLandSave" name="boughtLandSave">
    <input type="hidden" value="" id="cookiesOfInsightSave" name="cookiesOfInsightSave">

    <input type="hidden" value="" id="cookieLevelSave" name="cookieLevelSave">

    <input type="submit" name="submit" value="submit" class="submitBtn">

    <?php $unitName = "unitNumber";
    for($i = 0; $i < $amountOfUnits; $i++) { 
        for($j = 0; $j < 8; $j++) { ?>
            <input type="hidden" value="" name="<?php echo $unitName . $i . $j ?>" id="<?php echo $unitName . $i . $j ?>">
            <?php }
            } ?>
</form>
<button class="exitBtn" id="exitBtn">Cancel save</button>
</div>