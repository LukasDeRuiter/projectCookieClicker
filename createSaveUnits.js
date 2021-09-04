let units = [];

let amountOfUnits = parseInt(document.getElementById("amountOfUnits").value);

for(let i = 0; i < amountOfUnits ; i++) {
    let loadedName = document.getElementById(`unitProperty1${i}`).value;
    let loadedCookies = parseInt(document.getElementById(`unitProperty2${i}`).value);
    let loadedCost = parseInt(document.getElementById(`unitProperty3${i}`).value);
    let loadedAmount = parseInt(document.getElementById(`unitProperty4${i}`).value);
    let loadedIntervalTime = parseInt(document.getElementById(`unitProperty5${i}`).value);
    let loadedMultiplyer = parseInt(document.getElementById(`unitProperty6${i}`).value);
    let loadedCostMultiplyer = parseInt(document.getElementById(`unitProperty7${i}`).value);
    let loadedHomelandName = document.getElementById(`unitProperty8${i}`).value;
    let loadedHomelandCost = parseInt(document.getElementById(`unitProperty9${i}`).value);
    let loadedHomelandSvgNumber = parseInt(document.getElementById(`unitProperty10${i}`).value);
    let loadedHomelandIsBought = parseInt(document.getElementById(`unitProperty11${i}`).value);

    console.log(loadedHomelandName);



    units[i] = new Unit(loadedName, loadedCookies, loadedCost, loadedAmount, loadedIntervalTime, loadedMultiplyer, loadedCostMultiplyer, 
        loadedHomelandName, loadedHomelandCost, loadedHomelandSvgNumber, loadedHomelandIsBought);
}

let counterCookies = parseInt(document.getElementById("oldCookies").value);

let userLevel = parseInt(document.getElementById("oldLevel").value);
let userCookiesEaten = parseInt(document.getElementById("oldCookiesEaten").value);
let userCookieLevelCap = parseInt(document.getElementById("oldCookieLevelCap").value);
let userDevotion = document.getElementById("oldDevotion").value;
let userOfferedCookies = parseInt(document.getElementById("oldOfferedCookies").value);
let userOfferedUnits = parseInt(document.getElementById("oldOfferedUnits").value);
let userBoughtLand = parseInt(document.getElementById("oldBoughtLand").value);
let userCookiesOfInsight = parseInt(document.getElementById("oldCookiesOfInsight").value);

let cookieCookieLevel = parseInt(document.getElementById("oldCookieLevel").value);

console.log(units[0].homeland);