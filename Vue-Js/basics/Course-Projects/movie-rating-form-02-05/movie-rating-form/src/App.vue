<template>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import MovieForm from './components/MovieForm.vue';
// import TheMovies from './pages/TheMovies.vue'
export default {
  name: 'App',
  components:{
    // TheNavbar,
  },
  data(){
    return{
      movies:[{
        id:'snow-piercer',
        title:'Snowpiercer',
        genre:'Action/Sci-fi',
        director:'Bong Joon-ho',
        writer:'Bong Joon-ho, Kelly Masterson',
        imgUrl:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPOHIxYdTXDpbFEWC-cv-tAQ98ELcVPMGVFy0pgFoI5s7UiDNU',
        synopsis:''
      },
      {
        id:'host',
        title:'The Host',
        genre:'Horror/Action',
        director:'Bong Joon-ho',
        writer:'Bong Joon-ho',
        imgUrl:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQI9-kW4DCOtKg9c5UlYw1RgDPv5v508ysKahIbG6u_hvTa2TQH',
        synopsis:'An unidentified monster appears from the Han River in Seoul, kills hundreds and also carries off Hyun-seo. When her family learns that she is being held captive, they resolve to save her.',
      },

    ],
    }
  },
  provide(){
    return{
      movies:this.movies,
      addMovie:this.addMovie,
      deleteMovie:this.deleteMovie,
    };
  },
  methods:{
    addMovie(movieObj){
      console.log('add new movie');
      this.movies.unshift(movieObj);
    },
    deleteMovie(id){
      console.log('delete from app');
      // this.movies = this.movies.filter(movie => movie.id !== id);
      const idx = this.movies.findIndex(movie => movie.id === id);
      this.movies.splice(idx,1);
      console.log(this.movies);
    }
  }

}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
html {
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
  color:#393e46;
}

</style>
