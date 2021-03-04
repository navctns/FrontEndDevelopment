
class UI {

  constructor(){
    this.desc = document.getElementById('w-desc');
    this.lattitude = document.getElementById('w-lattitude');
    this.longitude = document.getElementById('w-longitude');
    this.city = document.getElementById('w-city');
    this.temp_min = document.getElementById('w-temp-min');
    this.temp_max = document.getElementById('w-temp-max');
    this.humidity = document.getElementById('w-humidity');
    this.feels_like = document.getElementById('w-feels-like');
    this.wind_speed = document.getElementById('w-wind-speed');
    this.locationChangeCity = document.getElementById('w-form').getElementById('city');
    this.locationChangeState = document.getElementById('w-form').getElementById('state');

  }

  //Render Weather Details Elements
  render(weather){
    // let desc;
    // desc = weather.weather[0].description;
    // console.log(desc);
    // for (let i=0; i<2; i++){
    //   console.log(desc);
    // }
    this.desc.textContent = weather.weather[0].description;
    this.lattitude.textContent = 'Lattitude : ' + weather.coord.lat;
    this.longitude.textContent = 'Longitude : ' + weather.coord.lon;
    this.city.textContent = 'City : ' + weather.name;
    this.temp_min.textContent = 'Max Temp : ' + weather.main.temp_min;
    this.temp_max.textContent = 'Min Temp : ' + weather.main.temp_max;
    this.humidity.textContent = 'Humidity : ' + weather.main.humidity;
    this.feels_like.textContent = 'Feels Like : ' + weather.main.feels_like;
    this.wind_speed.textContent = 'Wind Speed : ' + weather.wind.speed;
  }

}
