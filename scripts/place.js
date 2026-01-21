const temp = document.getElementById("temp").textContent;
const wind = document.getElementById("wind").textContent;
const result = document.getElementById("windchill");

function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

if (parseInt(temp) <= 10 && parseInt(wind) > 4.8) {
    result.textContent = `${calculateWindChill(parseInt(temp), parseInt(wind)).toFixed(1)} °C`;

} else {
    result.textContent = "N/A";
}


const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastmodified");
lastModified.innerHTML = `Last Modification <span class="highlight">${document.lastModified}</span>`;