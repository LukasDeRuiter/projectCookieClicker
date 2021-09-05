<!-- Welcome to the source code of my Cookie Clicker game!

This php-doc contains the main code for setting up the containers, templates and checking is a save file is loaded through the 
GET-superglobal. Most of the further php/html code is worked out in templates, which are placed here inside 'include' tags.

The javascript part of this project is mostly written in OOP(Object oriented Programming), of which the classes as placed within the
model directory. The main file running this code is the  'cookie.js' file, which I recommend reading after this one. 

Enjoy the code, and any question are more than welcome!

Kind regards,
Lukas de Ruiter -->

<!DOCTYPE html>
<html lang="en">

<!-- Header -->
<?php include('templates/header.php'); ?>

<!-- This contains the game -->
    <div class="mainContainer" id="mainContainer">

<!-- Popup bar for cookies made by units -->
    <div class="cookiePopupContainer">
    <?php for($i = 0; $i < $amountOfUnits; $i++) { ?>
        <?php $popupName = "unitPopup" . $i ?>
        <div class="cookiePopup" id="<?php echo $popupName ?>"></div>
        <?php } ?>

    </div>

<!-- Container for the clickable cookie and units-cards -->
    <div class="interactiveContainer">
        <div class="cookieContainer" id="cookieContainer">

            <div class="currencyCounter">
                
            <div class="currencyContainer" id="cookieCurrencyContainer">
        <img src="assets/cookieAssets/cookie2.svg" class="currencyImg">
        <p class="currencyNumber" id="counter"></p>
    </div>

    <div class="currencyContainer" id="landCurrencyContainer">
        <img src="assets/landAssets/landTile1.svg" class="currencyImg">
        <p class="currencyNumber" id="landCounter"></p>
    </div>

    <div class="currencyContainer" id="sacrificeCurrencyContainer">
        <img src="assets/sacrificeIcon.svg" class="currencyImg">
        <p class="currencyNumber" id="sacrificeCounter"></p>
    </div>

    <div class="currencyContainer" id="offeredCookiesCurrencyContainer">
        <img src="assets/offerCookieIcon.svg" class="currencyImg">
        <p class="currencyNumber" id="offeredCookiesCounter"></p>
    </div>

    </div>

        <div class="randomCookiePopup" id="randomCookie"><img src="assets/cookieAssets/cookie1.svg"></div>

            <img class="cookie" id="clickableCookie">
            <p class="errorMessage" id="errorMessage"></p>


        </div>
        
        <div class="unitContainer" id="unitContainer">
            <?php $containerStrings = array("unitName", "unitPortrait", "unitCookies", "unitAmount", "unitCost")?>
            <?php for($i = 0; $i < $amountOfUnits; $i++) { 
                $unitName = "assets/unitsvg" . $i . ".php";
                ?>

            <div class="singleUnitCard" id="<?php echo "unitCard" . $i ?>">
                <div class="unitName"  id="<?php echo $containerStrings[0] . $i ?>"></div>
                <div class="unitPortrait"  id="<?php echo $containerStrings[1] . $i ?>"><?php include("$unitName"); ?></div>

                <div class="unitBtnContainer">
                    <div class="unitBtn" id="<?php echo $i ?>">1</div>
                    <div class="unitBtn" id="<?php echo $i ?>">2</div>
                    <div class="unitBtn" id="<?php echo $i ?>">5</div>
                    <div class="unitBtn" id="<?php echo $i ?>">10</div>
                </div>

                <div class="unitCookies" id="<?php echo $containerStrings[2] . $i ?>"></div>
                <div class="unitAmount" id="<?php echo $containerStrings[3] . $i ?>"></div>
                <div class="unitCost" id="<?php echo $containerStrings[4] . $i ?>"></div>
            </div>

            <?php } ?>

        </div>
    </div>

    <!-- This container holds the different tabs and buttons, please view the 'tabs.php' file for further information -->
    <div class="optionsContainer">
        <div class="tabsContainer">
            <div class="tabsBtn" id="tabsBtn0">Player</div>
            <div class="tabsBtn" id="tabsBtn1">Cookie</div>
            <div class="tabsBtn" id="tabsBtn2">Units</div>
            <div class="tabsBtn" id="tabsBtn3">Land</div>
            <div class="tabsBtn" id="tabsBtn4">actions</div>
            <div class="tabsBtn" id="tabsBtn5">Devotion</div>
            <div class="tabsBtn" id="tabsBtn6"></div>
            <div class="tabsBtn" id="tabsBtn7"></div>
            <div class="tabsBtn" id="tabsBtn8"></div>
            </div>

        <div class="tabs">
            <?php include('templates/tabs.php');?>
        </div>
    </div>

    <!-- Here the program loads scripts/files based on if a save file is being loaded. Part 1 is with a save load, part 2 is a new game-->
    <?php if(isset($_GET['id'])){
        include('loadedGame.php'); ?>
        <script src="createSaveUnits.js"></script>
        <script src="createNewUpgrades.js"></script>
    <?php } else { ?>
        <script src="createNewUnits.js"></script>
        <script src="createNewUpgrades.js"></script>
        <?php } ?>
        
        </div>

    <!-- Here are two files, one for the levelup Popup, which shows when leveling up, and one for the save game screen. For more information
on this part of the code, please check out 'saveGame.php' -->
        <?php include('templates/levelUp.php');?>
        <?php include('templates/saveGame.php');?>

<!-- Footer -->
<?php include('templates/footer.php'); ?>

</html>
