<template>
  <div class="container">

    <div class="navigations">
      <router-link v-for="movement in movementsData" :key="movement.moviesDataKey" :to="{ name: 'film_movement', params: {path:movement.path,header:movement.header,moviesDataKey:movement.moviesDataKey, moviesNav:movement.moviesNav} }">{{movement.header}}</router-link>
    </div>
    <div class="traditions">

      <router-view v-slot="slotProps">
        <transition name="info" mode="out-in">
          <keep-alive>
            <component :is="slotProps.Component"></component>
          </keep-alive>
        </transition>
      </router-view>
      <!-- <h2>Basics of Film Appreciation</h2>
      <h3>Traditions in World Cinema</h3> -->
      <!-- <router-link :to="{ name:'film_movement_movies', params:{movement:'gerExp',header:'German Expressionist Films'}}">Movies in German Expressionism</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'freImp',header:'French Impressionist Films'}}">French Impressionist Cinemas</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'sovMon',header:'Soviet Montage Films(1924-1933)'}}">Soviet Montage Films(1924-1933)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'itlNeo',header:'Italian Neorealist Films (1943 - 1954)'}}">Italian Neorealist Films (1943 - 1954)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'jpNew',header:'Japanese New Wave Films (1956 - 1976)'}}">Japanese New Wave Films (1956 - 1976)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'brNew',header:'British New Wave Films (1959 - 1969)'}}">British New Wave Films (1959 - 1969)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'freNew',header:'French New Wave : Important films(1958 - 1968)'}}">French New Wave films(1958 - 1968)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'hongNew',header:'Hong Kong New Wave Films: The First Wave (1979 - 1989)'}}">Hong Kong New Wave Films: The First Wave (1979 - 1989)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'dogme95',header:'Dogme95 Films: A Complete List (1995 - 2004)'}}">Dogme95 Films(1995 - 2004)</router-link>

      <router-link :to="{ name:'film_movement_movies', params:{movement:'docFilmMov',header:'Documentary Film Movement(1929-1950)'}}">Documentary Film Movement(1929-1950)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'polSch',header:'The Polish School Movies(1955-1963)'}}">The Polish School Movies(1955-1963)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'freeCinema',header:'Free Cinema(1956-1959)'}}">Free Cinema(1956-1959)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'cinNovo',header:'Cinema Novo Movies(1960-1972)'}}">Cinema Novo Movies(1960-1972)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'czechNew',header:'Czech New Wave Cinemas(1962-1968)'}}">Czech New Wave Cinemas(1962-1968)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'movieBrats',header:'The Movie Brats Movies(Late 1960s – 1980s)'}}">The Movie Brats Movies(Late 1960s – 1980s)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'laRebel',header:'L.A. Rebellion Movies(1967-1991)'}}">L.A. Rebellion Movies(1967-1991)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'newGer',header:'New German Cinema(1968-1982)'}}">New German Cinema(1968-1982)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'ausNew',header:'The Australian New Wave(1975-1985)'}}">Movies in the Australian New Wave(1975-1985)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'duLook',header:'Movies in Cinéma du look(1980-1991)'}}">Movies in Cinéma du look(1980-1991)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'newQueer',header:'Movies in New Queer Cinema(1990-1995)'}}">Movies in New Queer Cinema(1990-1995)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'mumble',header:'Movies in Mumblecore (2002-)'}}">Movies in Mumblecore (2002-)</router-link>
      <router-link :to="{ name:'film_movement_movies', params:{movement:'indParallel',header:'Movies in Indian Parallel Cinema (1952–1992)'}}">Movies in Indian Parallel Cinema (1952–1992)</router-link> -->
    </div>


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
  // import movieTraditions from './movieTraditions.js';
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  export default{
    setup(){

      const filmMovementsData = [
        {path:'german_expressionism', moviesDataKey:'gerExp', header:'German Expressionism', moviesNav:'German Expressionist Films (1919 - 1931)'},
        {path:'french_impressionist_cinema ', moviesDataKey:'freImp', header:'French Impressionist Cinema', moviesNav:'French Impressionist Films (1918 - 1929)'},
        {path:'Soviet_Montage', moviesDataKey:'sovMon', header:'Soviet Montage', moviesNav:'Soviet Montage Films (1924 - 1933)'},
        {path:'Italian_Neorealism', moviesDataKey:'itlNeo', header:'Italian Neorealism', moviesNav:'Italian Neorealist Films (1943 - 1954)'},
        {path:'Japanese_New_Wave', moviesDataKey:'jpNew', header:'Japanese New Wave', moviesNav:'Japanese New Wave Films (1956 - 1976)'},
        {path:'British_New_Wave', moviesDataKey:'brNew', header:'British New Wave', moviesNav:'British New Wave Films (1959 - 1969)'},
        {path:'French_New_Wave', moviesDataKey:'freNew', header:'French New Wave', moviesNav:'French New Wave Films (1958 - 1968)'},
        {path:'Hong_Kong_New_Wave', moviesDataKey:'hongNew', header:'Hong Kong New Wave', moviesNav:'Hong Kong New Wave Films: The First Wave (1979 - 1989)'},
        {path:'Dogme_95', moviesDataKey:'dogme95', header:'Dogme 95 ', moviesNav:'Dogme95 Films: A Complete List (1995 - 2004)'},
        {path:'Documentary_Film_Movement', moviesDataKey:'docFilmMov', header:'Documentary Film Movement', moviesNav:'Documentary Film Movement Films(1929-1950)'},
        {path:'The_Polish_School', moviesDataKey:'polSch', header:'The Polish School', moviesNav:'The Polish School Movies(1955-1963)'},
        {path:'Free_Cinema', moviesDataKey:'freeCinema', header:'Free Cinema', moviesNav:'Films in Free Cinema(1956-1959)'},
        {path:'Cinema_Novo', moviesDataKey:'cinNovo', header:'Cinema Novo Movies', moviesNav:'Cinema Novo Movies(1960-1972)'},
        {path:'Czech_New_Wave', moviesDataKey:'czechNew', header:'Czech New Wave Cinemas', moviesNav:'Czech New Wave Cinemas(1962-1968)'},
        {path:'The_Movie_Brats', moviesDataKey:'movieBrats', header:'The Movie Brats', moviesNav:'The Movie Brats Movies(Late 1960s – 1980s)'},
        {path:'L_A_Rebellion', moviesDataKey:'laRebel', header:'L.A. Rebellion', moviesNav:'L.A. Rebellion Movies(1967-1991)'},
        {path:'New_German_Cinema', moviesDataKey:'newGer', header:'New German Cinema(1968-1982)', moviesNav:'New German Cinema(1968-1982)'},
        {path:'Australian_New_Wave', moviesDataKey:'ausNew', header:'Australian New Wave', moviesNav:'Movies in the Australian New Wave(1975-1985)'},
        {path:'Cinéma_du_look', moviesDataKey:'duLook', header:'Cinéma du look', moviesNav:'Movies in Cinéma du look(1980-1991)'},
        {path:'New Queer Cinema', moviesDataKey:'newQueer', header:'New Queer Cinema', moviesNav:'Movies in New Queer Cinema(1990-1995)'},
        {path:'Mumblecore', moviesDataKey:'mumble', header:'Mumblecore', moviesNav:'Movies in Mumblecore (2002-)'},
        {path:'Indian_Parallel_Cinema', moviesDataKey:'indParallel', header:'Indian Parallel Cinema', moviesNav:'Movies in Indian Parallel Cinema (1952–1992)'},
        {path:'german_expressionism', moviesDataKey:'gerExp', header:'German Expressionism', moviesNav:'German Expressionist Films (1919 - 1931)'},

      ]
      // async function loadMovie(movieId, movement){
      //   //LOAD Movie Data From API by movieId
      //   const link = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US`;
      //   const payload = {
      //     link:link,
      //     toDo:'film-movements',
      //     filmMov:movement,
      //   }
      //   try{
      //     await store.dispatch('getFromAPI', payload);
      //   }catch(error){
      //     this.error = error.message || 'Something went wrong';
      //   }
      // }
      //Get Film filmMovements

      //Store German expressionist movies
      // function loadMovieTraditions(){
      //
      //   Object.entries(movieTraditions).forEach(
      //     ([key, movementMovieIds]) => {
      //       // console.log(key, movementMovieIds);
      //       movementMovieIds.forEach(movieId => {
      //         // console.log('movieid',movieId);
      //         loadMovie(movieId, key);
      //       });
      //
      //     }
      //   );
      // }
      //Load vuex
      const store = useStore();
      const filmMovements = computed(()=>{
        return store.getters.getFilmMovements;
      });
      //onBeforeMount
      // onBeforeMount(()=>{
      //   loadMovieTraditions();
      // });


      return{
        movements:filmMovements,
        movementsData:filmMovementsData,
      }
    }
  }
</script>
<style scoped>
  .container{
    padding: 0 1em;
    /* display: flex;
    flex-direction: column; */
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap:1em;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
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
    margin: 1em 0;
  }
  a:hover{
    opacity: 0.9;
  }
  .traditions{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:1em;
    /* justify-content: center; */
    align-items: center;
  }

</style>
