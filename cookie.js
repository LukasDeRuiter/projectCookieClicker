let counter = new Counter(0);
let units = [];
let number = 2;

document.getElementById("clickableCookie").addEventListener('click', function() {
    counter.addAmount(1);
    
    counter.updateCounter();
})

let raccoon = new Unit("Raccoon", 10, 50, 0);
let groundHog = new Unit("Groundhog", 16, 100, 0);

units[0] = raccoon;
units[1] = groundHog;


for(let i = 0; i < units.length; i++) {
    sethtmlElementsAtStart(i);
}

function addUnitCookiesRaccoon (){
            counter.addAmount(raccoon.createCookies());
            counter.updateCounter();
        };
setInterval(addUnitCookiesRaccoon, 9000);

function addUnitCookiesGroundhog (){
    counter.addAmount(raccoon.createCookies());
    counter.updateCounter();
};
setInterval(addUnitCookiesGroundhog, 16000);


let buttons = document.getElementsByClassName("unitBtn");

Array.from(buttons).forEach(button => button.addEventListener('click', function() {
    units[button.id].buyUnit(parseInt(button.innerHTML));
    setHtmlelements(button.id);
}))

function sethtmlElementsAtStart(unitValue){
    document.getElementById(`unitName${unitValue}`).innerHTML = units[unitValue].getName();
    document.getElementById(`unitCost${unitValue}`).innerHTML = units[unitValue].getCost();
    setHtmlelements(unitValue);
}

function setHtmlelements(unitValue) {
    document.getElementById(`unitCookies${unitValue}`).innerHTML = units[unitValue].getCookies();
    document.getElementById(`unitAmount${unitValue}`).innerHTML = units[unitValue].getAmount();
}



function test() {
    console.log(units[0].getAmount());
}


