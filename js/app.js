const API_KEY = 'fdf62694303394f1b51128737553e329';

document.addEventListener('DOMContentLoaded',()=>{
    navigator.geolocation.getCurrentPosition(fetchData);
})

const fetchData = position => {
    const {latitude,longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => setWeatherData(data))

}

const setWeatherData = data => {
    const weatherData={
        location: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].main,  
        date:'data' 
    }

    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key]
    })
    
    
    
}

