<template>
  <the-navbar v-if="!homepage"></the-navbar>
  <!-- <home-page v-if="homepage"></home-page> -->
  <!-- For the Starting SHOWCASE -->
  <router-view name="showcase" v-if="homepage" v-slot="slotProps">
    <transition name="showcase" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <router-view v-slot="slotProps">
    <!-- recheck keep alive -->
    <transition name="route" mode="out-in">
      <keep-alive>
        <component :is="slotProps.Component"></component>
      </keep-alive>
      <!-- <component v-else :is="slotProps.Component"></component> -->
    </transition>
  </router-view>
  <!-- FOOTER -->
  <the-footer v-if="!homepage"></the-footer>
</template>

<script>
import TheFooter from './components/layout/TheFooter.vue';
import HomePage from './pages/HomePage.vue';
export default {
  name: 'App',
  components:{
    // TheNavbar,
    TheFooter,
    HomePage,
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
  computed:{
    homepage(){
      return this.$route.path === '/';

    },

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
  scroll-behavior: smooth;
}
body {
  margin: 0;
  /* color:#393e46; */
  /* color:#323232; */
  color:#fafafa;
  letter-spacing: 1px;
  line-height: 1.6;
  font-size: 1.2em;
  background: -webkit-linear-gradient(rgba(0, 0, 0, 0.8), rgba(195, 55, 100, 0.8)), url('https://source.unsplash.com/featured/?movies');

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
/* SHOWCASE ANIM */
.showcase-enter-from{
  opacity: 0;
  position: absolute;
  /* transform:translateX(-1000px); */
}
.showcase-leave-to{
  opacity:0;
  /* transform:translateX(-1000px); */
}
.showcase-enter-active{
  transition:all 3s ease-out;
}
.showcase-leave-active{
  transition:all 1s ease-in;
}
.showcase-enter-to,
.showcase-leave-from{
  opacity:1;
  /* transform:translateY(0); */
}
@media(max-width:768px) {
  body{
    line-height: 1.4em;
  }
}
</style>
