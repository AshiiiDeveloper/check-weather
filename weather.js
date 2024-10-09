const apiKey = "a4e884f26c4316fa4ca2f3c509d993d4"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


async function WeatherInfo(cityName) {
    response = await fetch(apiUrl + `&q=${cityName}` + `&appid=${apiKey}`)
    data = await response.json()
    if (response.status != 200) {
        document.querySelector(".weather").style.display = "none"
        alert("Please Enter Valid City Name")
    }
    // console.log(response)
    const city = document.querySelector('.city');
    const temp = document.querySelector('.temp');
    const humadity = document.querySelector('.humadity');
    const wind = document.querySelector('.wind');
    city.innerHTML = data.name
    temp.innerHTML = Math.round(data.main.temp) + "°C"
    humadity.innerHTML = data.main.humidity + "%"
    wind.innerHTML = data.wind.speed + " km/h"
    const weatherCondition = data.weather[0].main.toLowerCase()

    imageSrc = `images/${weatherCondition}.png`
    weatherIcon.src = imageSrc
    weatherIcon.srcset = "/images/rain.png"

    document.querySelector(".weather").style.display = "block"



}

searchBtn.addEventListener("click", () => {
    WeatherInfo(searchBox.value);
})



