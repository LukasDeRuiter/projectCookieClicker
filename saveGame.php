

<form class="saveGameForm" method="POST" action="index.php">
    <h2>Save your game here</h2>
    <label class="saveLabel">Please create a (unique) playerName: </label>
    <input type="text" name="name" class="saveInputField" value="<?php echo htmlspecialchars($saveName) ?>">
    <p class="errormessage"><?php echo $nameError ?></p>

    <label class="saveLabel">Please create a password: </label>
    <input type="text" name="password" class="saveInputField" value="<?php echo htmlspecialchars($savePassword) ?>">
    <p class="errormessage"><?php echo $nameError ?></p>
</form>