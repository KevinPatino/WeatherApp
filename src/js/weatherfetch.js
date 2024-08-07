document.addEventListener("DOMContentLoaded",()=>{

  const fetchWeatherMain = async () =>{
    try{
      const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
      if (!response.ok) {
        throw new Error(`responseStatus: ${response.status}`);
      }
      const data = await response.json();
      console.log("weatherDataMain: ",data);
    }catch(error){
      console.error(error)
    }
  }
  fetchWeatherMain();

  const fetchWeather3hours = async () =>{
    try{
      const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
      if (!response.ok) {
        throw new Error(`responseStatus: ${response.status}`);
      }
      const data = await response.json();
      console.log("weatherData3hours: ",data);
    }catch(error){
      console.error(error)
    }
  }
  fetchWeather3hours();
})