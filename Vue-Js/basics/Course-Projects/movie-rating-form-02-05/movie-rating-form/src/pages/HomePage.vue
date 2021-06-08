<template>
    <div class="container">
      <div>
        <h3>Popular Now</h3>
        <div class="popular-movies">
          <router-link v-for="movie in popularMovies" :key="movie.id" :to="{ name: 'movie-details', params: {movieId:movie.id,title:movie.title} }">
            <img :src="setImageUrl(movie.poster_path)" alt="">
          </router-link>
        </div>
      </div>

      <div class="navigation">
          <router-link to='/movies'>
            Explore Movies
          </router-link>
          <router-link to='/filmAppreciation'>
            Film Appreciation
          </router-link>
      </div>
      <!-- <div>
        <router-link v-for="movie in upcomingMovies" :key="movie.id" :to="{ name: 'movie-details', params: {movieId:movie.id,title:movie.title} }">
          <img :src="setImageUrl(movie.poster_path)" alt="">
        </router-link>
      </div> -->
    </div>

</template>
<script>
  import { computed, onBeforeMount } from 'vue';
  import { useStore } from 'vuex';

  export default{
    setup(){
      const store = useStore();
      async function getPopularMovies(){
        const payload = {
          link:'https://api.themoviedb.org/3/movie/popular?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=1',
          toDo:'popular-movies'
        };
        try{
          await store.dispatch('getFromAPI', payload);
        }catch(error){
          this.error = error.message || 'Something went wrong';
        }

      }

      async function getNowshowingMovies(){
        const payload = {
          // link:'https://api.themoviedb.org/3/movie/now_playing?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=1',
          link:'https://api.themoviedb.org/3/movie/upcoming?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=2',
          toDo:'upcoming'
        };
        try{
          await store.dispatch('getFromAPI', payload);
        }catch(error){
          this.error = error.message || 'Something went wrong';
        }

      }

      const popularMovies = computed(()=>{
        // getLink = 'https://api.themoviedb.org/3/movie/popular?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=1';
        const movies = store.getters.getPopularMovies;
        if(movies){
          return movies.slice(0,5);
        }
        return [];
      });



      const nowshowingMovies = computed(()=>{
        // getLink = 'https://api.themoviedb.org/3/movie/popular?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=1';
        const movies = store.getters.getNowshowingMovies;
        if(movies){
          return movies.slice(0,5);
        }
        return [];
      });

      const upcomingMovies = computed(()=>{
        // getLink = 'https://api.themoviedb.org/3/movie/popular?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=1';
        const movies = store.getters.getUpcomingMovies;
        if(movies){
          return movies.slice(0,5);
        }
        return [];
      });

      function setImageUrl(imgUrl){
        return 'https://image.tmdb.org/t/p/w185' + imgUrl;
      }

      onBeforeMount(()=>{
        getPopularMovies();
        getNowshowingMovies();
      });

      return{
        popularMovies:popularMovies,
        setImageUrl,
        nowshowing:nowshowingMovies,
        upcomingMovies,
      }
    }
  }
</script>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:1em;
    align-items: center;
    min-height: 100vh;
    padding:5em;
    /* background: url('../assets/susan-gold-sQGCHET1wvc-unsplash.jpg'); */
    /* background: url('../assets/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg'); */
    background: url('../assets/erik-witsoe-GF8VvBgcJ4o-unsplash.jpg');
    background-size: cover;
    width:100%;

}
.popular-movies{
  display: flex;
  gap:1em;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
}
.popular-movies >*{
  width: 100%;
}
.navigation{
  display: flex;
  gap:2em;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  font-weight: 600;
}
.navigation a{
  padding:1em;
}
.navigation a:focus,
.navigation a:hover{
  /* padding:1em; */
  transform: scale(1.2);
  transition: 0.3s ease-out;
}
a{
  text-decoration: none;
  /* padding:0.5em; */
  /* padding: 1em; */
  border-radius: 0.5em;
  /* border: 1px solid #21bf73; */
  width:auto;
  cursor: pointer;
  text-decoration: none;
  /* background-color: transparent; */
  background: #03256c;
  display: block;
  text-align: center;
  /* color:#393e46; */
  color:#fafafa;
}

/* a:hover{
  background-color: #b0eacd;
  color:#323232;
} */
a:hover{
  opacity: 0.8;
}

/* ANIMATIONS */
/* @keyframes home {
  from{
    opacity:0;
    transform:translateX(-50px) scale(0.7);
  }
  to{
    opacity:1;
    transform: translateX(0) scale(1);
  }
} */

/* .showcase-enter-active{
  transition:all 0.3s ease-out;
  position:absolute;

}
.showcase-leave-active{
  transition: all 0.3s ease-in reverse;
  position:absolute;

}
.showcase-enter-from{
  opacity:0;
  transform:translateY(-900px);
}
.showcase-enter-to,
.showcase-leave-from{
  opacity:1;
  transform:translateY(0);
}
.showcase-leave-to{
  opacity:0;
  transform:translateY(0px);
} */
</style>
