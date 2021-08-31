<!-- tab 0 -->
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

<!-- tab 1 -->

<div class="cookieTab" id="tab1">

<div class="cookieUpgradeContainer" id="cookieUpgradeContainer">
    <h3 class="cookieUpgradeName" id="cookieUpgradeName"></h3>
    <p class="cookieUpgradeDescription" id="cookieUpgradeDescription"></p>
    <button class="cookieUpgradeBtn" id="cookieUpgradeBtn"></button>

</div>


</div>

<!-- tab 2 -->

<div class="unitsTab" id="tab2">
    <?php for($i = 0; $i < ($amountOfUnits * 3); $i++) { ?>

        <div class="upgradeContainer" id="<?php echo "upgradeContainer" . $i ?>">
            <h3 class="upgradeName" id="<?php echo "upgradeName" . $i ?>"></h3>
            <p class="upgradeDescription" id="<?php echo "upgradeDescription" . $i ?>"></p>
            <button class="upgradeBtn" id="<?php echo "upgradeBtn" . $i ?>"></button>

        </div>



    <?php } ?>

</div>

<!-- tab 3 -->

<div class="landTab" id="tab3">

<?php for($i = 0; $i < $amountOfUnits; $i++) { ?>

    <div class="landContainer" id="<?php echo "landForUnit" . $i ?>">
    <p class="landName">Land</p>
    <div class="landContainer2">
    <p class="landBenefit">benefits: </p>
    <img class="landTile" src="assets/landAssets/landTile1.svg">
</div>
    <button class="purchaseLandBtn" value="<?php echo $i ?>"></button>
</div>

    <?php } ?>

</div>

<div id="tab4"></div>

<!-- tab 5 -->

<div class="devotionTab" id="tab5">
    <h2 class="devotionHeader">Choose your devotion</h2>

    <div class="devotionOptions">
    <div class="devotionContainer seraphielTab">
        <h4 class="devotionTitle">Seraphiel</h4>
        <img class="devotionPic" src="assets/devotionPictures/seraphiel.png">
        <p class="devotionDescription">Offer 100.000 cookies to start the path to salvation</p>
        <button class="devotionBtn" value="seraphiel">Select</button>
    </div>

    <div class="devotionContainer molochTab">
        <h4 class="devotionTitle">Moloch</h4>
        <img class="devotionPic" src="assets/devotionPictures/moloch.png">
        <p class="devotionDescription">Sacrifice 1000 followers to start the path to supremacy</p>
        <button class="devotionBtn" value="moloch">Select</button>
    </div>

    <div class="devotionContainer cernunnosTab">
        <h4 class="devotionTitle">Cernunnos</h4>
        <img class="devotionPic" src="assets/devotionPictures/cernunnos.png">
        <p class="devotionDescription">Purchase 200 acres of forest to start the path of regrowth</p>
        <button class="devotionBtn" value="cernunnos">Select</button>
    </div>

    <div class="devotionContainer greatmonadTab">
        <h4 class="devotionTitle">G̶̡̛̼͇̼̮̜̈̀̃̊͛́̾͌͆̍̀͊͘͜r̸̡͙͉̞͈̞̝͎͚͔͙̻̤̖͖͚̋̾̑̾̎͊̋̃͒̂́̉͐̃͛̃͜͝͠ë̵̗̼̻̙̩͓̦͎̰̘̙̞̓̓́͂̽̀̀̈́͐̉̽̚͝ạ̷̗̮̦͍̼̘̩̦̪͌t̷̨̨̟̥̼̝̠̬͔͔̞̦̖͙̹͓̘́̿̾̈̄̀́̉̐̅͆̿̇̾̔̕͠ͅ ̶̡̨̧̢̢͚̼̼̹͓͉̗̮̤̟̬͐̆̓̈́͊͂̒Ḿ̶̧̯̙̬̭̜̝͈͔̑̃̾̀͛͋̂ͅo̴̧̡̰͎͈͉̝̺̹͐ͅn̵̛̛̛͔̍͋͂́̊̾̄̄͘ą̵͈̖̤̝̳̳̜̭͍͚̗̜̹͈͖̝͈̥̂̾̓̃̑̌͐̀̆͂d̵͈͎̊̅͆͛̆̎̄̔̍́̿̅</h4>
        <img class="devotionPic" src="assets/devotionPictures/greatmonad.png">
        <p class="devotionDescription">C̵̫̟̯̮̼̟͚̩̫̠̦̥͍̀͋̈́̎͌̅̅̆̑͂͛̓͘͝͝͠ͅo̸̳̜͇͙̺̰̠̗͓̓̿́͒̍͌̀̓͌͗ͅl̴͎͎͚̳̚ĺ̴̨̧̥͍̜̲̖̺̬̖͇͖͔̦͓̭̀̑͋̽͂̇͋̓͝e̷̬̲̦͌̌͛̓͛̎̌́͊̃͋̀̈́̌̋c̷̢̧̳̥̣̠͎̦͉̀͆́̄̃͂̉͋̄͗͘͠t̵̺̜͕̙̼͖͖͍̗͆̅ ̴̭͋͒͊̉̔̈́͗͐́̇̀̀́̈́̓̈͐̇7̶̧̡̛̜͓͖̩̖̫̭̰͓͓̈́̌́̈̅̇̒̈́̚̚̕͜ͅ ̶̨̭͍̼̱̫͉̿̒͊̂͗̎́͌̃̏͘͘͠c̷̛̈́̒̄̊̈́͋̔̌̈́́̃́̚͜o̶̧̠̥͙͖̝̠͉̾̌̊ͅo̵̢̫̟͙̬̹̪̞͇̯̬̙̩̭̔͌̎̃̈́̈̂́̃̈́́̒͊͝͝͝k̴̨̢̢̖͍͖̟̉̌̆̽͌͂̈́̅̾̿͘͠i̶̹̮̗͓͇̭̳̲̭̙̖͇͔̭̬͈̬̹̋͊ͅę̴̛̛͈̦̪͉̲̲͔̲̺̘͖̥̼̦̹̹͑͆́̉̄͗̀̈́͠ś̷̢͖̲̥̜̒̃̋͋̓̌̓̍̉̔́̑͝͝ ̵̢̫̟̤̞̲̟̝̃̍̉͌̾́̂̉̒̇̀̊͘̕̕͝ơ̷̧̖̥͎͙͇̣̖̰͑̉̈́͑̚f̷̲̠̰͚̞̉͒͆́̀͐͑̽̓̎͘̕ ̵̡͎̹͍͇̭̩͕̖̣̬̱̰͚͙̫̠̇͌̀̈́̑̊̿͌̏͂͌́̈͐̔̍̈͘͝ͅì̶̡̛̟̭̹̟̰͈̙̗̜̹̰͉̈̈͊̒́͒̈́̉̄n̴̛̛͇͂́́̆̿͌͛̍̂̏̓̀s̶̨̨̨̭̞̤̱̭̥͓̉̐̾͑͗́͛͂́ỉ̶̡̢̜̠̪̲͉̪̤̬̯͎̙͈̠͙̖̜́̈̐͌͐̀̊̑̃̏̓̋̿ͅģ̷̛̠͎̈̉́̈́̏̈͐̾̇͂̉̑͑̚̚ḫ̶̨̬͚̘̭̝͙̪̬͉̜̼̩̼̲͇̄̋̄̐̈́̎̓͒͋̈́́́̓͐͐̒͆̊ţ̶̯̤̯̣͉̼̯͉͉͍̻̯͖͇́́̈́̕̚ ̵̢̢̻̦̖̻̲́͐͆̅̾̓̾̈́̅͐̃̊͒͂̒̚ṫ̵̢͙͕̔̇̃̈̈́͘̕o̸̡̢̦͔̩̘̺̯͉̯͂͋̊̀͒̓̏̈̐̊́͂̒͒̈́̚͝͝ ̵̢̤̠̤͇̦̫͚͍̬̳̹̤̻͖̜̱̭̣̀͛̈̉̽͗́̒̉̓̉̈́̾̄̿́͘s̷̛̛̝̣̞͎̤͕̭̝͈͕̗̪͇͇̼͍̅̑͗̀̾̃̓͜͝ṯ̵̯̿̎̍͌̃̒̑̂̆͊̓̚͝͠ä̷̡̲̻̩̺͇̞̂̑͆̀͜r̶̟̠̜̓̀̅̆̄̿̽̋̌͗̊̀̄̌͝t̵͉͓̻̀̒͋̌̃̇̊̽͛͆͛͘͝͝ ̵̨̛͖̙̰̖̯̗̬̠͇͗̊̉͂̃̓͛̋̿̾̐̏̋̇͂̕͝t̸̡̘̤̏͐̎͂̎̋͐͐̍͒͗̊͒h̵̢̡̜̮̳̠̤͗͐̀͂͐͊̀́̋̐̀̉͋̈͘ͅe̵̡̧̛͍̮̯͇͚͔̹͖͔̟̝̰̬̪̯̞͒͋̓̿̀͒̾̀̌͝ ̵̱̼̮̭̗͖̄̽͛̋̇̈́͒̓̂̐̉́̄̚͠p̷̛͙̫͎̖̥̰̙̼̼̩̹͇̙̀̽͒̈́͛̃̽̒͗̈́͊̎̋̍̃ͅä̸̡͍͉̻̞͓͇̬͎̝̘̺͍̻̤́͘t̶̝̃ͅh̴̡̻̲̰͚́́͊̎̈́̍͗̚ ̵̨̡̠͈̘̜̝̻͖̯̳̹̙̓͠t̸̛̥̹̮͚̤̯̠̳̱̂̔ỏ̴̦͍̘̟̖͊̂̊̃̈́͐͗̔͆͛̄̐̕͘͝͝ ̵̢̧̢̛͍̺̗͙̺̱̬̰̠́̍̊̅͆̔̂͂̋̍̍̃̆̆̓̔̏͠ͅḁ̴̛͙̹̐̔̈́͑̋̎͘p̷̛̰̹̖͛̉̉̇̀ó̷̬̫͈̳̬̣̯̞̹̺̯̭̩̓͊̔̆̈́̀͋̅̊̌͑́͗́̔̀͐͝t̶̨̢̩̮̻̳̣̰̺͈̥̾̉̋́̽̃͌̆̈́͘͘͘h̷̳̰͛̔͋̈́́̈́̄̊̾͑͌͘ë̸͔̝̭͉̝̜͚̲̠́̈͗́̇͑̊͑̇̃̚̕o̸̭̤̼̳̘̹̼̞͔̲̝̱̦̱̮̰͙̊̇̽̈ͅs̸̺̳̰͚̺̊͊̽̚ì̶̢͎͕̫͎̳̥̬̩̼͚͍̔̓̇͝ͅs̵͓̯̋̎̋̅̍̓̕͝</p>
        <button class="devotionBtn" value="great monad">Ş̶̠̗͈͕͇̼̗͇͈͍͈̣̓̌̑̄ê̶͚͇͖̞̘̯̩̦̹͖̈́̈́̋̋̋̃̃̆͌̔̄̚ͅl̴͚̪̹̬̤̦̦̪͓̩̪͖̪͈̠̄̈͐̚͠ͅȅ̵̛̱̥͇̘͓͔̟̹̜̖̙͇̳̮̄͑̑̈́̃̓̒̌́̍͗̐̇͜͜͜͠c̷̢̖̖̟͉̬̭͖̗̉͑̂̔̋̇̌̌͌̽́̏́̇́̕͝t̷̢̢͖̰̹͈͉̬̘̞̙̙̥͍̙͙͙͗͗̍͜</button>
    </div>
    </div>

</div>


<div id="tab6"></div>
<div id="tab7"></div>
<div id="tab8"></div>