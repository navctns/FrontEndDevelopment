<template>
  <div>
    <h2>Basics of Film Appreciation</h2>
    <h3>Traditions in World Cinema</h3>
    <router-link :to="{ name:'film_movement', params:{movement:'gerExp',header:'German Expressionist Films'}}">Movies in German Expressionism</router-link>
    <router-link :to="{ name:'film_movement', params:{movement:'freImp',header:'French Impressionist Films'}}">French Impressionist Cinemas</router-link>
    <router-link :to="{ name:'film_movement', params:{movement:'sovMon',header:'Soviet Montage Films(1924-1933)'}}">Soviet Montage Films(1924-1933)</router-link>


    <!-- <ul>
      <li v-for="movie in movements.gerExp"
        :key="movie.id"
      >
        {{movie.title}}
      </li>
    </ul> -->
    <!-- <app-button mode="flat" value="Traditions in World Cinema" text-color='black'>
    </app-button> -->
  </div>
</template>
<script>
  import movieTraditions from './movieTraditions.js';
  import { computed ,onBeforeMount} from 'vue';
  import { useStore } from 'vuex';
  export default{
    setup(){
      async function loadMovie(movieId, movement){
        //LOAD Movie Data From API by movieId
        const link = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US`;
        const payload = {
          link:link,
          toDo:'film-movements',
          filmMov:movement,
        }
        // console.log('movie -load link ', link);
        try{
          await store.dispatch('getFromAPI', payload);
        }catch(error){
          this.error = error.message || 'Something went wrong';
        }
      }
      //Get Film filmMovements

      //Store German expressionist movies
      function loadMovieTraditions(){
        // movieTraditions.germanExp.forEach(movieId => {
        //   loadMovie(movieId);
        // });
        // console.log('movieTraditions', movieTraditions.gerExp, movieTraditions.keys);
        // movieTraditions.forEach(tradition => {
        //   // loadMovie(movieId);
        //   console.log('movie Tradition',tradition.key)
        // });
        Object.entries(movieTraditions).forEach(
          ([key, movementMovieIds]) => {
            console.log(key, movementMovieIds);
            movementMovieIds.forEach(movieId => {
              console.log('movieid',movieId);
              loadMovie(movieId, key);
            });

          }
        );
      }


      //Load vuex
      const store = useStore();
      const filmMovements = computed(()=>{
        return store.getters.getFilmMovements;
      });
      //onBeforeMount
      onBeforeMount(()=>{
        loadMovieTraditions();
      });

      return{
        movements:filmMovements,
      }
    }
  }
</script>
<style scoped>
  div{
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    gap:1em;
    /* justify-content: center; */
    min-height: 100vh;
  }
  a{
    text-decoration: none;
    color:#fafafa;
    padding:1em;
    width:15rem;
    background: #323232;
    display: flex;
    justify-content: center;
    text-align: center;
    border-radius: 0.5em;
  }
  a:hover{
    opacity: 0.9;
  }
</style>
