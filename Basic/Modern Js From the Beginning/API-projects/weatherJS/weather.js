
 class Weather {

   constructor(city, state){
     this.apiKey = '96933d2d930863e628a60cf793805ae8';
     this.city = city;
     this.state = state;
   }

   //Fetch Weather API
   async getWeather(){

     const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&${this.state}&appid=${this.apiKey}`)
     //http://api.openweathermap.org/data/2.5/weather?q=Miami&FL&appid={api_key}
     const weatherData = await response.json();
     return weatherData;
   }

   //change weather location
   changeLocation(city, state){
     this.city = city;
     this.state = state;
   }
 }
