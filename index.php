<!DOCTYPE html>
<html lang="en">

<?php include('templates/header.php'); ?>

    <div class="mainContainer">
        <div class="cookieContainer">
            <img src="assets/cookie1.png" class="cookie" id="clickableCookie">
            <p class="cookieNumber" id="counter">0</p>

        </div>
        
        <div class="unitContainer">

            <?php for($i = 0; $i < 5; $i++) { ?>

            <div class="singleUnitCard">
                <div class="unitName"></div>
                <div class="unitPortrait"></div>

                <div class="unitBtnContainer">
                    <div class="unitBtn"></div>
                    <div class="unitBtn"></div>
                    <div class="unitBtn"></div>
                    <div class="unitBtn"></div>
                </div>

                <div class="unitCookies"></div>
                <div class="unitAmount"></div>
                <div class="unitCost"></div>
            </div>

            <?php } ?>

        </div>
    </div>




<?php include('templates/footer.php'); ?>
</html>