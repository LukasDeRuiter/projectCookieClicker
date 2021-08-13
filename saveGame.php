<?php

include('config/db_connect.php');

$saveName = "";
$savePassword = "";
$saveCookies = "";

$nameError = "";
$passwordError = "";

if(isset($_POST['submit'])) {

    $saveCookies = $_POST['cookiesSave'];
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

        //change here
        $saveName = mysqli_real_escape_string($connection, $_POST['name']);
        $savePassword = mysqli_real_escape_string($connection, $_POST['password']);
        $saveCookies = mysqli_real_escape_string($connection, $_POST['cookiesSave']);

        $sql = "INSERT INTO user(userID,userName,userPassword,userCookies) VALUES('$newSaveID', '$saveName', '$savePassword', '$saveCookies')";

        if(mysqli_query($connection, $sql)) {

            for($i = 0; $i < 3; $i++) {
            $saveUnitName = $_POST['unitNumber' . $i . '0'];
            $saveUnitCookies = $_POST['unitNumber' . $i . '1'];
            $saveUnitCost = $_POST['unitNumber' . $i . '2'];
            $saveUnitAmount  = $_POST['unitNumber' . $i . '3'];
            $saveUnitIntervalTime = $_POST['unitNumber' . $i . '4'];
            $saveUnitMultiplyer = $_POST['unitNumber' . $i . '5'];
            $saveUnitCostMultiplyer = $_POST['unitNumber' . $i . '6'];
            $sql2 = "INSERT INTO unit(unitName,unitCookies,unitCost,unitAmount,intervalTime,unitMultiplyer,unitCostMultiplyer,userID) VALUES('$saveUnitName', '$saveUnitCookies', '$saveUnitCost',
         '$saveUnitAmount', '$saveUnitIntervalTime', '$saveUnitMultiplyer' , '$saveUnitCostMultiplyer', '$newSaveID')";
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
<form class="saveGameForm" method="POST" action="index.php">
    <h2>Save your game here</h2>
    <label class="saveLabel">Please create a (unique) playerName: </label>
    <input type="text" name="name" class="saveInputField" value="<?php echo htmlspecialchars($saveName) ?>">
    <p class="errormessage"><?php echo $nameError ?></p>

    <label class="saveLabel">Please create a password: </label>
    <input type="text" name="password" class="saveInputField" value="<?php echo htmlspecialchars($savePassword) ?>">
    <p class="errormessage"><?php echo $passwordError ?></p>

    <input type="hidden" value="" id="cookiesSave" name="cookiesSave">

    <input type="submit" name="submit" value="submit" class="submitBtn">

    <?php $unitName = "unitNumber";
    for($i = 0; $i < 3; $i++) { 
        for($j = 0; $j < 7; $j++) { ?>
            <input type="hidden" value="" name="<?php echo $unitName . $i . $j ?>" id="<?php echo $unitName . $i . $j ?>">
            <?php }
            } ?>
</form>
</div>