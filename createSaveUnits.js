let units = [];

for(let i = 0; i < 3 ; i++) {
    let loadedName = document.getElementById(`unitPropterty1${i}`).value;
    let loadedCookies = document.getElementById(`unitPropterty2${i}`).value;
    let loadedCost = document.getElementById(`unitPropterty3${i}`).value;
    let loadedAmount = document.getElementById(`unitPropterty4${i}`).value;
    let loadedIntervalTime = document.getElementById(`unitPropterty5${i}`).value;
    units[i] = new Unit(loadedName, loadedCookies, loadedCost, loadedAmount, loadedIntervalTime);
}