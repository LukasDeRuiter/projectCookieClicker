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
            let ChosenElementID = `randomCookie`;

            let chosenElementLeft = Math.floor(Math.random() * 100);
            let chosenElementTop = Math.floor(Math.random() * 100);

            if(chosenElementLeft < 15) {
                chosenElementLeft = 15;
            } else if(chosenElementLeft > 85) {
                chosenElementLeft = 85;
            }

            if(chosenElementTop < 15) {
                chosenElementTop = 15;
            } else if(chosenElementTop > 85) {
                chosenElementTop = 85;
            }

            document.getElementById(`${ChosenElementID}`).style.left = `${chosenElementLeft}%`;
            document.getElementById(`${ChosenElementID}`).style.top = `${chosenElementTop}%`;
            document.getElementById(`${ChosenElementID}`).style.display = "flex";


            this.cookieActive = true;

    }

    disappearOnAllElements() {

            document.getElementById(`randomCookie`).style.display = "none";
            this.cookieActive = false;
    }



}