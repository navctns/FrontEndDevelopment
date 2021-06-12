<template>
  <div>
    <app-modal-dialog v-if="loadingStatus.movies" @close="closeModal">
      <template #header>
        <h3 class="modal-header">Error Loading data</h3>
      </template>
      <template #default>
        <p>Something went wrong..Reload the page or try again later</p>
      </template>
    </app-modal-dialog>
      <div class="bgWall">
        <div>
          <movie-filter @filter-movies="setFilterParams" @search-movie="setFilterParams"></movie-filter>

          <ul v-if="getUpdatedMovies.length >0">
            <movie-card
              v-for="movie in getUpdatedMovies"
              :key="movie.id"
              :id="movie.id"
              :title="movie.title"
              :language="setLanguageStr(movie.original_language)"
              :overview="movie.overview"
              :poster-path="movie.poster_path"
              :release-year="renderReleaseYear(movie)"
            ></movie-card>
        </ul>
        <div class="no-results" v-else>
          <h4>No results found</h4>
        </div>
      </div>
      <div class="scroll-block">
        <i class="fas fa-arrow-circle-up fa-3x" @click="scrollToTop"></i>
      </div>
    </div>
  </div>

</template>
<script>
  import MovieCard from './MovieCard.vue';
  import MovieFilter from './MovieFilter.vue';

  export default{
    components:{
      MovieCard,
      MovieFilter,
    },
    data(){
      return{
        movies:[],
        genres:[],
        filterParams:null,
        langsLib:null,
        errorLoading:false,
        dataNotEmpty:true,
      }
    },
    // inject:['movies']
    methods:{
      renderReleaseYear(movie){
        if(movie.release_date){
          return movie.release_date.slice(0,4)
        }else{
          return '';
        }
      },
      getGenresItems(){
        this.genres = this.$store.getters.genres;
        console.log(this.genres);
      },
      async loadMovies(){
        //Load from API to Vuex state
        try{
          await this.$store.dispatch('setMovies');
        }catch(error){
          this.error = error.message || 'Something went wrong';
        }
      },
      setFilterParams(filterTerm, data){
        console.log('setFilterParams');
        //filterTerm (type of filtering(language,genre...))
        //keyRef - specific key(specific lang, of specific genre)/Data Objects
        this.filterParams ={
          filter:filterTerm,
          keyword:data,
        };
      },
      setLanguageStr(langCode){
        let langObj = null;
        let langStr = '';
        const langsLib = this.getLanguagesList();

        if(langsLib){
          langObj = langsLib.filter(lang => lang.iso_639_1 === langCode);
          if(langObj){
            langObj.forEach(lang=>{
              // return lang.english_name;
              langStr = lang.english_name;
            });
            return langStr;
          }
        }
        return '';
      },
      getLanguagesList(){
        return this.$store.getters.getLanguages;
      },
      scrollToTop(){
        window.scrollTo(0,0);
      },
      closeModal(){
        this.$store.commit('changeLoadingStatus', 'movies');
      }
    },
    computed:{
      getUpdatedMovies(){
        //Get from vuex and filter according to filters
        //filterParams contains the filtered movies data
        const movies = this.$store.getters.movies;
        if(this.filterParams){
          return this.filterParams.keyword;
        }
        return movies;
      },
      loadingStatus(){
        //Check for errors occured on fetching from api
        return this.$store.getters.getLoadingStatus;
      }

    },
    created(){
      //Load movies from API
      this.loadMovies();
      this.langsLib = this.getLanguagesList();
    }
  }
</script>
<style scoped>
ul {
  width: 90%;
  /* height:80%; */
  max-width: 1240px;
  margin: 1rem auto;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
}

  .bgWall{
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.8), rgba(195, 55, 100, 0.8)), url('https://source.unsplash.com/featured/?movies');
    background-size: cover;
     margin: 0;
     min-height:100vh;
     height: auto;
  }
  .bgWall .blackOverlay{
    position:absolute;
    /* top:0;
    left:0; */
    width:100%;
    min-height:100vh;
    background: rgba(0,0,0,0.7);
  }
  .scroll-block{
    display: flex;
    align-items:flex-end;
    justify-content: flex-end;
    padding:1em;
  }
  .fa-arrow-circle-up:hover,
  .fa-arrow-circle-up:focus{
    cursor: pointer;
  }
  .no-results{
    display: flex;
    justify-content: center;
    margin: 1em;
  }
  /* .modal-header{
    color:#323232;
  } */
@media(max-width:768px) {
  ul{
    grid-template-columns: 1fr;
    place-items:center;
    /* margin: auto; */
    margin: 1rem 0;
  }
  li{
    display: flex;
    justify-content: center;
  }

}
</style>
