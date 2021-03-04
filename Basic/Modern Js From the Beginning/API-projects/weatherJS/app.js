
//Init Weather Object
const weather = new Weather('Miami', 'FL');

function getWeather(){
  weather.getWeather()
      .then(results => {
        console.log(results);
      })
      .catch(err => console.log(err));
}

//Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);
