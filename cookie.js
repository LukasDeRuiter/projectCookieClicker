let counter = new Counter(0);

document.getElementById("clickableCookie").addEventListener('click', function() {
    counter.addAmount(1);
    
    counter.updateCounter();
})

let raccoon = new Unit("Raccoon", 10, 50, 3);


function addUnitCookies (){
            counter.addAmount(raccoon.createCookies());
            counter.updateCounter();
        };
setInterval(addUnitCookies, 9000);

