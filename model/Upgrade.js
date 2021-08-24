class Upgrade {

    //Variables
    static nextID = 0;

    //constructor
    constructor(name, description, cost, isBought, unitNumber) {
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.isBought = isBought;
        this.unitNumber = unitNumber;
        this.upgradeID = Upgrade.nextID++;
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
    giveID() {
        return nextID++;
    }

    buyUpgrade() {
        units[this.unitNumber].setMultiplyer(1);
        document.getElementById(`unitCookies${this.unitNumber}`).innerHTML = units[this.unitNumber].getCookies() * units[this.unitNumber].getMultiplyer();
        let container = document.getElementById(`upgradeContainer${this.upgradeID}`);
        container.parentNode.removeChild(container);
    }
}