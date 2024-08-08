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

  //Async programming and data fetch
  const Fivedays = [];
  main();
  const weatherConverter = (weathercode) => {
    const weatherSymbol = weathercode.map((value) => {
      //      console.log("weather", value)
      switch (value) {
        case 0:
          //clear sky - sunny
          return "resources/sun.png";
        case 1: //mainly clear
        case 2: //partly cloudy
        case 3: //Overcast
          return "resources/cloudy-day.png";
        case 45: //fog
        case 48: //fog
          return "resources/fog.png";
        case 51: //light drizzle
        case 53: //moderate drizzle
        case 55: //dense drizzle
          return "resources/drizzle.png";
        case 56: //light freezing drizzle
        case 57: //dense freezing drizzle
          return "resources/drizzle.png";
        case 61: //slight rain
        case 63: //moderate rain
        case 65: //heavy rain
          return "resources/rain.png";
        case 66: //light freezing rain
        case 67: //heavy freezing rain
          return "resources/rain.png";
        case 71: //slight snow fall
        case 73: //moderate snow fall
        case 75: //heavy snow fall
          return "resources/snowy.png";
        case 77: //snow grains
          return "resources/snowy.png";
        case 80: //slight rain showers
        case 81: //moderate rain showers
        case 82: //violent rain showers
          return "resources/rain.png";
        case 85: //slight snow showers
        case 86: //heavy snow showers
          return "resources/snowy.png";
        case 95: //slight or moderate thunderstorm
          return "resources/thunderstorm.png";
        case 96: //thunderstorm with slight hail
        case 99: //thunderstorm with heavy hail
          return "resources/thunderstorm.png";

        default:
          break;
      }
    });
    //    console.log("weather", weatherSymbol)
    return weatherSymbol;
  };
  const fivedaysInfo = (info) => {
    console.log("5daysweatherData: ", info);
    let weather = info.daily.weather_code;
    weather = weatherConverter(weather);
    //    console.log("weather", weather)

    const fivedaysHTML = `
    <div class="day" id="day1">
    <p class="dayTime">${info.daily.time[0]}</p>
      <img src="${weather[0]}" alt="weather symbol">
      <p id="MinMax1">${info.daily.temperature_2m_min[0]}° - ${info.daily.temperature_2m_max[0]}°</p>
    </div>
    <div class="day" id="day2">
    <p class="dayTime">${info.daily.time[1]}</p>
      <img src="${weather[1]}" alt="weather symbol">
      <p id="MinMax2">${info.daily.temperature_2m_min[1]}° - ${info.daily.temperature_2m_max[1]}°</p>
    </div>
    <div class="day" id="day3">
    <p class="dayTime">${info.daily.time[2]}</p>
      <img src="${weather[2]}" alt="weather symbol">
      <p id="MinMax3">${info.daily.temperature_2m_min[2]}° - ${info.daily.temperature_2m_max[2]}°</p>
    </div>
    <div class="day" id="day4">
    <p class="dayTime">${info.daily.time[3]}</p>
      <img src="${weather[3]}" alt="weather symbol">
      <p id="MinMax4">${info.daily.temperature_2m_min[3]}° - ${info.daily.temperature_2m_max[3]}°</p>
    </div>
    <div class="day" id="day5">
    <p class="dayTime">${info.daily.time[4]}</p>
      <img src="${weather[4]}" alt="weather symbol">
      <p id="MinMax5">${info.daily.temperature_2m_min[4]}° - ${info.daily.temperature_2m_max[4]}°</p>
    </div>
  `;
    document.getElementById("daysContainer").innerHTML = fivedaysHTML;
  };
  const fetch5daysWeather = async () => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&start_date=2024-08-07&end_date=2024-08-11"
      );
      if (!response.ok) {
        throw new Error(`responseStatus: ${response.status}`);
      }
      const data = await response.json();
      fivedaysInfo(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetch3hoursWeather = async () => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,weather_code&start_date=2024-08-08&end_date=2024-08-08&models=icon_seamless"
      );
      if (!response.ok) {
        throw new Error(`responseStatus: ${response.status}`);
      }
      const data = await response.json();
      threehoursInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetch5daysWeather();
  fetch3hoursWeather();
});
async function main() {
  console.log("main thread running");
  //organize your js file(s)
}

//webpage functionalities
favIcon.addEventListener("click", () => {
  favIcon.classList.remove("fa-regular");
  favIcon.classList.add("fa-solid");
  favIcon.style.color = "yellow";
});
