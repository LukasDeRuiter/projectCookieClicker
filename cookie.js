let counter = new Counter(0);

document.getElementById("clickableCookie").addEventListener('click', function() {
    counter.addAmount(1);
    document.getElementById("counter").innerHTML = counter.getCookies();
})

