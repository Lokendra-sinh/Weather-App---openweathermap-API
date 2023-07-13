const apiKey = "254320375e625c6c048a4541a32d2401";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");

searchButton.addEventListener("click", () => {
    getWeatherData(searchInput.value);
})

async function getWeatherData(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".visibility").innerHTML = data.visibility / 1000 + "km";

    searchInput.value = "";
}

// getWeatherData();