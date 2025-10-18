const weatherForm = document.querySelector(".weather_form");
const cityInput = document.querySelector(".city_input");
const card = document.querySelector(".card");
const apiKey = "25f763298a479be248db0176a669f5b4";

weatherForm.addEventListener("submit", async e => {

    e.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (e) {
            console.error(e);
            displayError(e)
        }
    }
    else{
        displayError(`Please enter the city`);
    }

});

async function getWeatherData(city) {
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    
    return await response.json();
}

function displayWeatherInfo(data){

    console.log(data);
    
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;
    
    card.textContent = "";
    card.style.display = "block";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    cityDisplay.classList.add("city_display");
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°c`;
    tempDisplay.classList.add("temp_display");
    humidityDisplay.textContent = `Humidity : ${humidity}%`;
    humidityDisplay.classList.add("humidity_display");
    descDisplay.textContent = description;
    descDisplay.classList.add("desc_display");
    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add("weather_emoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){
    
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "🌨️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "🌞";
        case (weatherId >= 801 && weatherId < 809):
            return "☁️";
        default:
            return "🤨🤔🌪️☄️";
    }
}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("error_display");

    card.textContent = "";
    card.style.display = "block";
    card.appendChild(errorDisplay);
}

