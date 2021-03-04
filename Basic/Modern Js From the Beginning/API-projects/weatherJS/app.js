
//Init Weather Object
const weather = new Weather('Miami', 'FL');
const ui = new UI;

function getWeather(){
  weather.getWeather()
      .then(weather => {
        // console.log(results);
        console.log(weather);
        ui.render(weather);
      })
      .catch(err => console.log(err));
}

document.getElementById('change-loc-modal').addEventListener('click', (e) => {
  if(ui.locationChangeCity === '' || ui.locationChangeState === ''){
    console.log('Enter City and State');
  }
  else {
    weather.changeLocation(ui.locationChangeCity.value, ui.locationChangeState.value);
  }
  e.preventDefault();
})

//Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);
