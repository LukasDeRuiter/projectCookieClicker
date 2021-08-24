<div class="unitsTab">
    <?php for($i = 0; $i < 3; $i++) { ?>

        <div class="upgradeContainer">
            <h3 id="<?php echo "upgradeName" . $i ?>"></h3>
            <p id="<?php echo "upgradeDescription" . $i ?>"></p>
            <p id="<?php echo "upgradeCost" . $i ?>"></p>
            <button class="upgradeBtn" id="<?php echo $i ?>"></button>

        </div>



    <?php } ?>

</div>

