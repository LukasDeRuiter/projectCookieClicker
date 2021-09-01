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
        this.cookies = parseInt(this.cookies + addWith);
    }

    updateCounter() {
        document.getElementById("counter").innerHTML = counter.getCookies();
        document.getElementById("cookiesSave").value = counter.getCookies();
    }

    makeCurrencyAppear(elementName, currency) {
        if(currency >= 1) {
            document.getElementById(`${elementName}CurrencyContainer`).style.display = "flex";
            document.getElementById(`${elementName}CurrencyContainer`).style.animation = "elementAppearing 1s 1";
        }
    }

}