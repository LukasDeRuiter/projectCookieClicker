class Cookie {

    //Variables
    static cookieUpgradesName = ["", "", "Dark Chocolate", "White Chocolate", "Jumbo Quality"];
    static cookieUpgradesDescription = ["", "", "Get some dark chocolate cookie", "Upgrade to white chocolate!", "Upgrade to jumbo's quality cookie!"];
    static cookieUpgradesCost = [0, 0, 500, 1000, 1500];

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
    
    updateUpgradeContainer() {
        document.getElementById("cookieUpgradeName").innerHTML = Cookie.cookieUpgradesName[this.level + 1];
        document.getElementById("cookieUpgradeDescription").innerHTML = Cookie.cookieUpgradesDescription[this.level + 1];
        document.getElementById("cookieUpgradeBtn").innerHTML = Cookie.cookieUpgradesCost[this.level + 1];
    }

    buyCookieUpgrade() {
        this.level += 1;
        this.clickPower = this.level;
        this.updateCookie();
        this.updateUpgradeContainer();
    }
}