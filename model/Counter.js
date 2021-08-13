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

    //Methods
    addAmount(addWith) {
        this.cookies = this.cookies + addWith;
    }

    updateCounter() {
        document.getElementById("counter").innerHTML = counter.getCookies();
        document.getElementById("cookiesSave").value = counter.getCookies();
    }

}