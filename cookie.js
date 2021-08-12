let counter = new Counter(0);
let units = [];
let number = 2;

document.getElementById("clickableCookie").addEventListener('click', function() {
    counter.addAmount(1);
    
    counter.updateCounter();
})

units[0] = new Unit("Raccoon", 10, 50, 0, 9000);
units[1] = new Unit("Groundhog", 16, 100, 0 , 16000);


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


