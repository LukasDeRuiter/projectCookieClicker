<?php

include('config/db_connect.php');

$saveName = "";
$savePassword = "";

$nameError = "";
$passwordError = "";

if(isset($_POST['submit'])) {
    
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
        $number = mysqli_real_escape_string($connection, $_POST['number']);
        $name = mysqli_real_escape_string($connection, $_POST['name']);
        $type = mysqli_real_escape_string($connection, $_POST['type']);

        $sql = "INSERT INTO pokemon(id,name,type) VALUES('$number', '$name', '$type')";

        if(mysqli_query($connection, $sql)) {
            mysqli_close($connection);
            header('Location: index.php');
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

    <input type="submit" name="submit" value="submit" class="submitBtn">

    <?php $unitName = "unitNumber";
    for($i = 0; $i < 5; $i++) { 
        for($j = 0; $j < 7; $j++) { ?>
            <input type="hidden" value="" id="<?php echo $unitName . $i . $j ?>">
            <?php }
            } ?>
</form>
</div>