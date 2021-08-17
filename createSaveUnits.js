let units = [];

for(let i = 0; i < 3 ; i++) {
    let loadedName = document.getElementById(`unitProperty1${i}`).value;
    let loadedCookies = parseInt(document.getElementById(`unitProperty2${i}`).value);
    let loadedCost = parseInt(document.getElementById(`unitProperty3${i}`).value);
    let loadedAmount = parseInt(document.getElementById(`unitProperty4${i}`).value);
    let loadedIntervalTime = parseInt(document.getElementById(`unitProperty5${i}`).value);
    units[i] = new Unit(loadedName, loadedCookies, loadedCost, loadedAmount, loadedIntervalTime);
}

let counterCookies = parseInt(document.getElementById("oldCookies").value);