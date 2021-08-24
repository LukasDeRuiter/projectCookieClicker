class Upgrade {

    //Variables
    nextID = 0;

    //constructor
    constructor(name, description, cost, isBought, unitNumber) {
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.unitNumber = unitNumber;
        this.isBought = isBought;
        this.upgradeID = nextID++;
    }

    //Getters and setters

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getCost() {
        return this.cost;
    }

    setCost(cost) {
        this.cost = cost;
    }

    getUnitNumber() {
        return this.unitNumber;
    }

    setUnitNumber(unitNumber) {
        this.unitNumber = unitNumber;
    }

    getIsBought() {
        return this.isBought;
    }

    setIsBought(isBought) {
        this.isBought = isBought;
    }

    getUpgradeID() {
        return this.upgradeID;
    }

    setUpgradeID(upgradeID) {
        this.upgradeID = upgradeID;
    }

    //Methods
}