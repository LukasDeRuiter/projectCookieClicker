<?php

$saveName = "";
$savePassword = "";

$nameError = "";
$passwordError = "";


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