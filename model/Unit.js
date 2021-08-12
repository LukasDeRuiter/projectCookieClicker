class Unit {

    //Constructor
    constructor(name, cookies, cost, amount) {
        this.name = name;
        this.cookies = cookies;
        this.cost = cost;
        this.amount = amount;
        this.multiplyer = 1;
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

    setCookies(cookies) {
        this.cookies = cookies * multiplyer;
    }

    //Methods
    createCookies() {
        return this.cookies * this.amount;
    }

    buyUnit(amountBought){
        this.amount += amountBought;
    }

}