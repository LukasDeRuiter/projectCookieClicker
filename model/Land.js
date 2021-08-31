class Land {

    //Constructor
    constructor(name, cost, svgNumber, isBought) {
        this.name = name;
        this.cost = cost;
        this.svgNumber = svgNumber;
        this.isBought = isBought;
    }

    //Getters and Setters
   

    //Methods
    setLandElements(unitNumber) {
        console.log(unitNumber);
        document.getElementById(`landName${unitNumber}`).innerHTML = this.name;
        document.getElementById(`landBenefit${unitNumber}`).innerHTML = `unlocks ${units[unitNumber].getName()}`;
        document.getElementById(`landCost${unitNumber}`).innerHTML = `Cost: ${this.cost}`;
        document.getElementById(`landCost${unitNumber}`).value = this.cost;
    }
}