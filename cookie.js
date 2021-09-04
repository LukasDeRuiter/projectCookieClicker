// Setup of the unitcards and the cookie
let number = 2;

user = new User(userLevel, userCookiesEaten, userCookieLevelCap, userDevotion, userOfferedCookies, userOfferedUnits, userBoughtLand, userCookiesOfInsight);
counter = new Counter(counterCookies);
cookie = new Cookie(cookieCookieLevel, cookieCookieLevel);
randomCookie = new RandomCookie(500);

cookie.updateCookie();
cookie.updateUpgradeContainer();
user.updateUserUI();

counter.updateCounter();

let clickOnCookie = new Audio();
clickOnCookie.src = 'assets/sound/cookieClicked.mp3';

//functions for adding cookies
document.getElementById("clickableCookie").addEventListener('click', function() {
    counter.addAmount(cookie.getClickPower());
    counter.showAmountAdded(cookie.getClickPower());
    counter.updateCounter();
    counter.makeCurrencyAppear("cookie", counter.getCookies());
    cookie.cookieClickedAnimation();
    clickOnCookie.play();
    let randomChance = Math.floor(Math.random() * 100);
    console.log(units.length);
    if(randomCookie.getCookieActive()) {
        randomCookie.disappearOnAllElements();
    }

    if(randomChance > 70) {
        randomCookie.appearOnRandomElement();
    }
})

for(let i = 0; i < units.length; i++) {
    sethtmlElementsAtStart(i);
    setInterval(`addUnitCookies(${i})`, units[i].getIntervalTime());
}

for(let i = 0; i < (units.length * 3); i++) {
    setHtmlElementsForUpgrades(i);
}

function addUnitCookies(unitValue) {
            counter.addAmount(units[unitValue].createCookies());
            counter.updateCounter();
            if(units[unitValue].getAmount() >= 1){
                for(let i = 0; i < units[unitValue].getAmount(); i++) {
                    cookie.cookieClickedAnimation();
                }
            }
            units[unitValue].displayAddedCookies(unitValue);
        };

let buttons = document.getElementsByClassName("unitBtn");


//Buying new units
Array.from(buttons).forEach(button => button.addEventListener('click', function() {
    let costOfPurchase = button.innerHTML * units[button.id].getCost();
    let yourAmountOfCookies = counter.getCookies();
    if(yourAmountOfCookies >= costOfPurchase){
        counter.setCookies(counter.getCookies() - costOfPurchase);
        counter.updateCounter();
        units[button.id].buyUnit(parseInt(button.innerHTML));
        for(let i = 0; i < parseInt(button.innerHTML); i++) {
            units[button.id].setCost();
        } 
        setHtmlelements(parseInt(button.id));
    } else {
        giveErrorMessage("Not enough cookies!");
    }
}))

//Buying land
let landButtons = document.getElementsByClassName("purchaseLandBtn");

Array.from(landButtons).forEach(landButton => landButton.addEventListener('click', function() {
    let chosenUnit = parseInt(landButton.id.replace("landCost", ""));
    units[chosenUnit].homeland.buyLand(chosenUnit);
    counter.makeCurrencyAppear("land", user.getBoughtLand());
}))

//Buying upgrades
let upgradeButtons = document.getElementsByClassName("upgradeBtn");

const upgradeAudio = [];

upgradeAudio[0] = new Audio();
upgradeAudio[0].src = "assets/sound/upgradeSound1.mp3";
upgradeAudio[1] = new Audio();
upgradeAudio[1].src = "assets/sound/upgradeSound2.mp3";

Array.from(upgradeButtons).forEach(upgradeButton => upgradeButton.addEventListener('click', function() {
    let removeStringId = upgradeButton.id.replace("upgradeBtn", "");
    let upgradeUnit = parseInt(removeStringId);
    upgrades[upgradeUnit].buyUpgrade();

    let chosenUpgradeSound = Math.floor(Math.random() * upgradeAudio.length);
    upgradeAudio[chosenUpgradeSound].play();
}))

//Buying cookie specific upgrades
document.getElementById("cookieUpgradeBtn").addEventListener('click', function() {
    cookie.buyCookieUpgrade();
})

//User tab for eating cookies and leveling up
let eatingButtons = document.getElementsByClassName("cookieEatingBtn");

Array.from(eatingButtons).forEach(eatingButton =>eatingButton.addEventListener('click', function() {
    if(eatingButton.value == "allCookies") {
        if(user.getCookieLevelCap() >= parseInt(counter.getCookies())) {
        user.eatCookies(counter, parseInt(counter.getCookies()));
        }
    } else {
        if(user.getCookieLevelCap() >= parseInt(eatingButton.value)) {
        user.eatCookies(counter, parseInt(eatingButton.value));
        }
    }
}))


//devotion
let devotionButtons = document.getElementsByClassName("devotionBtn");

Array.from(devotionButtons).forEach(devotionButton => devotionButton.addEventListener('click', function() {
    user.pickDevotion(devotionButton.value);
}))

//Offering cookies and sacrificing units
document.getElementById("offerCookies").addEventListener('click', function() {
    offerCookies(100);
    counter.makeCurrencyAppear("offeredCookies", user.getOfferedCookies());
});

document.getElementById("sacrificeUnits").addEventListener('click', function() {
    sacrificeUnit(1);
    counter.makeCurrencyAppear("sacrifice", user.getOfferedUnits());
})

function offerCookies(amountOfCookies) {
    if(counter.getCookies() >= amountOfCookies) {
        user.setOfferedCookies(user.getOfferedCookies() + amountOfCookies);
        counter.setCookies(counter.getCookies() - amountOfCookies);
        counter.updateCounter();
    } else {
        giveErrorMessage("Not enough Cookies!");
    }
}

function sacrificeUnit(amountOfUnits) {

    let notEnoughUnits = true;
    for(let i = 0; i < units.length; i++) {
        if(units[i].getAmount() >= amountOfUnits) {
            let randomUnitChosen = Math.floor(Math.random() * units.length);

            while(units[randomUnitChosen].getAmount() < amountOfUnits) {
                randomUnitChosen = Math.floor(Math.random() * units.length);
            }

            units[randomUnitChosen].killUnit(amountOfUnits);
            setHtmlelements(randomUnitChosen);
            user.setOfferedUnits(user.getOfferedUnits() + amountOfUnits);
            giveErrorMessage(`Sacrificed a ${units[randomUnitChosen].getName()}!`);
            notEnoughUnits = false;
            break;
        } 
    }

    if(notEnoughUnits) {
        giveErrorMessage("Not enough units to sacrifice!");
    }

}
//Swapping tabs
let tabsButtons = document.getElementsByClassName("tabsBtn");

Array.from(tabsButtons).forEach(tabButton => tabButton.addEventListener('click', function() {
    for(let i = 0; i < 9; i++) {
        document.getElementById(`tab${i}`).style.display = "none";
    }

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
    units[unitValue].homeland.setLandElements(unitValue);
    units[unitValue].homeland.checkIfIsBought(unitValue);
    setHtmlelements(unitValue);
}

function setHtmlelements(unitValue) {
    document.getElementById(`unitCookies${unitValue}`).innerHTML = `Cookies: ${(units[unitValue].getCookies() * units[unitValue].getMultiplyer())}`;
    document.getElementById(`unitAmount${unitValue}`).innerHTML = `Amount: ${units[unitValue].getAmount()}`;
    document.getElementById(`unitCost${unitValue}`).innerHTML = `Cost: ${units[unitValue].getCost()}`;
}

function setHtmlElementsForUpgrades(upgradeValue) {
    document.getElementById(`upgradeName${upgradeValue}`).innerHTML = upgrades[upgradeValue].getName();
    document.getElementById(`upgradeDescription${upgradeValue}`).innerHTML = upgrades[upgradeValue].getDescription();
    document.getElementById(`upgradeBtn${upgradeValue}`).innerHTML = `Buy for ${upgrades[upgradeValue].getCost()} cookies`;
}

//error Message
const errorAudio = [];

errorAudio[0] = new Audio();
errorAudio[0].src = "assets/sound/errorSound.mp3";
errorAudio[1] = new Audio();
errorAudio[1].src = "assets/sound/secretErrorSound.mp3";

function giveErrorMessage(stringText) {

    let secretErrorSound = Math.floor(Math.random() * 20);
    if(secretErrorSound === 10) {
        errorAudio[1].play();
    } else {
        errorAudio[0].play();
    }

    document.getElementById("errorMessage").innerHTML = stringText;
    setTimeout(function() {
        document.getElementById("errorMessage").innerHTML = ""}, 3000);
}

//Random events
document.getElementById("randomCookie").addEventListener('click', function() {
    counter.addAmount(randomCookie.rewardAmountClicked(cookie.getClickPower()));
    counter.updateCounter();
    randomCookie.disappearOnAllElements();
})

// Saving statistics

document.getElementById('saveBtnID').addEventListener('click', function() {

    document.getElementById("devotionSave").value = user.getDevotion();
    document.getElementById("offeredCookiesSave").value = user.getOfferedCookies();
    document.getElementById("offeredUnitsSave").value = user.getOfferedUnits();
    document.getElementById("boughtLandSave").value = user.getBoughtLand();
    document.getElementById("cookiesOfInsightSave").value = user.getCookiesOfInsight();
    document.getElementById("cookieLevelSave").value = cookie.getLevel();

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

        document.getElementById(`unitNumber${i}7`).value = units[i].homeland.getName();
        document.getElementById(`unitNumber${i}8`).value = units[i].homeland.getCost();
        document.getElementById(`unitNumber${i}9`).value = units[i].homeland.getSvgNumber();
        document.getElementById(`unitNumber${i}10`).value = units[i].homeland.getIsBought();
    }
})

document.getElementById('exitBtn').addEventListener('click', function() {
    document.getElementById('saveContainerID').style.display = "none";
    document.getElementById("mainContainer").style.filter = "brightness(1)";
})

