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

  const weatherConverter = (weathercode) =>{
    const weatherSymbol = weathercode.map((value)=>{
//      console.log("weather", value)
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
//    console.log("weather", weatherSymbol)
    return weatherSymbol
  }

  const fivedaysInfo = (info)=>{
    console.log("5daysweatherData: ",info);
    let weather = info.daily.weather_code;
    weather = weatherConverter(weather);
//    console.log("weather", weather)
    
    const fivedaysHTML = `
      <div class="day" id="day1">${info.daily.time[0]}
        <img src="${weather[0]}" alt="weather symbol">
        <p id="MinMax1">${info.daily.temperature_2m_min[0]} / ${info.daily.temperature_2m_max[0]}</p>
      </div>
      <div class="day" id="day2">${info.daily.time[1]}
        <img src="${weather[1]}" alt="weather symbol">
        <p id="MinMax2">${info.daily.temperature_2m_min[1]} / ${info.daily.temperature_2m_max[1]}</p>
      </div>
      <div class="day" id="day3">${info.daily.time[2]}
        <img src="${weather[2]}" alt="weather symbol">
        <p id="MinMax3">${info.daily.temperature_2m_min[2]} / ${info.daily.temperature_2m_max[2]}</p>
      </div>
      <div class="day" id="day4">${info.daily.time[3]}
        <img src="${weather[3]}" alt="weather symbol">
        <p id="MinMax4">${info.daily.temperature_2m_min[3]} / ${info.daily.temperature_2m_max[3]}</p>
      </div>
      <div class="day" id="day5">${info.daily.time[4]}
        <img src="${weather[4]}" alt="weather symbol">
        <p id="MinMax5">${info.daily.temperature_2m_min[4]} / ${info.daily.temperature_2m_max[4]}</p>
      </div>
    `
    document.getElementById("daysContainer").innerHTML = fivedaysHTML
  }

  const threehoursInfo = (info)=>{
    const hourly = info.hourly;
    let weather = hourly.weather_code;
    weather = weatherConverter(weather);

    console.log("threehours", weather)

    const threehoursHTML = `
      <div class="hour" id="hour1">
        <div>0am
          <img src="${weather[0]}" alt="weather symbol">
          <p>${hourly.temperature_2m[0]}℃</p>
          <p>${hourly.relative_humidity_2m[0]}%</p>
        </div>
        <div>1am
          <img src="${weather[1]}" alt="weather symbol">
          <p>${hourly.temperature_2m[1]}℃</p>
          <p>${hourly.relative_humidity_2m[1]}%</p>
        </div>
        <div>2am
          <img src="${weather[2]}" alt="weather symbol">
          <p>${hourly.temperature_2m[2]}℃</p>
          <p>${hourly.relative_humidity_2m[2]}%</p>
        </div>
      </div>
      <div class="hour" id="hour2">
        <div>3am
          <img src="${weather[3]}" alt="weather symbol">
          <p>${hourly.temperature_2m[3]}℃</p>
          <p>${hourly.relative_humidity_2m[3]}%</p>
        </div>
        <div>4am
          <img src="${weather[4]}" alt="weather symbol">
          <p>${hourly.temperature_2m[4]}℃</p>
          <p>${hourly.relative_humidity_2m[4]}%</p>
        </div>
        <div>5am
          <img src="${weather[5]}" alt="weather symbol">
          <p>${hourly.temperature_2m[5]}℃</p>
          <p>${hourly.relative_humidity_2m[5]}%</p>
        </div>
      </div>
      <div class="hour" id="hour3">
        <div>6am
          <img src="${weather[6]}" alt="weather symbol">
          <p>${hourly.temperature_2m[6]}℃</p>
          <p>${hourly.relative_humidity_2m[6]}%</p>
        </div>
        <div>7am
          <img src="${weather[7]}" alt="weather symbol">
          <p>${hourly.temperature_2m[7]}℃</p>
          <p>${hourly.relative_humidity_2m[7]}%</p>
        </div>
        <div>8am
          <img src="${weather[8]}" alt="weather symbol">
          <p>${hourly.temperature_2m[8]}℃</p>
          <p>${hourly.relative_humidity_2m[8]}%</p>
        </div>
      </div>
      <div class="hour" id="hour4">
        <div>9am
          <img src="${weather[9]}" alt="weather symbol">
          <p>${hourly.temperature_2m[9]}℃</p>
          <p>${hourly.relative_humidity_2m[9]}%</p>
        </div>
        <div>10am
          <img src="${weather[10]}" alt="weather symbol">
          <p>${hourly.temperature_2m[10]}℃</p>
          <p>${hourly.relative_humidity_2m[10]}%</p>
        </div>
        <div>11am
          <img src="${weather[11]}" alt="weather symbol">
          <p>${hourly.temperature_2m[11]}℃</p>
          <p>${hourly.relative_humidity_2m[11]}%</p>
        </div>
      </div>
      <div class="hour" id="hour5">
        <div>12pm
          <img src="${weather[12]}" alt="weather symbol">
          <p>${hourly.temperature_2m[12]}℃</p>
          <p>${hourly.relative_humidity_2m[12]}%</p>
        </div>
        <div>1pm
          <img src="${weather[13]}" alt="weather symbol">
          <p>${hourly.temperature_2m[13]}℃</p>
          <p>${hourly.relative_humidity_2m[13]}%</p>
        </div>
        <div>2pm
          <img src="${weather[14]}" alt="weather symbol">
          <p>${hourly.temperature_2m[14]}℃</p>
          <p>${hourly.relative_humidity_2m[14]}%</p>
        </div>
      </div>
      <div class="hour" id="hour6">
        <div>3pm
          <img src="${weather[15]}" alt="weather symbol">
          <p>${hourly.temperature_2m[15]}℃</p>
          <p>${hourly.relative_humidity_2m[15]}%</p>
        </div>
        <div>4pm
          <img src="${weather[16]}" alt="weather symbol">
          <p>${hourly.temperature_2m[16]}℃</p>
          <p>${hourly.relative_humidity_2m[16]}%</p>
        </div>
        <div>5pm
          <img src="${weather[17]}" alt="weather symbol">
          <p>${hourly.temperature_2m[17]}℃</p>
          <p>${hourly.relative_humidity_2m[17]}%</p>
        </div>
      </div>
      <div class="hour" id="hour7">
        <div>6pm
          <img src="${weather[18]}" alt="weather symbol">
          <p>${hourly.temperature_2m[18]}℃</p>
          <p>${hourly.relative_humidity_2m[18]}%</p>
        </div>
        <div>7pm
          <img src="${weather[19]}" alt="weather symbol">
          <p>${hourly.temperature_2m[19]}℃</p>
          <p>${hourly.relative_humidity_2m[19]}%</p>
        </div>
        <div>8pm
          <img src="${weather[20]}" alt="weather symbol">
          <p>${hourly.temperature_2m[20]}℃</p>
          <p>${hourly.relative_humidity_2m[20]}%</p>
        </div>
      </div>
      <div class="hour" id="hour8">
        <div>9pm
          <img src="${weather[21]}" alt="weather symbol">
          <p>${hourly.temperature_2m[21]}℃</p>
          <p>${hourly.relative_humidity_2m[21]}%</p>
        </div>
        <div>10pm
          <img src="${weather[22]}" alt="weather symbol">
          <p>${hourly.temperature_2m[22]}℃</p>
          <p>${hourly.relative_humidity_2m[22]}%</p>
        </div>
        <div>11pm
          <img src="${weather[23]}" alt="weather symbol">
          <p>${hourly.temperature_2m[23]}℃</p>
          <p>${hourly.relative_humidity_2m[23]}%</p>
        </div>
      </div>
    `

    document.getElementById("hoursContainer").innerHTML = threehoursHTML
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
  const fetch3hoursWeather = async () =>{
    try{
      const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,weather_code&start_date=2024-08-08&end_date=2024-08-08&models=icon_seamless")
      if (!response.ok) {
        throw new Error(`responseStatus: ${response.status}`);
      }
      const data = await response.json();
      threehoursInfo(data);
    }catch(error){
      console.error(error)
    }
  }

  fetch5daysWeather();
  fetch3hoursWeather();

});

async function main() {
  console.log("main thread running");
  //organize your js file(s)
}
