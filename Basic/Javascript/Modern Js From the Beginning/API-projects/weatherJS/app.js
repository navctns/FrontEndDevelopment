
//Init
const storage = new Storage;
//Get Stored Location data
const weatherLocation = storage.getLocationData();

//Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
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

// document.getElementById('change-loc-modal').addEventListener('click', (e) => {
//   if(ui.locationChangeCity === '' || ui.locationChangeState === ''){
//     console.log('Enter City and State');
//   }
//   else {
//     weather.changeLocation(ui.locationChangeCity.value, ui.locationChangeState.value);
//   }
//   e.preventDefault();
// })

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  if(ui.locationChangeCity === '' || ui.locationChangeState === ''){
    console.log('Enter City and State');
  }
  else {
    weather.changeLocation(city, state);
    //Set location to LS
    storage.setLocationData(city, state);
  }
  //get and displaly weather
  getWeather();
  //Close modal
  $('#locModal').modal('hide');
  // e.preventDefault();
})

//Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);
