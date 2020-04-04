const dateHeader = document.querySelector('.panel-left-date');
const tempNumber = document.querySelector('.panel-left-tempnumber');
const degreeUnit = document.querySelector('.panel-left-degrees');
const locationDisplay = document.querySelector('.panel-left-location');
const tempDescription = document.querySelector('.panel-left-descr');


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const key = 'a5a9a9fd52e9898ff4d8cd74a792d10f';
const weather = {};

window.addEventListener('load', () => {
    let date = new Date();
    displayDate(date);
    
    let lat;
    let long;

    // ask for location, set lat and long based on response
    lat = 44.112003;
    long = -72.855949
    // ^ use navigator.geolocation.getCurrentPosition()

    displayWeather(lat, long);
});

function displayDate(date) {    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    dateHeader.textContent = `${month} ${day}, ${year}`;
}

function displayWeather(lat, long) {

    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;

    // DUMMY DATA
    tempNumber.innerHTML = '20';
    locationDisplay.innerHTML = 'London';
    tempDescription.innerHTML = 'thunderstorm';
    

    /*
    fetch(api)
        .then(function(response) {
            let data = response.json();
            return data;
        })
        .then(function(data) {
             weather.temperature = Math.floor(data.main.temp - 273);
             weather.description = data.weather[0].description;
             weather.city = data.name;
        })
        .then(function() {
            tempNumber.innerHTML = `${weather.temperature}`;
            locationDisplay.innerHTML = `${weather.city}`;
            tempDescription.innerHTML = `${weather.description}`;
        });
    */

}

/* API returns data in this format:

{
    "coord": {
        "lon":-72.86,
        "lat":44.11
    },
    "weather":[
        {
            "id":804,
            "main":"Clouds",
            "description":"overcast clouds",
            "icon":"04d"
        }
    ],
    "base":"stations",
    "main": {
        "temp":284.24,
        "feels_like":279.72,
        "temp_min":282.04,
        "temp_max":287.15,
        "pressure":1016,
        "humidity":62
    },
    "visibility":16093,
    "wind": {
        "speed":4.6,
        "deg":320
    },
    "clouds": {
        "all":90
    },
    "dt":1586031205,
    "sys": {
        "type":1,
        "id":4960,
        "country":"US",
        "sunrise":1585995973,
        "sunset":1586042515
    },
    "timezone":-14400,
    "id":5242428,
    "name":"Waitsfield",
    "cod":200
}

*/