// Dummy weather data (static)
const weatherData = {
  "Delhi": { temp: 32, condition: "Sunny", wind: 5, humidity: 40 },
  "Mumbai": { temp: 30, condition: "Cloudy", wind: 6, humidity: 60 },
  "Chennai": { temp: 34, condition: "Hot & Humid", wind: 8, humidity: 70 },
  "Kolkata": { temp: 29, condition: "Rainy", wind: 10, humidity: 80 },
  "Bangalore": { temp: 26, condition: "Pleasant", wind: 7, humidity: 55 },
  "Hyderabad": { temp: 31, condition: "Sunny", wind: 6, humidity: 50 },
  "Jaipur": { temp: 35, condition: "Hot", wind: 4, humidity: 30 },
  "Ahmedabad": { temp: 33, condition: "Dry Heat", wind: 5, humidity: 25 },

  "London": { temp: 15, condition: "Foggy", wind: 12, humidity: 75 },
  "New York": { temp: 20, condition: "Clear Sky", wind: 9, humidity: 50 },
  "Tokyo": { temp: 22, condition: "Partly Cloudy", wind: 7, humidity: 55 },
  "Paris": { temp: 18, condition: "Windy", wind: 14, humidity: 65 },
  "Sydney": { temp: 25, condition: "Sunny", wind: 10, humidity: 45 },
  "Dubai": { temp: 38, condition: "Hot Desert", wind: 4, humidity: 20 },
  "Singapore": { temp: 29, condition: "Humid", wind: 5, humidity: 85 },
  "Moscow": { temp: 10, condition: "Cold", wind: 15, humidity: 70 },
  "Berlin": { temp: 16, condition: "Cloudy", wind: 11, humidity: 68 },
  "Toronto": { temp: 14, condition: "Chilly", wind: 13, humidity: 60 },
  "Los Angeles": { temp: 27, condition: "Sunny", wind: 6, humidity: 35 },
  "Cape Town": { temp: 19, condition: "Breezy", wind: 12, humidity: 55 },
  "Beijing": { temp: 21, condition: "Smoggy", wind: 8, humidity: 65 },
  "Hong Kong": { temp: 28, condition: "Humid", wind: 9, humidity: 75 },
  "Rio de Janeiro": { temp: 26, condition: "Sunny", wind: 10, humidity: 70 },
  "Cairo": { temp: 36, condition: "Dry Heat", wind: 7, humidity: 25 }
};

// Default cities
const defaultCities = Object.keys(weatherData);

// Render weather card
function renderWeatherCard(city, data) {
  return `
    <div class="weather-card">
      <h3>📍 ${city}</h3>
      <p class="temp">🌡 ${data.temp} °C</p>
      <p>☁ ${data.condition}</p>
      <p>💨 Wind: ${data.wind} m/s</p>
      <p>💧 Humidity: ${data.humidity}%</p>
    </div>
  `;
}

// Load default cities
function loadDefaultCities() {
  const container = document.getElementById("defaultCities");
  container.innerHTML = "";
  for (const city of defaultCities) {
    const data = weatherData[city];
    container.innerHTML += renderWeatherCard(city, data);
  }
}

// Search city weather
function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (city === "") {
    resultDiv.innerHTML = "⚠ Please enter a city name!";
    return;
  }

  const data = weatherData[city];
  if (!data) {
    resultDiv.innerHTML = "❌ City not found in offline data!";
  } else {
    resultDiv.innerHTML = renderWeatherCard(city, data);
  }
}

// Load default cities on page load
window.onload = loadDefaultCities;
