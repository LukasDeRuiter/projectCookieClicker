class RandomCookie {

    //Constructor
    constructor(cookieReward) {
        this.cookieReward = cookieReward;
        this.cookieActive = false;
    }

    //Getters and setters
    getCookieReward() {
        return this.cookieReward
    }

    setCookieReward(cookieReward) {
        this.cookieReward = cookieReward;
    }

    getCookieActive() {
        return this.cookieActive;
    }


    //Methods
    appearOnRandomElement() {
            let chosenElement = Math.floor(Math.random() * 3);
            let ChosenElementID = `randomCookie${chosenElement}`;
            document.getElementById(`${ChosenElementID}`).style.display = "flex";
            this.cookieActive = true;
    }

    disappearOnAllElements() {
        for(let i = 0; i < 3; i++) {
            document.getElementById(`randomCookie${i}`).style.display = "none";
            this.cookieActive = false;
        }
    }



}