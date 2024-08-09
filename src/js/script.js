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

  //Get the date *today and in five days
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  today = `${year}-${month}-${day}`;

  var inFivedays = new Date();
  inFivedays.setDate(inFivedays.getDate() + 5);
  var Fyear = inFivedays.getFullYear();
  var Fmonth = inFivedays.getMonth() + 1;
  var Fday = inFivedays.getDate();
  if (Fmonth < 10) {
    Fmonth = "0" + Fmonth;
  }
  if (Fday < 10) {
    Fday = "0" + Fday;
  }
  inFivedays = `${Fyear}-${Fmonth}-${Fday}`;

  console.log(today);
  console.log(inFivedays);

  const weatherConverter = (weathercode) => {
    const weatherSymbol = weathercode.map((value) => {
      //      console.log("weather", value)
      switch (value) {
        case 0: //clear sky - sunny
        case 1: //mainly clear
          return "resources/sun.png";
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
  const threehoursInfo = (info) => {
    const hourly = info.hourly;
    let weather = hourly.weather_code;
    weather = weatherConverter(weather);

    console.log("threehours", weather);

    const threehoursHTML = `
      <div class="hour" id="hour1">
        <div class = "oneHour">
          <p class = "time">0 am</p>
          <img src="${weather[0]}" alt="weather symbol">
          <p>${hourly.temperature_2m[0]}℃</p>
          <p>${hourly.relative_humidity_2m[0]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">1 am</p>
          <img src="${weather[1]}" alt="weather symbol">
          <p>${hourly.temperature_2m[1]}℃</p>
          <p>${hourly.relative_humidity_2m[1]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">2 am</p>
          <img src="${weather[2]}" alt="weather symbol">
          <p>${hourly.temperature_2m[2]}℃</p>
          <p>${hourly.relative_humidity_2m[2]}%</p>
        </div>
      </div>
      <div class="hour" id="hour2">
        <div class = "oneHour">
          <p class = "time">3 am</p>
          <img src="${weather[3]}" alt="weather symbol">
          <p>${hourly.temperature_2m[3]}℃</p>
          <p>${hourly.relative_humidity_2m[3]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">4 am</p>
          <img src="${weather[4]}" alt="weather symbol">
          <p>${hourly.temperature_2m[4]}℃</p>
          <p>${hourly.relative_humidity_2m[4]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">5 am</p>
          <img src="${weather[5]}" alt="weather symbol">
          <p>${hourly.temperature_2m[5]}℃</p>
          <p>${hourly.relative_humidity_2m[5]}%</p>
        </div>
      </div>
      <div class="hour" id="hour3">
        <div class = "oneHour">
          <p class = "time">6 am</p>
          <img src="${weather[6]}" alt="weather symbol">
          <p>${hourly.temperature_2m[6]}℃</p>
          <p>${hourly.relative_humidity_2m[6]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">7 am</p>
          <img src="${weather[7]}" alt="weather symbol">
          <p>${hourly.temperature_2m[7]}℃</p>
          <p>${hourly.relative_humidity_2m[7]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">8 am</p>
          <img src="${weather[8]}" alt="weather symbol">
          <p>${hourly.temperature_2m[8]}℃</p>
          <p>${hourly.relative_humidity_2m[8]}%</p>
        </div>
      </div>
      <div class="hour" id="hour4">
        <div class = "oneHour">
          <p class = "time">9 am</p>
          <img src="${weather[9]}" alt="weather symbol">
          <p>${hourly.temperature_2m[9]}℃</p>
          <p>${hourly.relative_humidity_2m[9]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">10 am</p>
          <img src="${weather[10]}" alt="weather symbol">
          <p>${hourly.temperature_2m[10]}℃</p>
          <p>${hourly.relative_humidity_2m[10]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">11 am</p>
          <img src="${weather[11]}" alt="weather symbol">
          <p>${hourly.temperature_2m[11]}℃</p>
          <p>${hourly.relative_humidity_2m[11]}%</p>
        </div>
      </div>
      <div class="hour" id="hour5">
        <div class = "oneHour">
          <p class = "time">12 pm</p>
          <img src="${weather[12]}" alt="weather symbol">
          <p>${hourly.temperature_2m[12]}℃</p>
          <p>${hourly.relative_humidity_2m[12]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">1 pm</p>
          <img src="${weather[13]}" alt="weather symbol">
          <p>${hourly.temperature_2m[13]}℃</p>
          <p>${hourly.relative_humidity_2m[13]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">2 pm</p>
          <img src="${weather[14]}" alt="weather symbol">
          <p>${hourly.temperature_2m[14]}℃</p>
          <p>${hourly.relative_humidity_2m[14]}%</p>
        </div>
      </div>
      <div class="hour" id="hour6">
        <div class = "oneHour">
          <p class = "time">3 pm</p>
          <img src="${weather[15]}" alt="weather symbol">
          <p>${hourly.temperature_2m[15]}℃</p>
          <p>${hourly.relative_humidity_2m[15]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">4 pm</p>
          <img src="${weather[16]}" alt="weather symbol">
          <p>${hourly.temperature_2m[16]}℃</p>
          <p>${hourly.relative_humidity_2m[16]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">5 pm</p>
          <img src="${weather[17]}" alt="weather symbol">
          <p>${hourly.temperature_2m[17]}℃</p>
          <p>${hourly.relative_humidity_2m[17]}%</p>
        </div>
      </div>
      <div class="hour" id="hour7">
        <div class = "oneHour">
          <p class = "time">6 pm</p>
          <img src="${weather[18]}" alt="weather symbol">
          <p>${hourly.temperature_2m[18]}℃</p>
          <p>${hourly.relative_humidity_2m[18]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">7 pm</p>
          <img src="${weather[19]}" alt="weather symbol">
          <p>${hourly.temperature_2m[19]}℃</p>
          <p>${hourly.relative_humidity_2m[19]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">8 pm</p>
          <img src="${weather[20]}" alt="weather symbol">
          <p>${hourly.temperature_2m[20]}℃</p>
          <p>${hourly.relative_humidity_2m[20]}%</p>
        </div>
      </div>
      <div class="hour" id="hour8">
        <div class = "oneHour">
          <p class = "time">9 pm</p>
          <img src="${weather[21]}" alt="weather symbol">
          <p>${hourly.temperature_2m[21]}℃</p>
          <p>${hourly.relative_humidity_2m[21]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">10 pm</p>
          <img src="${weather[22]}" alt="weather symbol">
          <p>${hourly.temperature_2m[22]}℃</p>
          <p>${hourly.relative_humidity_2m[22]}%</p>
        </div>
        <div class = "oneHour">
          <p class = "time">11 pm</p>
          <img src="${weather[23]}" alt="weather symbol">
          <p>${hourly.temperature_2m[23]}℃</p>
          <p>${hourly.relative_humidity_2m[23]}%</p>
        </div>
      </div>
    `;

    document.getElementById("hoursContainer").innerHTML = threehoursHTML;
  };
  const fetch5daysWeather = async () => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&start_date=${today}&end_date=${inFivedays}`
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
        `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,weather_code&start_date=${today}&end_date=${today}&models=icon_seamless`
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

// crear un event listener input para guardar los datos ingresados en el search bar
// guardar esos datos y pasarlos como funcion como parametro query para pasarlo al fetch
// con los resultados obtenidos crear un map para guardar los datos de ciudad, latitud y longitud

const citySearchBar = document.getElementById("searchCity");
const cities = document.getElementById('citiesList');



citySearchBar.addEventListener('input', (value) => {
    main(citySearchBar.value);
});


async function main(value){
    let query = value;

    const response = await fetch(
        `https://api.radar.io/v1/search/autocomplete?query=${query}&layers=locality&limit=5`,
        {
          method: "GET",
          headers: {
            Authorization: "prj_test_pk_98fa065480783b475c382ae5405dbadd1bce9491",
          },
        }
      );
      
      if (response.ok) {
        const data = await response.json(); 
        
        const ul = document.getElementById('citiesList');
        if (ul.childNodes.length < 1) {
            data.addresses.forEach(element => {
                const city = element.formattedAddress
                const latitude = element.latitude
                const longitude = element.longitude
                const ul = document.getElementById('citiesList');
                const li = document.createElement('li')
                li.innerHTML = city
                ul.appendChild(li)
            });
        } if (ul.childNodes.length === 0) {
            ul.removeChild(li)
        }
        // data.addresses.forEach(element => {
        //     const city = element.formattedAddress
        //     const latitude = element.latitude
        //     const longitude = element.longitude
        //     const ul = document.getElementById('citiesList');
        //     const li = document.createElement('li')
        //     li.innerHTML = city
        //     ul.appendChild(li)
        // });
      } else {
        // Handle the error
        console.error('Fetch error:', response.status, response.statusText);
      }

}



async function main() {
  console.log("main thread running");
  //organize your js file(s)
}

//webpage functionalities
favIcon.addEventListener("click", () => {
  // favIcon.classList.remove("fa-regular");
  favIcon.classList.toggle("fa-solid");
  if (favIcon.style.color === "yellow") {
    favIcon.style.color = "white";
  } else {
    favIcon.style.color = "yellow";
  }
});
