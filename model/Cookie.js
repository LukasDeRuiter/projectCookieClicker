class Cookie {

    //constructor
    constructor(clickPower, level, image) {
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
        let imageSrc = `assets/cookieAssets/cookie${this.level}.png`;
        document.getElementById("clickableCookie").src = imageSrc;
    }

}