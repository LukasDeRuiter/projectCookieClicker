<?php

include('config/db_connect.php');

if(isset($_POST['submit'])){
    $test = $_POST['loadPassword'];
    $test2 = $_POST['passwordID'];

    foreach($allUserSaves as $saveFile){
        if($saveFile['userID'] == $test2 && $saveFile['userPassword'] == $test){
            echo "it WORKS!!!";
            $linkToSavedGame = "Location: index.php?id=" . $saveFile['userID'];
            header($linkToSavedGame);
        } else {
            echo "no match";
    }
}
}

?>


<!DOCTYPE html>
<html lang="en">

<?php include('templates/header.php'); ?>

<h1>Save files</h1>

<div class="saveFileContainer">
    <?php foreach($allUserSaves as $saveFile):?>
    <div class="singleSaveFile">
        <h3><?php echo htmlspecialchars($saveFile['userName']); ?></h3>
        <p><?php echo "ID: " . htmlspecialchars($saveFile['userID']); ?> </p>
        <p><?php echo "Cookies: " . htmlspecialchars($saveFile['userCookies']); ?> </p>
        <form method="POST">
        <label class="loadLabel">Password: </label>
        <input type="text" name="loadPassword" class="loadPasswordField" value="" id="<?php echo "passid" . htmlspecialchars($saveFile['userID']); ?>">
        <input type="hidden" name="passwordID" value="<?php echo htmlspecialchars($saveFile['userID']); ?>">
        <input type="submit" name="submit" value="submit" id="<?php echo "submitid" . htmlspecialchars($saveFile['userID']); ?>">
    </form>
    </div>

    <?php endforeach; ?>
    </div>


<?php include('templates/footer.php'); ?>