<template>
  <div>
    <h3>{{header}}</h3>
    <!-- <p v-for="movie in movies" :key="movie.id">{{movie.title}}</p> -->
    <!-- <p>{{moviesList}}</p> -->
    <ul>
      <!-- <li v-for="movie in moviesList" :key="movie.id">{{movie.title}}</li> -->
      <movie-card
        v-for="movie in moviesList"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title"
        :language="setLanguageStr(movie.original_language)"
        :overview="movie.overview"
        :poster-path="movie.poster_path"
        :release-year="renderReleaseYear(movie)"
      ></movie-card>
    </ul>
  </div>
</template>
<script>
  import MovieCard from '../components/movie-items/MovieCard.vue';

  export default{
    components:{
      MovieCard,
    },
    props:['movement', 'header'],
    data(){
      return{
        movies:[],
      }
    },
    computed:{
      moviesList(){
        return this.$store.getters['getSpecificFilmMovement'](this.movement);
      }
    },

    methods:{
      renderReleaseYear(movie){
        if(movie.release_date){
          return movie.release_date.slice(0,4)
        }else{
          return '';
        }
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
      }
    },
    beforeMounted(){
      console.log('film mov', this.movies);
      // this.movies = return this.$store.getters['getSpecificFilmMovement'](this.movement);
    }
  }
</script>
<style scoped>
  ul{
    width: 90%;
    /* height:80%; */
    max-width: 1240px;
    margin: 1rem auto;

    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;;
  }
  div{
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
</style>
