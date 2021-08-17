let units = [];

for(let i = 0; i < 3 ; i++) {
    let loadedName = document.getElementById(`unitProperty1${i}`).value;
    let loadedCookies = document.getElementById(`unitProperty2${i}`).value;
    let loadedCost = document.getElementById(`unitProperty3${i}`).value;
    let loadedAmount = document.getElementById(`unitProperty4${i}`).value;
    let loadedIntervalTime = document.getElementById(`unitProperty5${i}`).value;
    units[i] = new Unit(loadedName, loadedCookies, loadedCost, loadedAmount, loadedIntervalTime);
}

let counterCookies = parseInt(document.getElementById("oldCookies").value);