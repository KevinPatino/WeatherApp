document.addEventListener("DOMContentLoaded", () => {
  const citySelector = document.getElementById("favCities");
  const citySearchBar = document.getElementById("searchCity");
  const cityName = document.getElementById("cityName");
  const favIcon = document.getElementById("favIcon");
  const temperature = document.getElementById("temperature");
  const weatherInfo = document.getElementById("weatherInfo");
  const day1 = document.getElementById("day1");
  const day2 = document.getElementById("day2");
  const day3 = document.getElementById("day3");
  const day4 = document.getElementById("day4");
  const day5 = document.getElementById("day5");
  const hour1 = document.getElementById("hour1");
  const hour2 = document.getElementById("hour2");
  const hour3 = document.getElementById("hour3");
  const hour4 = document.getElementById("hour4");
  const hour5 = document.getElementById("hour5");
  const hour6 = document.getElementById("hour6");
  const hour7 = document.getElementById("hour7");
  const hour8 = document.getElementById("hour8");

  const Fivedays=[]

  main();

  const fivedaysInfo = (info)=>{
    console.log("5daysweatherData: ",info);
    const weather = info.daily.weather_code;
    console.log("weather", weather)
    weatherSymbol = weather.map((value)=>{
      console.log("weather", value)
      switch (value) {
        case 0:
          return "resources/sun.png"
        case 1:
        case 2:
        case 3:
          return "resources/cloudy-day.png"
        case 45:
        case 48:
          return "resources/fog.png"
        case 51:
        case 53:
        case 55:
          return "resources/drizzle.png"
        case 56:
        case 57:
          return "resources/freezing.png"
        case 61:
        case 63:
        case 65:
          return "resources/rain.png"
        case 66:
        case 67:
          return "resources/cloud.png"
        case 71:
        case 73:
        case 75:
          return "snow fall"
        case 77:
          return "snow grains"
        case 80:
        case 81:
        case 82:
          return "rain showers"
        case 85:
        case 86:
          return "snow showers"
        case 95:
          return "thunderstorm"
        case 96:
        case 99:
          return "thunderstorm with hail"

        default:
          break;
      }
    })
    console.log("weather", weatherSymbol)
    
    
    const fivedaysHTML = `
      <div class="day" id="day1">${info.daily.time[0]}
        <img src="${weatherSymbol[0]}" alt="weather symbol">
        <p id="MinMax1">${info.daily.temperature_2m_min[0]} / ${info.daily.temperature_2m_max[0]}</p>
      </div>
      <div class="day" id="day2">${info.daily.time[1]}
        <img src="${weatherSymbol[1]}" alt="weather symbol">
        <p id="MinMax2">${info.daily.temperature_2m_min[1]} / ${info.daily.temperature_2m_max[1]}</p>
      </div>
      <div class="day" id="day3">${info.daily.time[2]}
        <img src="${weatherSymbol[2]}" alt="weather symbol">
        <p id="MinMax3">${info.daily.temperature_2m_min[2]} / ${info.daily.temperature_2m_max[2]}</p>
      </div>
      <div class="day" id="day4">${info.daily.time[3]}
        <img src="${weatherSymbol[3]}" alt="weather symbol">
        <p id="MinMax4">${info.daily.temperature_2m_min[3]} / ${info.daily.temperature_2m_max[3]}</p>
      </div>
      <div class="day" id="day5">${info.daily.time[4]}
        <img src="${weatherSymbol[4]}" alt="weather symbol">
        <p id="MinMax5">${info.daily.temperature_2m_min[4]} / ${info.daily.temperature_2m_max[4]}</p>
      </div>
    `
    document.getElementById("daysContainer").innerHTML = fivedaysHTML
  }

  const fetch5daysWeather = async () =>{
    try{
      const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&start_date=2024-08-07&end_date=2024-08-11")
      if (!response.ok) {
        throw new Error(`responseStatus: ${response.status}`);
      }
      const data = await response.json();
      fivedaysInfo(data);


    }catch(error){
      console.error(error)
    }
  }
  fetch5daysWeather();

});

async function main() {
  console.log("main thread running");
  //organize your js file(s)
}
