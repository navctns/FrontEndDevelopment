<template>
  <h2>Movie Details</h2>
  <h5>{{movieData}}</h5>
</template>
<script>
  import { computed} from 'vue';
  import { useStore } from 'vuex';
  export default{

    props:{
      movieId:{
        type:String,
        default:null,
      }
    },
    setup(props){
      // const movieData = computed(() => {
      //   const movieResponse = fetch()
      // });
      const store = useStore();
      store.dispatch('getMovieById',`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US`);
      const movieData = computed(()=>{
        return store.getters.getSelectedMovie;
      });
      return{
        movieData,
      }
    }
  }
</script>
