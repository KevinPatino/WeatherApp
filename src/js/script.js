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
  main();
});

// crear un event listener input para guardar los datos ingresados en el search bar
// guardar esos datos y pasarlos como funcion como parametro query para pasarlo al fetch
// con los resultados obtenidos crear un map para guardar los datos de ciudad, latitud y longitud

const citySearchBar = document.getElementById("searchCity");
const cities = document.getElementById('citiesList');



citySearchBar.addEventListener('input', (value) => {
    console.log(citySearchBar.value);
})

async function main(){
    let query = 'van';

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
        data.addresses.forEach(element => {
            const city = element.formattedAddress
            const latitude = element.latitude
            const longitude = element.longitude
            const ul = document.getElementById('citiesList');
            const li = document.createElement('li')
            li.innerHTML = city
            ul.appendChild(li);
        });
      } else {
        // Handle the error
        console.error('Fetch error:', response.status, response.statusText);
      }

}



