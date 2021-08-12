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

    setCookies(cookies) {
        this.cookies = cookies * multiplyer;
    }

    //Methods
    createCookies() {
        return this.getCookies() * this.amount;
    }

    buyUnit(){
        this.amount += 1;
    }

}