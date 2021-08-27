
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
            <?php } ?>

            <input type="hidden" value="<?php echo $oldCookies ?>" id="oldCookies">
    </form>
</div>