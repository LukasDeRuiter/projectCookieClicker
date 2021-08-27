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
        this.cookieLevelCap *= 1.5;
        this.updateUserUI();
    }

    checkIfLevelUp() {
        if(this.eatenCookies >= this.cookieLevelCap) {
            this.levelUp();
        }
    }

    updateUserUI() {
        document.getElementById("userLevel").innerHTML = `Level: ${this.level}`;
        document.getElementById("userCookiesLevelCap").innerHTML = `Level: ${this.cookieLevelCap}`;
        this.updateCookiesEaten();
    }

    updateCookiesEaten() {
        document.getElementById("userCookiesEaten").innerHTML = `Level: ${this.eatenCookies}`;
    }

    eatCookies(object, cookiesToEat) {
        if(object.getCookies() >= cookiesToEat) {
            object.setCookies(object.getCookies() - cookiesToEat);
            this.eatenCookies += cookiesToEat;
            this.updateCookiesEaten();
        }
    }

}