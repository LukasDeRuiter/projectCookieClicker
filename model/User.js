class User {

    //Variables

    //Constructor
    constructor(level, eatenCookies, cookieLevelCap) {
        this.level = level;
        this.eatenCookies = eatenCookies;
        this.cookieLevelCap = cookieLevelCap;
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

    setCookieLevelCap(cookieLevelCap) {
        this.cookieLevelCap = cookieLevelCap;
    }

    //Methods
    levelUp() {
        this.eatenCookies -= this.cookieLevelCap;
        this.level += 1;
        this.cookieLevelCap = Math.ceil(this.cookieLevelCap * 1.5);
        this.updateUserUI();
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

}