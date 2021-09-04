
<?php

include('config/db_connect_save.php');
include('config/db_connect_load_user.php');

?>

<div>
<form>
<?php

    for($i = 0; $i < $amountOfUnits; $i++) { 
    $actualUnit = array($allUnits[$i]);
    ?>
            <input type="hidden" value="<?php echo $actualUnit[0]['unitName'] ?>" id="<?php echo "unitProperty1" . $i?>">
            <input type="hidden" value="<?php echo $actualUnit[0]['unitCookies'] ?>" id="<?php echo "unitProperty2" . $i?>">
            <input type="hidden" value="<?php echo $actualUnit[0]['unitCost'] ?>" id="<?php echo "unitProperty3" . $i?>">
            <input type="hidden" value="<?php echo $actualUnit[0]['unitAmount'] ?>" id="<?php echo "unitProperty4" . $i?>">
            <input type="hidden" value="<?php echo $actualUnit[0]['intervalTime'] ?>" id="<?php echo "unitProperty5" . $i?>">
            <input type="hidden" value="<?php echo $actualUnit[0]['unitMultiplyer'] ?>" id="<?php echo "unitProperty6" . $i?>">
            <input type="hidden" value="<?php echo $actualUnit[0]['unitCostMultiplyer'] ?>" id="<?php echo "unitProperty7" . $i?>">
            <input type="hidden" value="<?php echo $actualUnit[0]['unitHomelandName'] ?>" id="<?php echo "unitProperty8" . $i?>">
            <input type="hidden" value="<?php echo $actualUnit[0]['unitHomelandCost'] ?>" id="<?php echo "unitProperty9" . $i?>">
            <input type="hidden" value="<?php echo $actualUnit[0]['unitHomelandSvg'] ?>" id="<?php echo "unitProperty10" . $i?>">
            <input type="hidden" value="<?php echo $actualUnit[0]['unitHomelandBought'] ?>" id="<?php echo "unitProperty11" . $i?>">
            <?php } ?>

            <input type="hidden" value="<?php echo $oldCookies ?>" id="oldCookies">
            <input type="hidden" value="<?php echo $oldLevel ?>" id="oldLevel">
            <input type="hidden" value="<?php echo $oldCookiesEaten ?>" id="oldCookiesEaten">
            <input type="hidden" value="<?php echo $oldCookieLevelCap ?>" id="oldCookieLevelCap">
            <input type="hidden" value="<?php echo $oldDevotion ?>" id="oldDevotion">
            <input type="hidden" value="<?php echo $oldOfferedCookies ?>" id="oldOfferedCookies">
            <input type="hidden" value="<?php echo $oldOfferedUnits ?>" id="oldOfferedUnits">
            <input type="hidden" value="<?php echo $oldBoughtLand ?>" id="oldBoughtLand">
            <input type="hidden" value="<?php echo $oldCookiesOfInsight ?>" id="oldCookiesOfInsight">
            <input type="hidden" value="<?php echo $oldCookieLevel ?>" id="oldCookieLevel">
    </form>
</div>