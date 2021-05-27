<template>
  <div>
    <movie-filter @filter-movies="setFilterParams" @search-movie="setFilterParams"></movie-filter>

    <ul>
      <movie-card
        v-for="movie in getUpdatedMovies"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title"
        :language="languageStr(movie.original_language)"
        :overview="movie.overview"
        :poster-path="movie.poster_path"
      ></movie-card>

    </ul>
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
      }
    },
    // inject:['movies']
    methods:{
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
      setFilterParams(filterTerm, keyRef){
        console.log('setFilterParams');
        //filterTerm (type of filtering(language,genre...))
        //keyRef - specific key(specific lang, of specific genre)
        this.filterParams ={
          filter:filterTerm,
          keyword:keyRef,
        };
      },
      languageStr(lang){
        if(lang === 'en'){
          return 'English';
        }else if(lang === 'ko'){
          return 'Korean';
        }else if(lang === 'ja'){
          return 'Japanese';
        }else if(lang === 'hi'){
          return 'Hindi';
        }
      }
    },
    computed:{
      getUpdatedMovies(){
        //Get from vuex and filter according to filters
        const movies = this.$store.getters.movies;
        if(this.filterParams){
          if(this.filterParams.filter === 'genre'){
            console.log('filter by genre', this.filterParams);
            //add filter logic here
            // const filterKey = this.filterParams.keyword;
            // return movies.filter(movie => movie.genre_ids.includes(filterKey));
            return this.filterParams.keyword;
          }else if(this.filterParams.filter === 'lang'){
            // const filterKey = this.filterParams.keyword;
            // return movies.filter(movie => movie.original_language === filterKey);
            return this.filterParams.keyword;
          }else if(this.filterParams.filter === 'search'){
            console.log('search by key');
            // const filterKey = this.filterParams.keyword;
            // return movies.filter(movie => movie.title.toLowerCase().includes(filterKey.toLowerCase()));
            return this.filterParams.keyword;
          }
        }
        return movies;
      }
    },
    created(){
      //Load movies from API
      this.loadMovies();

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

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
}
  /* ul{
    display: flex;
    flex-basis: 30%;

  }
  ul > *{
    flex-basis: 30%;
    width:30%;
  } */
</style>
