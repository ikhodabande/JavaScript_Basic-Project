const apiKey = "638d3770f32a1289f8c41b834ea30bf9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcone = document.querySelector(".weather-icone");
const error = document.querySelector(".error");
const weather =  document.querySelector(".weather");


async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
 
  if(response.status === 404 || 400 ){
    error.style.display = "block";
    weather.style.display = "none";
    
  }

 
  var data = await(response).json();
 

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";



  if(data.weather[0].main == "Clouds"){
    weatherIcone.src = "./weather-app-img/images/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcone.src = "./weather-app-img/images/Clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcone.src = "./weather-app-img/images/Rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcone.src = "./weather-app-img/images/Drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcone.src = "./weather-app-img\images/Mist.png";
  }


  weather.style.display = "block";
  error.style.display = "none";



}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})


searchBox.addEventListener("keypress", (e)=>{
  if(e.key === "Enter"){
    e.preventDefault();
    searchBtn.click();
  }

} )

