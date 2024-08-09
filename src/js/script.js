document.addEventListener("DOMContentLoaded", () => {
  const citySelector = document.getElementById("favCities");
  const citySearchBar = document.getElementById("searchCity");
  const cityName = document.getElementById("cityName");
  const favIcon = document.getElementById("favIcon");
  const temperature = document.getElementById("temperature");
  const weatherInfo = document.getElementById("weatherInfo");
  const hour1 = document.getElementById("hour1");
  const hour2 = document.getElementById("hour2");
  const hour3 = document.getElementById("hour3");
  const hour4 = document.getElementById("hour4");
  const hour5 = document.getElementById("hour5");
  const hour6 = document.getElementById("hour6");
  const hour7 = document.getElementById("hour7");
  const hour8 = document.getElementById("hour8");
  const daysContainer = document.getElementById("daysContainer");

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

  var inTdays = new Date();
  inTdays.setDate(inTdays.getDate() + 2);
  var Tyear = inTdays.getFullYear();
  var Tmonth = inTdays.getMonth() + 1;
  var Tday = inTdays.getDate();
  if (Tmonth < 10) {
    Tmonth = "0" + Tmonth;
  }
  if (Tday < 10) {
    Tday = "0" + Tday;
  }
  inTdays = `${Tyear}-${Tmonth}-${Tday}`;

  var inThdays = new Date();
  inThdays.setDate(inThdays.getDate() + 3);
  var Thyear = inThdays.getFullYear();
  var Thmonth = inThdays.getMonth() + 1;
  var Thday = inThdays.getDate();
  if (Thmonth < 10) {
    Thmonth = "0" + Thmonth;
  }
  if (Thday < 10) {
    Thday = "0" + Thday;
  }
  inThdays = `${Thyear}-${Thmonth}-${Thday}`;

  var inFourdays = new Date();
  inFourdays.setDate(inFourdays.getDate() + 4);
  var Foyear = inFourdays.getFullYear();
  var Fomonth = inFourdays.getMonth() + 1;
  var Foday = inFourdays.getDate();
  if (Fomonth < 10) {
    Fomonth = "0" + Fomonth;
  }
  if (Foday < 10) {
    Foday = "0" + Foday;
  }
  inFourdays = `${Foyear}-${Fomonth}-${Foday}`;

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
    // console.log("Days: ", info.daily.time);
    let weather = info.daily.weather_code;
    weather = weatherConverter(weather);
    //    console.log("weather", weather)
    const dateArray = info.daily.time;
    const formatDates = dateArray.map(formatDate);

    function formatDate(dateStr) {
      const [year, month, day] = dateStr.split("-");
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const monthName = monthNames[parseInt(month, 10) - 1];
      return `${monthName} - ${day}`;
    }

    document.getElementById("daysContainer").innerHTML = "";
/* 
    const fivedaysHTML = `
    <div class="day" id="day1">
    <p class="dayTime">${formatDates[0]}</p>
      <img src="${weather[0]}" alt="weather symbol">
      <p id="MinMax1">${info.daily.temperature_2m_min[0]}° - ${info.daily.temperature_2m_max[0]}°</p>
    </div>
    <div class="day" id="day2">
    <p class="dayTime">${formatDates[1]}</p>
      <img src="${weather[1]}" alt="weather symbol">
      <p id="MinMax2">${info.daily.temperature_2m_min[1]}° - ${info.daily.temperature_2m_max[1]}°</p>
    </div>
    <div class="day" id="day3">
    <p class="dayTime">${formatDates[2]}</p>
      <img src="${weather[2]}" alt="weather symbol">
      <p id="MinMax3">${info.daily.temperature_2m_min[2]}° - ${info.daily.temperature_2m_max[2]}°</p>
    </div>
    <div class="day" id="day4">
    <p class="dayTime">${formatDates[3]}</p>
      <img src="${weather[3]}" alt="weather symbol">
      <p id="MinMax4">${info.daily.temperature_2m_min[3]}° - ${info.daily.temperature_2m_max[3]}°</p>
    </div>
    <div class="day" id="day5">
    <p class="dayTime">${formatDates[4]}</p>
      <img src="${weather[4]}" alt="weather symbol">
      <p id="MinMax5">${info.daily.temperature_2m_min[4]}° - ${info.daily.temperature_2m_max[4]}°</p>
    </div>
  `;
 */
  //    document.getElementById("daysContainer").innerHTML = fivedaysHTML;

    for(i=1;i<=5;i++){
      const Item = document.createElement('div');
      Item.id = `day${i}`;
      Item.className = 'day';
      daysContainer.appendChild(Item);
    }

    const day1 = document.getElementById("day1");
    const day2 = document.getElementById("day2");
    const day3 = document.getElementById("day3");
    const day4 = document.getElementById("day4");
    const day5 = document.getElementById("day5");

    for(i=0;i<5;i++){
      const Ptag1 = document.createElement("p");
      Ptag1.className = "dayTime"
      Ptag1.innerText = formatDates[i];
      const IMG = document.createElement("img");
      IMG.src = weather[i]
      IMG.alt = "weather symbol"
      const Ptag2 = document.createElement("p")
      Ptag2.id =  `MinMax${i+1}`
      Ptag2.innerText = info.daily.temperature_2m_min[i]
      console.log(day)
      switch (i) {
        case 0:
          day1.appendChild(Ptag1)
          day1.appendChild(IMG)
          day1.appendChild(Ptag2)
          break;
        case 1:
          day2.appendChild(Ptag1)
          day2.appendChild(IMG)
          day2.appendChild(Ptag2)
          break;
        case 2:
          day3.appendChild(Ptag1)
          day3.appendChild(IMG)
          day3.appendChild(Ptag2)
          break;
        case 3:
          day4.appendChild(Ptag1)
          day4.appendChild(IMG)
          day4.appendChild(Ptag2)
          break;
        case 4:
          day5.appendChild(Ptag1)
          day5.appendChild(IMG)
          day5.appendChild(Ptag2)
          break;
                          
        default:
          break;
      }

    }
    if(!latitude){
      latitude=52.52
    }
    if(!longitude){
      longitude=13.41
    }
      
    day1.addEventListener("click",()=>{
      fetch3hoursWeather(today,latitude,longitude);
    })
    day2.addEventListener("click",()=>{
      fetch3hoursWeather(inTdays,latitude,longitude);
    })
    day3.addEventListener("click",()=>{
      fetch3hoursWeather(inThdays,latitude,longitude);
    })
    day4.addEventListener("click",()=>{
      fetch3hoursWeather(inFourdays,latitude,longitude);
    })
    day5.addEventListener("click",()=>{
      fetch3hoursWeather(inFivedays,latitude,longitude);
    })

  };
  const threehoursInfo = (info) => {
    const hourly = info.hourly;
    let weather = hourly.weather_code;
    weather = weatherConverter(weather);

    console.log("threehours", weather);

    const threehoursHTML = `
      <div class="hour" id="hour1">
        <p class = "time">0 am </p>
        <br>
          <img src="${weather[0]}" alt="weather symbol">
          <br>
          <div class = "tempData">
            <img src = "resources/thermometer.png"/>
            <p>${hourly.temperature_2m[0]}℃</p>
          </div>
          <div class = "humidityData">
            <img src = "resources/humidity.png"/>
            <p>${hourly.relative_humidity_2m[0]}%</p>
          </div>
      </div>
      <div class="hour" id="hour2">
        <p class = "time">3 am </p>
        <br>
        <img src="${weather[3]}" alt="weather symbol">
          <br>
          <div class = "tempData">
            <img src = "resources/thermometer.png"/>
            <p>${hourly.temperature_2m[3]}℃</p>
          </div>
          <div class = "humidityData">
            <img src = "resources/humidity.png"/>
            <p>${hourly.relative_humidity_2m[3]}%</p>
          </div>
      </div>
      <div class="hour" id="hour3">
        <p class = "time">6 am </p>
        <br>
        <img src="${weather[6]}" alt="weather symbol">
        <br>
          <div class = "tempData">
            <img src = "resources/thermometer.png"/>
            <p>${hourly.temperature_2m[6]}℃</p>
          </div>
          <div class = "humidityData">
            <img src = "resources/humidity.png"/>
            <p>${hourly.relative_humidity_2m[6]}%</p>
          </div>
      </div>
      <div class="hour" id="hour4">
        <p class = "time">9 am </p>
        <br>
        <img src="${weather[9]}" alt="weather symbol">
        <br>
          <div class = "tempData">
            <img src = "resources/thermometer.png"/>
            <p>${hourly.temperature_2m[9]}℃</p>
          </div>
          <div class = "humidityData">
            <img src = "resources/humidity.png"/>
            <p>${hourly.relative_humidity_2m[9]}%</p>
          </div>
      </div>
      <div class="hour" id="hour5">
        <p class = "time">12 pm</p>
        <br>
        <img src="${weather[12]}" alt="weather symbol">
        <br>
          <div class = "tempData">
            <img src = "resources/thermometer.png"/>
            <p>${hourly.temperature_2m[12]}℃</p>
          </div>
          <div class = "humidityData">
            <img src = "resources/humidity.png"/>
            <p>${hourly.relative_humidity_2m[12]}%</p>
          </div>
      </div>
      <div class="hour" id="hour6">
        <p class = "time">3 pm </p>
        <br>
        <img src="${weather[15]}" alt="weather symbol">
        <br>
          <div class = "tempData">
            <img src = "resources/thermometer.png"/>
            <p>${hourly.temperature_2m[15]}℃</p>
          </div>
          <div class = "humidityData">
            <img src = "resources/humidity.png"/>
            <p>${hourly.relative_humidity_2m[15]}%</p>
          </div>
      </div>
      <div class="hour" id="hour7">
        <p class = "time">6 pm </p>
        <br>
        <img src="${weather[18]}" alt="weather symbol">
        <br>
          <div class = "tempData">
            <img src = "resources/thermometer.png"/>
            <p>${hourly.temperature_2m[18]}℃</p>
          </div>
          <div class = "humidityData">
            <img src = "resources/humidity.png"/>
            <p>${hourly.relative_humidity_2m[18]}%</p>
          </div>
      </div>
      <div class="hour" id="hour8">
        <p class = "time">9 pm </p>
        <br>
        <img src="${weather[21]}" alt="weather symbol">
        <br>
          <div class = "tempData">
            <img src = "resources/thermometer.png"/>
            <p>${hourly.temperature_2m[21]}℃</p>
          </div>
          <div class = "humidityData">
            <img src = "resources/humidity.png"/>
            <p>${hourly.relative_humidity_2m[21]}%</p>
          </div>
      </div>
    `;

    document.getElementById("hoursContainer").innerHTML = threehoursHTML;
  };
  const fetch5daysWeather = async (lat,long) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&start_date=${today}&end_date=${inFivedays}`
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
  const fetch3hoursWeather = async (day,lat,long) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relative_humidity_2m,weather_code&start_date=${day}&end_date=${day}&models=icon_seamless`
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

  fetch5daysWeather(52.52,13.41);
  fetch3hoursWeather(today,52.52,13.41);

// Here starts the autocomplete for searching bar
  
const cities = document.getElementById("citiesList");
var latitude
var longitude

const searchBar = document.getElementById("citiesList")

// Event listener to save the city in the searching bar 
const showData = (address) => {
    console.log('Selected City: ---->',address.formattedAddress);
    citySearchBar.value = address.formattedAddress;
    searchBar.innerHTML = '';
    latitude = address.latitude;
    longitude = address.longitude;
//    console.log(lat,long);

  //   Awshaf was explaning me to do the these steps:
    // const weatherdata = fetch weater data for long lat
    // functin display5dayWeatherData(weatherdata)
    fetch5daysWeather(latitude,longitude);
    fetch3hoursWeather(today,latitude,longitude);

}

citySearchBar.addEventListener('input', (value) => {
    main(citySearchBar.value);
});

// fetching autocomplete 
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

        searchBar.innerHTML = '';
        data.addresses.forEach((address, index) => {
            // Create the elements for the autocomplete results
            const city = address.formattedAddress;
            const searchBar = document.getElementById('citiesList');
            const listItem = document.createElement('p');
            listItem.id = `list${index}`;
            listItem.className = 'list-item';
            listItem.textContent = city;
            listItem.addEventListener('click', () => showData(address));
            searchBar.appendChild(listItem);

        });
      } else {
        console.error('Fetch error:', response.status, response.statusText);
      }

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

//time manipulation
function changeBackground(currTime) {
  if (currTime >= 6 && currTime <= 11) {
    document.body.style.background =
      "linear-gradient(180deg, rgba(6,13,111,1) 0%, rgba(185,43,181,1) 30%, rgba(228,225,9,1) 70%)";
    return "Morning";
  } else if (currTime >= 12 && currTime <= 15) {
    document.body.style.background =
      "linear-gradient(180deg, rgba(9,106,238,1) 5%, rgba(14,198,213,1) 38%, rgba(14,198,213,1) 63%, rgba(9,106,238,1) 95%)";
    return "Noon";
  } else if (currTime >= 16 && currTime <= 20) {
    document.body.style.background =
      "linear-gradient(180deg, rgba(221,215,15,1) 0%, rgba(238,134,5,1) 37%, rgba(165,5,238,1) 78%, rgba(13,3,122,1) 97%)";
    return "Afternoon";
  } else if (currTime >= 21 && currTime <= 5) {
    document.body.style.background =
      "linear-gradient(180deg, rgba(30,43,88,1) 5%, rgba(37,53,105,1) 25%, rgba(53,50,131,1) 50%, rgba(72,69,154,1) 75%, rgba(97,76,191,1) 95%)";
    return "Night Time";
  }
}

function updateTime() {
  const now = new Date();

  const hour = now.getHours();

  console.log(changeBackground(hour));

  // console.log("current hour: ", hour);
}

updateTime();
setInterval(updateTime, 60000);

});
