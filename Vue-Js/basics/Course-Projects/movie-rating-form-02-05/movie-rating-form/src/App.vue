<template>
  <the-navbar></the-navbar>
  <router-view v-slot="slotProps">
    <!-- recheck keep alive -->
    <transition name="route" mode="out-in">
      <keep-alive>
        <component :is="slotProps.Component"></component>
      </keep-alive>
      <!-- <component v-else :is="slotProps.Component"></component> -->
    </transition>
  </router-view>
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
  },
  created(){
    const actionObj = {
      link:'https://api.themoviedb.org/3/configuration/languages?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a',
      toDo:'langs',
    }
    this.$store.dispatch('getFromAPI', actionObj);
  }

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
 /* @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap'); */
* {
  box-sizing: border-box;
}
html {
  font-family:'Roboto', sans-serif;
}
body {
  margin: 0;
  /* color:#393e46; */
  /* color:#323232; */
  color:#fafafa;
  letter-spacing: 1px;
  line-height: 1.6;
}
h2,h3,h4,h5,h6{
  color:#fafafa;
}
.fade-enter-from,
.fade-leave-to
{
  opacity: 0;
}
.fade-enter-active{
  transition:opacity 0.3s ease-out;
}
.fade-leave-active{
  transition: opacity 0.3s ease-in;
}
.fade-enter-to,
.fade-leave-from{
  opacity:1;
}
.route-enter-from{
  opacity: 0;
  transform:translateY(-30px);
}
.route-leave-to{
  opacity:0;
  transform:translateY(30px);
}
.route-enter-active{
  transition:all 0.3s ease-out;
}
.route-leave-active{
  transition:all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from{
  opacity:1;
  transform:translateY(0);
}
</style>
