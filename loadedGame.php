
<?php

include('config/db_connect_save.php');

?>

<div>


<?php if(isset($_GET['id'])){
    print_r($allUnits);
    $arr = array($allUnits[0]);
    print_r($arr);

    for($i = 0; $i < 3; $i++) { 
    $actualUnit = array($allUnits[$i]);
    ?>
            <input type="hidden" value="<?php $actualUnit['unitName'] ?>" id="<?php echo $unitName . $i?>">
            <input type="hidden" value="<?php $actualUnit['unitCookies'] ?>" id="<?php echo $unitName . $i?>">
            <input type="hidden" value="<?php $actualUnit['unitCost'] ?>" id="<?php echo $unitName . $i?>">
            <input type="hidden" value="<?php $actualUnit['unitName'] ?>" id="<?php echo $unitName . $i?>">
            <input type="hidden" value="<?php $actualUnit['unitIntervalTime'] ?>" id="<?php echo $unitName . $i?>">
            <input type="hidden" value="<?php $actualUnit['unitMultiplyer'] ?>" id="<?php echo $unitName . $i?>">
            <input type="hidden" value="<?php $actualUnit['unitCostMultiplyer'] ?>" id="<?php echo $unitName . $i?>">
            <?php }
            } ?>
</div>