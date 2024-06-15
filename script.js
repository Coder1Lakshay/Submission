const weatherData = {
    "Banglore": {
        temperature: "15°C",
        description: "Cloudy",
        icon: "cloudy.jpeg"
    },
    "Hyderabad": {
        temperature: "25°C",
        description: "Sunny",
        icon: "sunny.jpeg"
    },
    "Goa": {
        temperature: "10°C",
        description: "Rainy",
        icon: "rainy.jpeg"
    },
    "Rajasthan": {
        temperature: "30°C",
        description: "Clear",
        icon: "clear.jpeg"
    },
    "Delhi": {
        temperature: "35°C",
        description: "Hot",
        icon: "hot.jpeg"
    }
};

function getWeather() {
    const city = document.getElementById("city").value;
    const weatherResult = document.getElementById("weather-result");

    if (weatherData[city]) {
        document.getElementById("city-name").innerText = city;
        document.getElementById("temperature").innerText = weatherData[city].temperature;
        document.getElementById("description").innerText = weatherData[city].description;
        document.getElementById("weather-icon").src = weatherData[city].icon;
        weatherResult.style.display = "block";
    } else {
        document.getElementById("city-name").innerText = "City not found";
        document.getElementById("temperature").innerText = "";
        document.getElementById("description").innerText = "";
        document.getElementById("weather-icon").src = "";
        weatherResult.style.display = "block";
    }
}
