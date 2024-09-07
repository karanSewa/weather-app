const apiKey = "a322efbb6ce68350ae7c84246ad57c20";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const resposnse = await fetch(apiUrl + city + `appid=${apiKey}`);
    const data = await resposnse.json();
    if(Response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidty + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed;
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/cloud.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
 }

 
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});
