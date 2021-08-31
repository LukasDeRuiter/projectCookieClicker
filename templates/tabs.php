<div class="userTab" id="tab0">
    <div class="userTitle"><h2>Character progress</h2></div>
    <div class="currentLevelProgress"><p id="userLevel"></p>
    <div class="levelContainer"><div class="levelBar" id="levelBarID"></div></div>
</div>

<div class="eatingOptions">
    <div class="eatingTextContainer">
    <p id="userCookiesEaten"></p>
    <p id="userCookiesLevelCap"></p>

</div>
    <div class="cookieEatingBtnContainer">
    <button class="cookieEatingBtn" value="10">10</button>
    <button class="cookieEatingBtn" value="100">100</button>
    <button class="cookieEatingBtn" value="500">500</button>
    <button class="cookieEatingBtn" value="allCookies">All</button>
</div>
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
    <?php for($i = 0; $i < ($amountOfUnits * 3); $i++) { ?>

        <div class="upgradeContainer" id="<?php echo "upgradeContainer" . $i ?>">
            <h3 class="upgradeName" id="<?php echo "upgradeName" . $i ?>"></h3>
            <p class="upgradeDescription" id="<?php echo "upgradeDescription" . $i ?>"></p>
            <button class="upgradeBtn" id="<?php echo "upgradeBtn" . $i ?>"></button>

        </div>



    <?php } ?>

</div>

<div id="tab3"></div>
<div id="tab4"></div>


<div class="devotionTab" id="tab5">
    <h2>Choose your devotion</h2>
    <div class="devotionTab serapielTab">
        <h4 class="devotionTitle">Seraphiel</h4>
        <p class="devotionDescription">Offer 100.000 cookies to start the path to salvation</p>
        <button class="devotionBtn">Select</button>
    </div>

    <div class="devotionTab molochTab">
        <h4 class="devotionTitle">Moloch</h4>
        <p class="devotionDescription">Sacrifice 1000 followers to start the path to supremacy</p>
        <button class="devotionBtn">Select</button>
    </div>

    <div class="devotionTab cernunnosTab">
        <h4 class="devotionTitle">Cernunnos</h4>
        <p class="devotionDescription">Purchase 200 acres of forest to start the path of regrowth</p>
        <button class="devotionBtn">Select</button>
    </div>

    <div class="devotionTab greatmonadTab">
        <h4 class="devotionTitle">Great Monad</h4>
        <p class="devotionDescription">Collect 7 cookies of insight to start the path to apotheosis</p>
        <button class="devotionBtn">Select</button>
    </div>
    
</div>


<div id="tab6"></div>
<div id="tab7"></div>
<div id="tab8"></div>