<template>
  <div class="container">
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
    <div class="reviews" v-if="reviewVisibility">
      <h3>Reviews</h3>
      <movie-review v-for="review in reviews"
        :key="review.created_at"
        :content="review.content"
        :author="review.author"
      >
    </movie-review>
    </div>
</div>
</template>
<script>
  import MovieReview from './MovieReview.vue';
  import { computed, toRefs, watch} from 'vue';
  import { useStore } from 'vuex';
  export default{
    components:{
      MovieReview,
    },
    props:{
      movieId:{
        type:String,
      },

    },
    setup(props){
      const {movieId} = toRefs(props);
      const movieIdUpdate = watch(movieId, (newVal, oldVal)=>{
        console.log('movie ids', newVal, oldVal);
        loadMovie();
        loadMovieReviews();
      });
      // const movieData = computed(() => {
      //   const movieResponse = fetch()
      // });
      const store = useStore();
      async function loadMovie(){
        //LOAD Movie Data
        try{
          await store.dispatch('getMovieData',`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US`);
        }catch(error){
          this.error = error.message || 'Something went wrong';
        }
      }
      //LOAD MOVIE REVIEWS
      async function loadMovieReviews(){
        //LOAD Movie Reviews
        const getLink = `https://api.themoviedb.org/3/movie/${props.movieId}/reviews?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=1`;
        const payload ={
          link:getLink,
          toDo:'reviews'
        }
        try{
          await store.dispatch('getFromAPI', payload);
        }catch(error){
          this.error = error.message || 'Something went wrong';
        }
      }
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
      //GET MOVIE REVIEWS
      const movieReviews = computed(()=>{
        //GET Reviews Data
        const review = store.getters.getMovieReviews;
        console.log('review getted',review);
        return store.getters.getMovieReviews;
        // return store.getters.getMovieReviews.length >0?store.getters.getMovieReviews : false;
      });
      const reviewVisibility = computed(()=>{
        return movieReviews.value.length ===0?false:true;
      });

      return{
        // movie:movieData,
        posterUrl,
        releaseYear,
        movie:generalInfo,
        spokenLanguages,
        movieIdUpdate,
        reviews:movieReviews,
        reviewVisibility,
      }
    }
  }
</script>
<style scoped>
  .movie-details{
    display: grid;
    grid-template-columns: 1fr 3fr;
    /* margin:1em; */
    /* color:#323232; */
    color:#fafafa;
    justify-content: center;
    /* place-items:center; */
    text-align:left;
    padding:1em;

  }
  div.container{
    display:flex;
    flex-direction: column;
    min-height:100vh;
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.8), rgba(195, 55, 100, 0.8)), url('https://source.unsplash.com/featured/?movies');

  }
  .reviews{
    display: grid;
    /* place-items:center; */
    padding:1em;

  }
  h3{
    /* color:#323232; */
    color:#fafafa;
  }

@media(max-width:768px) {
  .movie-details{
    grid-template-columns: 1fr;
  }
}
</style>
