function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}
function searchCity(city) {
  let apiKey = "e95d2dbcb61d3a71412ef6bae16796e5";
  let units = "metric";
  let aUrl = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${aUrl}?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "e95d2dbcb61d3a71412ef6bae16796e5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let dateElement = document.querySelector("#current-date-time");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-city");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Empuriabrava");

/*function searchYourCity(event) {
  event.preventDefault();

  let textInput = document.querySelector("#text-input");

  let h1 = document.querySelector("h1");
  if (textInput.value) {
    h1.innerHTML = textInput.value;
  } else {
    h1.innerHTML = "Empuriabrava";
  }
  let cityWeather = `${apiURL}?q=~${h1.innerHTML}&appid=${apiKey}&units=${units}}`;
  axios.get(cityWeather).then(searchYourCity);
}

function showCurrentWeather(response) {
  let currentWeather = document.querySelector("#temperature");
  let h1 = document.querySelector("h1");
  currentWeather.innerHTML = Math.round(response.data.main.temp);
  h1.innerHTML = response.data.name;
}

function currentPosition(event) {
  function currentLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let cityApiUrl = `${apiURL}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(cityApiUrl).then(showCurrentWeather);
  }
  navigator.geolocation.getCurrentPosition(findCurrentLocation);
}

let now = new Date();
let todayDayTime = document.querySelector("#currentDayTime");
todayDayTime.innerHTML = getDayTime(now);

let cityInputForm = document.querySelector("#text-form");
cityInputForm.addEventListener("submit", currentPosition);
let h1 = document.querySelector("h1");
let cityWeather = `${apiURL}?q=${h1.innerHTML}&appid=${apiKey}&units=${units}`;

axios.get(cityWeather).then(currentPosition);

let currentCityButton = document.querySelector("#current-city");
currentCityButton.addEventListener("click", currentLocation);*/

/*let textForm = document.querySelector("#text-form");
textForm.addEventListener("submit", searchYourCity);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = 55;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = 13;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);*/
