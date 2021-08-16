<?php

include('config/db_connect.php');

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
    </div>

    <?php endforeach; ?>
    </div>


<?php include('templates/footer.php'); ?>