<template>

  <div class='movie-details'>
    <div>
      <img :src="posterUrl" alt=""/>
    </div>
    <div>
      <h3>{{movie.title}}({{releaseYear}})</h3>
      <p>{{spokenLanguages}}</p>
      <p>Duration:{{movie.runtime}}</p>
      <p>{{movie.overview}}</p>
      <h4>Rating:{{movie.popularity}}</h4>
    </div>
  </div>
</template>
<script>
  import { computed} from 'vue';
  import { useStore } from 'vuex';
  export default{

    props:{
      movieId:{
        type:String,
      },

    },
    setup(props){
      // const movieData = computed(() => {
      //   const movieResponse = fetch()
      // });
      const store = useStore();
      async function loadMovie(){
        try{
          await store.dispatch('getMovieById',`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US`);
        }catch(error){
          this.error = error.message || 'Something went wrong';
        }
      }
      loadMovie();
      const movieData = computed(()=>{
        return store.getters.getSelectedMovie || [];
      });
      const posterUrl = computed(()=>{
        // console.log('poster path',movieData.value.poster_path)
        return 'https://image.tmdb.org/t/p/w185' + movieData.value.poster_path;
      });
      const releaseYear = computed(()=>{
        if (movieData.value.release_date){
          return movieData.value.release_date.slice(0,4);
        }
        return '';
      });
      const spokenLanguages = computed(()=>{
        let languages = '';
        if(movieData.value.spoken_languages){
          movieData.value.spoken_languages.forEach(lang =>{
            languages += lang.english_name + ',';
          });
        }
        console.log('langs', languages);
        return languages;
      });
      const generalInfo = computed(()=>{
        return{
          title :movieData.value.title || '',
          runtime : movieData.value.runtime || '',
          overview : movieData.value.overview || '',
          popularity : movieData.value.popularity || '',
        }
      });

      return{
        // movie:movieData,
        posterUrl,
        releaseYear,
        movie:generalInfo,
        spokenLanguages,
      }
    }
  }
</script>
<style scoped>
  .movie-details{
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin:1em;
    color:#323232;
  }
</style>
