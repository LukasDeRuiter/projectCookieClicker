<div class="userTab" id="tab0">

    <div class="currentLevelProgress"><p id="userLevel"></p>
    <div class="levelContainer"><div class="levelBar" id="levelBarID"></div></div>
</div>

<div class="eatingOptions">
    <p id="userCookiesEaten"></p>
    <p id="userCookiesLevelCap"></p>
    <button class="cookieEatingBtn" value="10">10</button>
    <button class="cookieEatingBtn" value="100">100</button>
    <button class="cookieEatingBtn" value="500">500</button>
    <button class="cookieEatingBtn" value="allCookies">All</button>
</div>

</div>


<div class="cookieTab" id="tab1">

<div class="cookieUpgradeContainer" id="cookieUpgradeContainer">
    <h3 class="cookieUpgradeName" id="cookieUpgradeName"></h3>
    <p class="cookieUpgradeDescription" id="cookieUpgradeDescription"></p>
    <button class="cookieUpgradeBtn" id="cookieUpgradeBtn"></button>

</div>




</div>


<div class="unitsTab" id="tab2">
    <?php for($i = 0; $i < 9; $i++) { ?>

        <div class="upgradeContainer" id="<?php echo "upgradeContainer" . $i ?>">
            <h3 class="upgradeName" id="<?php echo "upgradeName" . $i ?>"></h3>
            <p class="upgradeDescription" id="<?php echo "upgradeDescription" . $i ?>"></p>
            <button class="upgradeBtn" id="<?php echo "upgradeBtn" . $i ?>"></button>

        </div>



    <?php } ?>

</div>

<div id="tab3"></div>
<div id="tab4"></div>
<div id="tab5"></div>
<div id="tab6"></div>
<div id="tab7"></div>
<div id="tab8"></div>