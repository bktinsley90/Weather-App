// API_KEY for maps api
let API_KEY = "513cfa47a574f6db0e70a94cfbc6a473";

/**
 * Retrieve weather data from openweathermap
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
const FULL_URL =`${URL}?q=${city}&appid=${API_KEY}`
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response)=>{
  return response.json()
})
}

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city).then((response)=>{
    console.log(response)
    return showWeatherData(response) 
}).catch((error)=> {
  console.log(error)
})

}

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  document.getElementById('city-name').innerText =weatherData.name;
  document.getElementById('weather-type').innerText = weatherData.weather[0].main;
  document.getElementById('temp').innerText= weatherData.main.temp;
  document.getElementById('min-temp').innerText=weatherData.main.temp_min;
  document.getElementById('max-temp').innerText=weatherData.main.temp_max;

  
}

