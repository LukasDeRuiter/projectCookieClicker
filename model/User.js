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
    }

    checkIfLevelUp() {
        if(this.eatenCookies >= this.cookieLevelCap) {
            levelUp();
        }
    }

}