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
    <!-- CRITIC REVIEWS -->
    <div class="reviews" v-if="criticReviewVisibility">
      <h3>Critic Reviews</h3>
      <a v-for="review in criticReviews"
        :key="review.headline"
        :href="review.link.url"
        target="blank"
      >{{review.headline}}</a>
    </div>
    <!-- AUDIENCE REVIEWS -->
    <div class="reviews" v-if="reviewVisibility">
      <h3>Audience Reviews</h3>
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
  import { computed, watch, toRefs, onBeforeMount } from 'vue';
  import { useStore } from 'vuex';
  // import { useRoute } from 'vue-router';

  export default{
    components:{
      MovieReview,
    },
    props:{
      movieId:{
        type:String,
      },
      title:{
        type:String
      }

    },

    setup(props){
      const { movieId } = toRefs(props);//HERE
      const { title } = toRefs(props);
      // const route = useRoute();

      // const movieId = computed(()=>{
      //   console.log('route movie id', route.params.movieId, typeof route.params.movieId);
      //   return parseInt(route.params.movieId);
      // });

      const movieIdUpdate = watch(movieId, (newVal, oldVal)=>{
        console.log('movie ids', newVal, oldVal);
        loadMovie();
        loadMovieReviews();
        loadMovieCriticReviews();
      });
      // const movieData = computed(() => {
      //   const movieResponse = fetch()
      // });
      const store = useStore();
      async function loadMovie(){
        //LOAD Movie Data From API
        // console.log('loadMovie movieId',movieId.value)
        const link = `https://api.themoviedb.org/3/movie/${movieId.value}?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US`;
        // console.log('movie -load link ', link);
        try{
          await store.dispatch('getMovieData', link);
        }catch(error){
          this.error = error.message || 'Something went wrong';
        }
      }
      //LOAD MOVIE REVIEWS
      async function loadMovieReviews(){
        //LOAD Movie Reviews
        const getLink = `https://api.themoviedb.org/3/movie/${movieId.value}/reviews?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=1`;
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
      async function loadMovieCriticReviews(){
        //LOAD Movie Reviews
        // console.log('movie name on crtic reviews', title.value)
        const getLink = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${title.value}&api-key=YPu7L6T88FOlp3EHDmahbAmoB457H0hL`;
        const payload ={
          link:getLink,
          toDo:'critic-reviews'
        }
        try{
          await store.dispatch('getFromAPI', payload);
        }catch(error){
          this.error = error.message || 'Something went wrong';
        }
      }
      const movieData = computed(()=>{
        // console.log('movie data',store.getters.getSelectedMovie);
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
        // const review = store.getters.getMovieReviews;
        // console.log('review getted',review);
        return store.getters.getMovieReviews || [];
        // return store.getters.getMovieReviews.length >0?store.getters.getMovieReviews : false;
      });
      const reviewVisibility = computed(()=>{
        //Audience review visibility
        return movieReviews.value.length ===0?false:true;
      });
      const criticReviewVisibility = computed(()=>{
        //Critic review visibility
        return criticReviews.value.length ===0?false:true;
      });

      const criticReviews = computed(()=>{
        //GET CRITIC REVIEWS FROM API
        // console.log('load critic reviews');
        const criticReviews = store.getters.getMovieCriticReviews;
        //Filter Review accorting to title
        if(criticReviews){
          const reviewItem = criticReviews.filter(review => review.headline.includes(title.value));
          // console.log('filtered  review item',reviewItem);
          return reviewItem
        }
        return [];
        // return '';
      });
      onBeforeMount(()=>{
        console.log('onBeforeMount',props.movieId);
        // const route = useRoute();
        loadMovie();
        loadMovieReviews();
        loadMovieCriticReviews();
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
        criticReviewVisibility,
        criticReviews,
        // routeWatch
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
    width:100%;
    background: -webkit-linear-gradient(rgba(0, 0, 0, 0.8), rgba(195, 55, 100, 0.8)), url('https://source.unsplash.com/featured/?movies');

  }
  .reviews{
    display: grid;
    /* place-items:center; */
    padding:1em;

  }
  h3,a{
    /* color:#323232; */
    color:#fafafa;
  }

@media(max-width:768px) {
  .movie-details{
    grid-template-columns: 1fr;
  }
}
</style>
