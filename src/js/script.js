document.addEventListener("DOMContentLoaded", ()=>{
    main();
})

async function main(){
    const query = 'Kuma'
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
         // do something with data
         console.log(data);
      } else {
        // Handle the error
        console.error('Fetch error:', response.status, response.statusText);
      }
}
