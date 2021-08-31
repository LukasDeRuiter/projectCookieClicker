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
        document.getElementById("landName").innerHTML = this.name;
        document.getElementById("landBenefit").innerHTML = `unlocks ${units[unitNumber].getName()}`;
        document.getElementById("landCost").innerHTML = `Cost: ${this.cost}`;
        document.getElementById("landCost").value = this.cost;
    }
}