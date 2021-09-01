class User {

    //Variables

    //Constructor
    constructor(level, eatenCookies, cookieLevelCap, devotion, offeredCookies, offeredUnits, boughtLand, cookiesOfInsight) {
        this.level = level;
        this.eatenCookies = eatenCookies;
        this.cookieLevelCap = cookieLevelCap;
        this.devotion = devotion;
        this.offeredCookies = offeredCookies;
        this.offeredUnits = offeredUnits;
        this.boughtLand = boughtLand;
        this.cookiesOfInsight = cookiesOfInsight;
    }

    //Getters and setters
    getLevel() {
        return this.level;
    }

    getEatenCookies() {
        return this.eatenCookies;
    }

    getCookieLevelCap() {
        return this.cookieLevelCap;
    }

    getOfferedCookies() {
        return this.offeredCookies;
    }

    getOfferedUnits() {
        return this.offeredUnits;
    }

    getBoughtLand() {
        return this.boughtLand;
    }

    setCookieLevelCap(cookieLevelCap) {
        this.cookieLevelCap = cookieLevelCap;
    }

    setOfferedUnits(offeredUnits) {
        this.offeredUnits = offeredUnits;
        document.getElementById("sacrificeCounter").innerHTML = this.offeredUnits;
    }

    setOfferedCookies(offeredCookies) {
        this.offeredCookies = offeredCookies;
        document.getElementById("offeredCookiesCounter").innerHTML = this.offeredCookies;
    }

    setBoughtLand(boughtLand) {
        this.boughtLand = boughtLand;
        document.getElementById("landCounter").innerHTML = this.boughtLand;
    }

    //Methods
    levelUp() {
        this.eatenCookies -= this.cookieLevelCap;
        this.level += 1;
        this.cookieLevelCap = Math.ceil(this.cookieLevelCap * 1.5);
        this.updateUserUI();

        document.getElementById("levelText1").innerHTML = `New level: ${this.level}!`
        document.getElementById("levelText2").innerHTML = `Cookies needed for next level: ${this.cookieLevelCap}!`

        let levelUpPopup = document.getElementById("levelUpContainer");
        levelUpPopup.style.display = "flex";
        levelUpPopup.style.animation = "levelUp 6s 1";
        levelUpPopup.onanimationend = function endLevelup() {
            levelUpPopup.style.display = "none";
        }
    }

    checkIfLevelUp() {
        if(this.eatenCookies >= this.cookieLevelCap) {
            this.levelUp();
        }
    }

    updateUserUI() {
        document.getElementById("userLevel").innerHTML = `Level: ${this.level}`;
        document.getElementById("userCookiesLevelCap").innerHTML = `Next level: ${this.cookieLevelCap}`;
        this.updateCookiesEaten();
    }

    updateCookiesEaten() {
        document.getElementById("userCookiesEaten").innerHTML = `Cookies eaten: ${this.eatenCookies}`;
        let widthPercentage = (this.eatenCookies / this.cookieLevelCap) * 100;
        document.getElementById("levelBarID").style.width = `${widthPercentage}%`;
    }

    eatCookies(object, cookiesToEat) {
        if(object.getCookies() >= cookiesToEat) {
            object.setCookies(object.getCookies() - cookiesToEat);
            this.eatenCookies += cookiesToEat;
            this.updateCookiesEaten();
            this.checkIfLevelUp();
            object.updateCounter();
        }
    }

    pickDevotion(chosenDeity){
        switch(chosenDeity) {

            case "seraphiel":
                if(this.offeredCookies >= 100000) {
                    this.devotion = "seraphiel";
                } else {
                    giveErrorMessage("Not enough cookies sacrificed!");
                }
                break;

            case "moloch":
                if(this.offeredUnits >= 1000) {
                    this.devotion = "moloch";
                } else {
                    giveErrorMessage("Not enough units sacrificed!");
                }
                break;
                
            case "cernunnos":
                if(this.boughtLand >= 20) {
                    this.devotion = "cernunnos";
                } else {
                    giveErrorMessage("Not enough land bought!");
                }
                break;

            case "great monad":
                if(this.cookiesOfInsight >= 7) {
                    this.devotion = "great monad";
                } else {
                    giveErrorMessage("Ṇ̸̨̡̙͖͓̖̗̟͕͉̲̗̱̕ͅo̸̧̤̥̻̻̙̱̱̫̩̣̿̓̍̒̆͂̌̏̈́̆͆̋̑̚̕͜t̵̡͎̳̞̳̯̜̜̄́͋̑̿͂̊̆͑̃́̔̄ ̵̨̤̦̣̯̲̩̣̖͈̥̘͔͕̙̑̑̽͗̀̃͐̈́͆͒̓̿̕̕͝ḙ̷̓̐̽̏͋̀̈̍͘͜ṇ̷͍̇̐̐̍̉̕͘͠o̵͖͋̑̒̐̔͗̈́͒̒̈̕͘ų̷̢̢̤̠͈̮̩̳͈̝̳̽̀͌͆̿̈́̈͂̆͠g̴͉͊̾̀ḩ̴̧̢̧̛̙̣͕̖͉͇̀̇͂̆̅͊̓̕̕ ̴̡̞̺̑̋̐̑̇̆̊͋͗͝c̸̡̨̥͖̋̓̈́͛̄̂̕͝ȯ̵̡͕̻͈̟̮͍̮̘̞̈́͆̈͋̿̃̂̿̔͋͗̿̽ò̵̦̹̌̾̋͋̆̑̊̇͑̚͠͝͝k̵̻̮͊̊̓̿̒̈́̈́̔͗̓̂̿̇ì̴̧̡̱̝̠͉̮͕̰͈̤̼̯̿̀ĕ̴̜̠̼͇̼̫̐s̸̢͎̋́̑́̓̄̈́͑ ̸̨̢̛̛̦̞͚̬̘̖̮̉̓̈́͊́͊́̾̀̓͊o̷̮̤̘̟̼̳̲̍͊͐͋̒̋͌͌͊f̷̛̱̭̒́̓́̒̑̄̍͛́͘̕͘͝ ̸̡̛͖̹̱̬͉̫̟̣̹͐̂̄͜͜i̴͚̻̺̝̻̇n̵̻̮͕͖̠̯̣̜̺̝̓̾ş̴̨̬͕̙͍̺̹̲̲͓̍̈́i̸̧̤̥̚g̶̫̘̬̑ḩ̶͙̝͉͉̥̻̘̝͇̩̘̠͗͊͋̍͛͜t̷̨̧̮̰̥̘͓̰̺̰̟̻̙͋̈́͂̓̓̄̂̈̑̑̔̉̃̃ ̷̢̢̡̡̛̻̮̝̻͔̙͋͌̓̀̏̇̌̐̂̓͆̑̚ͅf̸͔͈̫̿̓͋͊̈̃̐̋͐͑͝͠o̴̧̢̻̳͍̝̱̳͍͙̜͆ű̷͈͕̼̟̤̹̣͓̃̓͆̑͗̓̋̀̍͋̚͜͝͝n̸̨̤̦͔͍̺̻̙̖̦̜̖̥̜͚̑̒̓̉d̸̫̾̎͛̈̈̓͆!̸̛̗̠̮̯̾͛͐̍̄͋͛̈́́̚͠͝");
                }
                break;
        }
    }

}