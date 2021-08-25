// Setup of the unitcards and the cookie
let number = 2;

counter = new Counter(counterCookies);
cookie = new Cookie(1, 1);

cookie.updateCookie();
counter.updateCounter();

document.getElementById(`unitCard0`).style.display = "grid";

let clickOnCookie = new Audio();
clickOnCookie.src = 'assets/sound/cookieClicked.mp3';

//functions for adding cookies
document.getElementById("clickableCookie").addEventListener('click', function() {
    counter.addAmount(1);
    counter.updateCounter();
    clickOnCookie.play();
})

for(let i = 0; i < units.length; i++) {
    sethtmlElementsAtStart(i);
    setInterval(`addUnitCookies(${i})`, units[i].getIntervalTime());
    checkIfNextUnitAvailable(i);
}

for(let i = 0; i < 9; i++) {
    setHtmlElementsForUpgrades(i);
}

function addUnitCookies(unitValue) {
            counter.addAmount(units[unitValue].createCookies());
            counter.updateCounter();
            units[unitValue].displayAddedCookies(unitValue);
        };

let buttons = document.getElementsByClassName("unitBtn");

Array.from(buttons).forEach(button => button.addEventListener('click', function() {
    let costOfPurchase = button.innerHTML * units[button.id].getCost();
    let yourAmountOfCookies = counter.getCookies();
    if(yourAmountOfCookies >= costOfPurchase){
        counter.setCookies(counter.getCookies() - costOfPurchase);
        counter.updateCounter();
        units[button.id].buyUnit(parseInt(button.innerHTML));
        checkIfNextUnitAvailable(parseInt(button.id));
        for(let i = 0; i < parseInt(button.innerHTML); i++) {
            units[button.id].setCost();
        } 
        setHtmlelements(parseInt(button.id));
    } else {
        console.log("Not enough cookies!");
    }
}))

let upgradeButtons = document.getElementsByClassName("upgradeBtn");

Array.from(upgradeButtons).forEach(upgradeButton => upgradeButton.addEventListener('click', function() {
    let removeStringId = upgradeButton.id.replace("upgradeBtn", "");
    let upgradeUnit = parseInt(removeStringId);
    upgrades[upgradeUnit].buyUpgrade();
}))

let tabsButtons = document.getElementsByClassName("tabsBtn");

Array.from(tabsButtons).forEach(tabButton => tabButton.addEventListener('click', function() {
    let yourTab = tabButton.id.replace("tabsBtn", "");
    let displayedTab = document.getElementById(`tab${yourTab}`);
    if(displayedTab.style.display == "none") {
        displayedTab.style.display = "flex";
        } else {
            displayedTab.style.display = "none";
        }
}))


function sethtmlElementsAtStart(unitValue){
    document.getElementById(`unitName${unitValue}`).innerHTML = units[unitValue].getName();
    setHtmlelements(unitValue);
}

function setHtmlelements(unitValue) {
    document.getElementById(`unitCookies${unitValue}`).innerHTML = units[unitValue].getCookies();
    document.getElementById(`unitAmount${unitValue}`).innerHTML = units[unitValue].getAmount();
    document.getElementById(`unitCost${unitValue}`).innerHTML = units[unitValue].getCost();
}

function setHtmlElementsForUpgrades(upgradeValue) {
    document.getElementById(`upgradeName${upgradeValue}`).innerHTML = upgrades[upgradeValue].getName();
    document.getElementById(`upgradeDescription${upgradeValue}`).innerHTML = upgrades[upgradeValue].getDescription();
    document.getElementById(`upgradeBtn${upgradeValue}`).innerHTML = `Buy for ${upgrades[upgradeValue].getCost()} cookies`;
}

function checkIfNextUnitAvailable(unitValue) {
    if(units[unitValue].getAmount() >= 5) {
        let nextUnit = unitValue + 1;
        document.getElementById(`unitCard${nextUnit}`).style.display = "grid";
    }
}


// Saving statistics

document.getElementById('saveBtnID').addEventListener('click', function() {
    document.getElementById('saveContainerID').style.display = "flex";
    document.getElementById("mainContainer").style.filter = "brightness(0.5)";
    for(let i = 0; i < units.length; i++) {
        document.getElementById(`unitNumber${i}0`).value = units[i].getName();
        document.getElementById(`unitNumber${i}1`).value = units[i].getCookies();
        document.getElementById(`unitNumber${i}2`).value = units[i].getCost();
        document.getElementById(`unitNumber${i}3`).value = units[i].getAmount();
        document.getElementById(`unitNumber${i}4`).value = units[i].getIntervalTime();
        document.getElementById(`unitNumber${i}5`).value = units[i].getMultiplyer();
        document.getElementById(`unitNumber${i}6`).value = units[i].getCostMultiplyer();
    }
})

document.getElementById('exitBtn').addEventListener('click', function() {
    document.getElementById('saveContainerID').style.display = "none";
    document.getElementById("mainContainer").style.filter = "brightness(1)";
})

