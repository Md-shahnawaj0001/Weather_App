const api = "82ce42af7b7da96efb37380eca3da388";
const input = document.querySelector(".box"); // This should match your input's class
const searchBox = document.querySelector(".button")
const photo = document.querySelector(".photo");

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(`${url}${city}&appid=${api}`);

    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".h").innerHTML = `Humidity:- ${data.main.humidity +"%"}`
    document.querySelector(".w").innerHTML = `wind:- ${data.wind.speed + "km/h"}`
   const type= document.querySelector(".weathertype").innerHTML = `Weather type: ${data.weather[0].main}`;

   const weatherType = data.weather[0].main.toLowerCase();


   if (weatherType == "mist") {
    photo.innerHTML = `<img src="mist.png" alt="Mist">`;
} else if (weatherType == "clear") {
    photo.innerHTML = `<img src="clear.png" alt="Clear">`;
} else if (weatherType == "clouds") {
    photo.innerHTML = `<img src="cloudy.png" alt="Clouds">`;
} else if (weatherType == "rain") {
    photo.innerHTML = `<img src="rainy.png" alt="Rain">`;
} else {
    photo.innerHTML = `<img src="default.png" alt="Default">`;
}


}

searchBox.addEventListener("click",function(){
    checkWeather(input.value);
})