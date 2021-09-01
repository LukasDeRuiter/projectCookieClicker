class Unit {

    //Constructor
    constructor(name, cookies, cost, amount, intervalTime, landName, landCost, landSvgNumber, landIsBought) {
        this.name = name;
        this.cookies = cookies;
        this.cost = cost;
        this.amount = amount;
        this.intervalTime = intervalTime;
        this.multiplyer = 1;
        this.costMultiplyer = 1.25;
        this.homeland = new Land(landName, landCost, landSvgNumber, landIsBought);
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

    getHomeland() {
        return this.homeland;
    }

    setMultiplyer(extraAmount) {
        this.multiplyer += extraAmount;
    }

    getCostMultiplyer() {
        return this.costMultiplyer;
    }

    setCost() {
        this.cost *= this.costMultiplyer;
        this.cost = Math.ceil(this.cost);
    }

    //Methods
    createCookies() {
        return (this.cookies * this.multiplyer) * this.amount;
    }

    buyUnit(amountBought){
        this.amount += amountBought;
    }

    displayAddedCookies(unitValue){
        if(this.amount >= 1) {
        let addPopup = document.getElementById(`unitPopup${unitValue}`);
        addPopup.innerHTML = "+ " + this.createCookies() + " Cookies!";
        addPopup.style.animation = "addedCookies 5s 1";
        addPopup.onanimationend = function stopAnimation(){
            addPopup.style.animation = "noAddedCookies 1s infinite";
        }
        }
    }

    killUnit(amountKilled) {
        this.amount -= amountKilled;
    }
}