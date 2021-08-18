class Unit {

    //Constructor
    constructor(name, cookies, cost, amount, intervalTime) {
        this.name = name;
        this.cookies = cookies;
        this.cost = cost;
        this.amount = amount;
        this.intervalTime = intervalTime;
        this.multiplyer = 1;
        this.costMultiplyer = 1.25;
    }

    //Getters and Setters
    getName() {
        return this.name;
    }

    getCookies() {
        return this.cookies;
    }

    getCost() {
        return this.cost;
    }

    getAmount() {
        return this.amount;
    }

    getIntervalTime() {
        return this.intervalTime;
    }

    getMultiplyer() {
        return this.multiplyer;
    }

    getCostMultiplyer() {
        return this.costMultiplyer;
    }

    setCookies(cookies) {
        this.cookies = cookies * multiplyer;
    }
    

    setCost() {
        this.cost *= this.costMultiplyer;
        this.cost = Math.ceil(this.cost);
    }

    //Methods
    createCookies() {
        return this.cookies * this.amount;
    }

    buyUnit(amountBought){
        this.amount += amountBought;
    }

    displayAddedCookies(unitValue){
        let addPopup = document.getElementById(`unitPopup${unitValue}`);
        addPopup.innerHTML = "+ " + this.createCookies() + " Cookies!";
        addPopup.style.animation = "addedCookies 5s 1";
        addPopup.onanimationend = function stopAnimation(){
            addPopup.style.animation = "noAddedCookies 1s infinite";
        }
    }

}