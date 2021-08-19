

<!DOCTYPE html>
<html lang="en">

<?php include('templates/header.php'); ?>

    <div class="mainContainer" id="mainContainer">

    <div class="cookiePopupContainer">
    <?php for($i = 0; $i < 3; $i++) { ?>
        <?php $popupName = "unitPopup" . $i ?>
        <div class="cookiePopup" id="<?php echo $popupName ?>"></div>
        <?php } ?>

    </div>
    <div class="interactiveContainer">
        <div class="cookieContainer">
            <img class="cookie" id="clickableCookie">
            <p class="cookieNumber" id="counter">0</p>

        </div>
        
        <div class="unitContainer">
            <?php $containerStrings = array("unitName", "unitPortrait", "unitCookies", "unitAmount", "unitCost")?>
            <?php for($i = 0; $i < 3; $i++) { 
                $unitName = "assets/unitsvg" . "0" . ".php";
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

    <div class="optionsContainer">
        <div class="tabsContainer">
            <div class="tabsBtn"></div>
            <div class="tabsBtn"></div>
            <div class="tabsBtn"></div>
            <div class="tabsBtn"></div>
            <div class="tabsBtn"></div>
            <div class="tabsBtn"></div>
            <div class="tabsBtn"></div>
            <div class="tabsBtn"></div>
            <div class="tabsBtn"></div>
            </div>

        <div class="tabs">
            </div>
    </div>

    <?php if(isset($_GET['id'])){
        include('loadedGame.php'); ?>
        <script src="createSaveUnits.js"></script>
    <?php } else { ?>
        <script src="createNewUnits.js"></script>
        <?php } ?>
        
        
        <?php include('templates/saveGame.php');?>

<?php include('templates/footer.php'); ?>

</html>
