const apiKey = 'f69cecc23dd047dbabe205228241107';
const d = document, inputBtn = d.querySelector(".searchBtn");
const pTemperature = d.querySelector(".temperature"),pCity = d.querySelector(".city"),pCountry = d.querySelector(".country")
const spanHumidity = d.querySelector(".span-humidity"), spanWind = d.querySelector(".span-wind")
const sunOrMoon = d.querySelector(".sunOrMoon"), img = d.querySelector(".container_img img");

async function getData(){
    const country = d.querySelector(".searchInput").value;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=no`;
    try {
        let res = await fetch(url),
            json = await res.json();
        console.log(json)
        if(!res.ok) throw {status: res.status, statusText: res.statusText}
        let temp = json.current.temp_c,
            city = json.location.name,
            windSpeed = json.current.wind_kph,
            humidity = json.current.humidity,
            country = json.location.country,
            imgUrl = json.current.condition.icon;
        img.setAttribute("src",imgUrl)
        img.classList.add("show")
        pTemperature.innerHTML = `${temp}°C`
        pCity.innerHTML = city
        pCountry.innerHTML = country
        spanHumidity.innerHTML = `${humidity}%`
        spanWind.innerHTML = `${windSpeed} km/h`
    }
    catch(err){
        /* const message = err.statusText || "Ocurrio un error"
            pCity.innerHTML = `Error ${err.status}: ${message}`
            pCountry.innerHTML = "Ciudad/país incorrecto" */
    }
}


inputBtn.addEventListener("click",getData)