const yearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

var temp = 59;
var wind = 13;
let noWind = "N/A";

function calculateWindChill(temp, wind) {
    if (temp <= 50) {
        return (Math.round((35.74 + 0.6215 * temp - 35.75 * (wind ** 0.16) + 0.4275 * temp * (wind ** 0.16)) * 100) / 100) + "°F";
    }
    else
        return noWind;      
}

document.getElementById("windChill").innerHTML = `<span class="windChill">${calculateWindChill(temp, wind)}</span>`;