class Counter {

    //Constructor
    constructor(cookies) {
        this.cookies = cookies;
    }

    //Getters and Setters
    getCookies() {
        return this.cookies;
    }

    setCookies(cookies) {
        this.cookies = cookies;
    }

    addAmount(addWith) {
        this.cookies = this.cookies + addWith;
    }

}