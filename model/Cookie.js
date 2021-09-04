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
        cookieID.style.animation = "changeCookie1 0.5s 1 ease-in";
        let imageSrc = `assets/cookieAssets/cookie${this.level}.svg`;
        cookieID.addEventListener('animationend', function() {
            cookieID.src = imageSrc;
            cookieID.style.animation = "changeCookie2 0.5s 1 ease-out";

        })
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

    cookieClickedAnimation() {
        let div = document.createElement("img");
        document.getElementById("cookieContainer").append(div);
        div.style.position = "absolute";
        let pickCookie = Math.floor(Math.random() * this.level) + 1;
        let pickLocation = Math.floor(Math.random() * 90) + 10;
        div.style.width = `2rem`;
        div.style.height = `2rem`;
        div.src = `assets/cookieAssets/cookie${pickCookie}.svg`;
        div.style.zIndex = "10";
        div.style.top = `0%`;
        div.style.left = `${pickLocation}%`;
        div.style.animation = "clickCursorAnimation2 2s 1";
        div.addEventListener("animationend", function() {
            document.getElementById("cookieContainer").removeChild(div);
        })
    }
}