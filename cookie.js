let number = 2;

document.getElementById("clickableCookie").addEventListener('click', function() {
    counter.addAmount(1);
    
    counter.updateCounter();
})

for(let i = 0; i < units.length; i++) {
    sethtmlElementsAtStart(i);
}

function addUnitCookiesRaccoon (){
            counter.addAmount(units[0].createCookies());
            counter.updateCounter();
        };
setInterval(addUnitCookiesRaccoon, units[0].getIntervalTime());

function addUnitCookiesGroundhog (){
    counter.addAmount(units[1].createCookies());
    counter.updateCounter();
};
setInterval(addUnitCookiesGroundhog, units[1].getIntervalTime());


let buttons = document.getElementsByClassName("unitBtn");

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
        setHtmlelements(button.id);
    } else {
        console.log("Not enough cookies!");
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

// Saving statistics

document.getElementById('saveBtnID').addEventListener('click', function() {
    console.log(units.length);
    //document.getElementById('saveContainerID').setAttribute("display", "flex");
    for(let i = 0; i < units.length; i++) {
        document.getElementById(`unitNumber${i}0`).value = units[i].getName();
        console.log(document.getElementById(`unitNumber${i}0`).value);
        console.log(units[i].getName());
        document.getElementById(`unitNumber${i}1`).value = units[i].getCookies();
        document.getElementById(`unitNumber${i}2`).value = units[i].getCost();
        document.getElementById(`unitNumber${i}3`).value = units[i].getAmount();
        document.getElementById(`unitNumber${i}4`).value = units[i].getIntervalTime();
        document.getElementById(`unitNumber${i}5`).value = units[i].getMultiplyer();
        document.getElementById(`unitNumber${i}6`).value = units[i].getCostMultiplyer();
    }
})



function test() {
    console.log(test2);
}

test();


