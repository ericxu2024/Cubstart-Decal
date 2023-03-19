// Ddoski: I lost my API key! Could I use yours? (CLUE #1: See more info in the homework spec.)
apiKey = "&appid=f9a7c9974170cfd955391620fe0cd0e7";

geocodingUrl = "http://api.openweathermap.org/geo/1.0/direct?q="; // Ddoski: This is the API we use to convert city names to coordinates!
weatherUrl = "https://api.openweathermap.org/data/2.5/weather?"; // Ddoski: This is the API we use to convert coordinates into weather data!

submitButton = document.getElementById("submit");
// Ddoski: I don't remember what I put here, but I know it selects the input element with the id cityName.
cityName = document.getElementById("cityName");
mainWeather = document.getElementById("mainWeather");
weatherDescription = document.getElementById("weatherDescription");

// Ddoski: Basically, this adds an event listener to check when the submit button is clicked,
// then if the cityName's value is not blank, we call setWeatherDescription with cityName.value as the argument.
submitButton.addEventListener("click", function () {
  if (cityName.value != "") {
    setWeatherDescription(cityName.value);
  }
});

// Ddoski: This is what a basic API call looks like! Luckily this wasn't lost. 
// Basically, it takes in a url, and sends a get request (fetch) to that url. 
// It waits for a response, then parses the JSON response so that we can use it!
// Note: You have to await the output because otherwise, the computer will try to execute all the other lines of code first.
// This is a little problematic because if the API hasn't returned a response yet,
// if we try to do response.json(), it'll be undefined!
async function apiCall(url) {
  let response = await fetch(url)
  let data = await response.json()
  return data
}

// Ddoski: This function takes in a city name (that the user inputs), and gets the latitude and longitude
// of that city. This is important because our second API call, the one that actually gets the weather,
// requires a latitude and longitude coordinate pair.
async function getLatLon(city) {

  // Ddoski: Let's create the url we call the API on here. 
  // Be sure to use a url provided above, and the city name provided by the user.
  // (CLUE #2: See more info in the homework spec.)
  let formattedUrl = geocodingUrl + cityName.value + apiKey;
  let data = await apiCall(formattedUrl);
  // Ddoski: We're returning a Javascript object here! 
  // Which part of the data variable do we extract for the lat and lon?
  return {
    "lat": data[0].lat,
    "lon": data[0].lon,
  }
}

// Ddoski: Wow, we really lost a huge chunk of this function. 
// Luckily, this look pretty similar to the previous function (getLatLon).
// (CLUE #3: See more info in the homework spec.)
async function getWeather(lat, lon) {
  /* YOUR CODE HERE */
  let formattedUrl = weatherUrl + "lat=" + lat + "&lon=" + lon + apiKey;
  let data = await apiCall(formattedUrl);
  console.log(data)
  return {
    "main": data.weather[0].main,
    "description": data.weather[0].description,
  }
}

// Ddoski: This function calls getLatLon on the city name provided to find the latitude and longitude of that city.
// It awaits the output before executing other functions. 
async function setWeatherDescription(city) {
  let coordData = await getLatLon(city)

  // Ddoski: Take a look at the format 
  // of what getLatLon returns above. How would we extract the lat and lon from this?
  // (CLUE #4: See more info in the homework spec.)
  const lat = coordData.lat;
  const lon = coordData.lon;


  let weatherData = await getWeather(lat, lon)
  
  // Ddoski: Same thing here, but we're trying to set mainWeather and weatherDescription's innerHTML 
  // to the relevant values in weatherData.
  mainWeather.innerHTML = weatherData.main;
  weatherDescription.innerHTML = weatherData.description;
}
