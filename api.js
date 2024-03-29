const API_KEY = "88a86eb5374dfd5eeb6df1a4fbacfa85"
const API_URL = "https://api.openweathermap.org/data/2.5/weather?lang=ru&units=metric&q="

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    try {
        const response = await fetch(API_URL + city + `&appid=${API_KEY}`)


        if (response.status === 404) {
            document.querySelector('.error').style.display = 'block'
            document.querySelector('.weather').style.display = 'none'
        } else {
            const data = await response.json()

            document.querySelector('.city').innerHTML = data.name
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
            document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
            document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' км/ч'

            if (data.weather[0].main === 'Clouds') {
                weatherIcon.src = 'images/clouds.png'
            } else if (data.weather[0].main === 'Clear') {
                weatherIcon.src = 'images/clear.png'
            } else if (data.weather[0].main == 'Rain') {
                weatherIcon.src = 'images/rain.png'
            } else if (data.weather[0].main === 'Drizzle') {
                weatherIcon.src = 'images/drizzle.png'
            } else if (data.weather[0].main === 'Mist') {
                weatherIcon.src = 'images/mist.png'
            }

            document.querySelector('.weather').style.display = 'block'
            document.querySelector('.error').style.display = 'none'
        }



    } catch (error) {
        console.log(error)
    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)

})



