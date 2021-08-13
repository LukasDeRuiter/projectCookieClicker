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

    setCookies(cookies) {
        this.cookies = cookies * multiplyer;
    }

    setCost() {
        this.cost *= this.costMultiplyer;
    }

    //Methods
    createCookies() {
        return this.cookies * this.amount;
    }

    buyUnit(amountBought){
        this.amount += amountBought;
    }

}