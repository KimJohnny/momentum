const weather = document.querySelector(".js-weather");

const API_KEY = "ed57e6b1448b8fb5b5b5e926eedbdb5a";
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric)`
        ).then(function(response) {
            console.log(response.json)
            return response.json();
        }).then(function(json) {
            console.log(json);
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} / ${place}`;
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}


function handleGeoFail() {
    console.log('cannt access geoloc')
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoFail);

}


function loadCoords() {
    const lodedcoords = localStorage.getItem(COORDS);
    if (lodedcoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(lodedcoords); 
        getWeather(parseCoords.latitude, parseCoords.longitude);// get weather
    }
}


function init() {
    loadCoords()

}

init();