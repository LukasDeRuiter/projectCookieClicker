class Cookie {

    //Variables
    static cookieUpgradesName = ["", "", "Medium Cookie", "Large Cookie", "Chocolate Chip Cookie", "Dark Chocolate Cookie", "White Chocolate Chip Cookie", "Cranberry Cookie"];
    static cookieUpgradesDescription = ["", "", "Upgrade to a larger cookie!", "Even more Cookie!", "No cookie is complete without chocolate chips!", 
    "Get some of those good dark chocolate cookies!", "White chocolate is my favorite chocolate!", "Cranberries make everything better!"];
    static cookieUpgradesCost = [0, 0, 500, 1000, 1500, 2000, 2500, 3000];

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
        let imageSrc = `assets/cookieAssets/cookie${this.level}.svg`;
        cookieID.src = imageSrc;
    }
    
    updateUpgradeContainer() {
        document.getElementById("cookieUpgradeName").innerHTML = Cookie.cookieUpgradesName[this.level + 1];
        document.getElementById("cookieUpgradeDescription").innerHTML = Cookie.cookieUpgradesDescription[this.level + 1];
        document.getElementById("cookieUpgradeBtn").innerHTML = `Cost: ${Cookie.cookieUpgradesCost[this.level + 1]}`;
    }

    buyCookieUpgrade() {
        this.level += 1;
        this.clickPower = this.level;
        this.updateCookie();
        this.updateUpgradeContainer();
    }
}