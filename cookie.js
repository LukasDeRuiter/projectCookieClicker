let counter = new Counter(0);
let units = {};
let number = 2;

document.getElementById("clickableCookie").addEventListener('click', function() {
    counter.addAmount(1);
    
    counter.updateCounter();
})

let raccoon = new Unit("Raccoon", 10, 50, 1);

units[0] = raccoon;


function addUnitCookies (){
            counter.addAmount(raccoon.createCookies());
            counter.updateCounter();
        };
setInterval(addUnitCookies, 9000);


let buttons = document.getElementsByClassName("unitBtn");

Array.from(buttons).forEach(button => button.addEventListener('click', function() {
    units[button.id].buyUnit(button.innerHTML);
}))

function test() {
    console.log(units[0].getAmount());
}


