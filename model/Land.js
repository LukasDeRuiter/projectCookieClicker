class Land {

    //Constructor
    constructor(name, cost, svgNumber, isBought) {
        this.name = name;
        this.cost = cost;
        this.svgNumber = svgNumber;
        this.isBought = isBought;
    }

    //Getters and Setters
    getName() {
        return this.name;
    }

    getCost() {
        return this.cost;
    }

    getSvgNumber() {
        return this.svgNumber;
    }

    getIsBought() {
        if(this.isBought) {
            return 1;
        } else {
            return 0;
        }
    }
   

    //Methods
    setLandElements(unitNumber) {
        console.log(unitNumber);
        document.getElementById(`landName${unitNumber}`).innerHTML = this.name;
        document.getElementById(`landBenefit${unitNumber}`).innerHTML = `unlocks ${units[unitNumber].getName()}`;
        document.getElementById(`landCost${unitNumber}`).innerHTML = `Cost: ${this.cost}`;
        document.getElementById(`landCost${unitNumber}`).value = this.cost;
        document.getElementById(`landsvg${unitNumber}`).src = `assets/landAssets/landtile${this.svgNumber}.svg`;
    }

    buyLand(unitNumber) {
        if(counter.getCookies() >= this.cost) {
            this.isBought = true;
            document.getElementById(`unitCard${unitNumber}`).style.display = "grid";
            document.getElementById(`unitCard${unitNumber}`).style.animation = "elementAppearing 1s 1";
            document.getElementById(`landForUnit${unitNumber}`).style.animation = "elementAppearing 1s 1 reverse";
            document.getElementById(`landForUnit${unitNumber}`).addEventListener("animationend", function() {
                document.getElementById(`landForUnit${unitNumber}`).style.display = "none";
            })
            document.getElementById('unitContainer').scrollTo(0, 1000);
            user.setBoughtLand(user.getBoughtLand() + 1);
        } else {
            giveErrorMessage("Not enough Cookies!");
        }
    }

    checkIfIsBought(unitNumber) {
        if(this.isBought == 1) {
            this.buyLand(unitNumber);
        }
    }
}