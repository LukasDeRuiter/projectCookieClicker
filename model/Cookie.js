class Cookie {

    //constructor
    constructor(clickPower, level) {
        this.clickPower = clickPower;
        this.level = level;
    }

    //getters and setters
    getClickPower() {
        return this.clickPower;
    }

    setClickPower(clickPower) {
        this.clickPower = clickPower;
    }

    getLevel() {
        return this.level;
    }

    setLevel(level) {
        this.level = level;
    }

    //Methods
    updateCookie() {
        let cookieID = document.getElementById("clickableCookie");
        let imageSrc = `assets/cookieAssets/cookie${this.level}.png`;
        cookieID.src = imageSrc;
    }
}