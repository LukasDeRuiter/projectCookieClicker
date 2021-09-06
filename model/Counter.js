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

    showAmountAdded(amountAdded, currencyType) {
        let div = document.createElement("div");
        div.style.position = "absolute";
        div.innerHTML = `+ ${amountAdded} ${currencyType}!`;
        div.style.zIndex = "10";
        div.style.top = `${event.clientY -30}px`;
        div.style.left = `${event.clientX - 30}px`;
        div.style.color = "green";
        div.style.animation = "clickCursorAnimation1 1s 1";
        document.getElementById("mainContainer").append(div);
        div.addEventListener("animationend", function() {
            document.getElementById("mainContainer").removeChild(div);
        })
    }

}