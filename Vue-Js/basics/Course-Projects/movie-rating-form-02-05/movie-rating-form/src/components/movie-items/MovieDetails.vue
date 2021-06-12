<template>

  <div class="container">
    <app-modal-dialog v-if="loadingStatus.movieDetails" @close="closeModal">
      <template #header>
        <h3 class="modal-header">Error Loading data</h3>
      </template>
      <template #default>
        <p>Something went wrong..Reload the page or try again later</p>
      </template>
    </app-modal-dialog>
    <div class='movie-details'>
      <div>
        <img :src="posterUrl" alt=""/>
      </div>
      <div>
        <h3>{{movie.title}}({{releaseYear}})</h3>
        <p>{{spokenLanguages}}</p>
        <p>Duration:{{movie.runtime}}</p>
        <h5>Director:{{credits.directors}}</h5>
        <h5>Writer:{{credits.writers}}</h5>
        <h4>Rating:{{movie.rating}}</h4>
      </div>
      <div>
        <h5>Overview</h5>
        <p>{{movie.overview}}</p>
      </div>
    </div>
    <!-- RECOMMENDED MOVIES -->
    <div v-if="recommendedMovies.length > 0" class="suggestions-container">
      <h4 style="text-align:center">Movies you may Like</h4>
      <div class="similar-movies">
        <movie-card v-for="movie in recommendedMovies"
          :key="movie.id"
          :id="movie.id"
          :title="movie.title"
          :language="setLanguageStr(movie.original_language)"
          :overview="movie.overview"
          :poster-path="movie.poster_path"
          :release-year="renderReleaseYear(movie)"
          ></movie-card>
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
    <!-- SCROLL TO TOP NAVIGATION -->
    <div class="scroll-block">
      <i class="fas fa-arrow-circle-up fa-3x" @click="scrollToTop"></i>
    </div>
</div>
</template>
<script>
  import MovieReview from './MovieReview.vue';
  import { computed, watch, toRefs, onBeforeMount } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import MovieCard from './MovieCard.vue';
  // import { useRoute } from 'vue-router';

  export default{
    components:{
      MovieReview,
      MovieCard,
    },
    props:{
      movieId:{
        type:String,
      },
      title:{
        type:String,
      }

    },

    setup(props){
      const router = useRouter();
      const { movieId } = toRefs(props);//HERE
      const { title } = toRefs(props);

      const movieIdUpdate = watch(movieId, (newVal, oldVal)=>{
        console.log('movie ids', newVal, oldVal);
        loadMovie();
        loadMovieReviews();
        loadMovieCriticReviews();
        loadRecommendedMovies();
        loadMovieCredits();
        // setCreditsData();
      });

      const store = useStore();
      async function loadMovie(){
        //LOAD Movie Data From API
        const link = `https://api.themoviedb.org/3/movie/${movieId.value}?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US`;
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
        //LOAD Movie Critic Reviews
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

      // async function loadSimilarMovies(){
      //   //Load similar movies
      //    const getLink = `https://api.themoviedb.org/3/movie/${movieId.value}/similar?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=1`;
      //    const payload = {
      //      link:getLink,
      //      toDo:'similar-movies',
      //    };
      //    try{
      //      await store.dispatch('getFromAPI', payload);
      //    }catch(error){
      //      this.error = error.message || 'Something went wrong';
      //    }
      // }

      async function loadRecommendedMovies(){
        //Load Recommended movies

         const getLink = `https://api.themoviedb.org/3/movie/${movieId.value}/recommendations?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=1`;
         const payload = {
           link:getLink,
           toDo:'recomm-movies',
         };
         try{
           await store.dispatch('getFromAPI', payload);
         }catch(error){
           this.error = error.message || 'Something went wrong';
         }
      }

      async function loadMovieCredits(){
        //Load Movie credits from API
         const getLink = `https://api.themoviedb.org/3/movie/${movieId.value}/credits?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US`;
         const payload = {
           link:getLink,
           toDo:'movie-credits',
         };
         try{
           await store.dispatch('getFromAPI', payload);
         }catch(error){
           this.error = error.message || 'Something went wrong';
         }
      }

      function setLanguageStr(langCode){
        //Set language on movie card
        let langObj = null;
        let langStr = '';
        const langsLib = getLanguagesList();

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
      }
      function getLanguagesList(){
        return store.getters.getLanguages;
      }
      function renderReleaseYear(movie){
        //Set Release date on movie card
        if(movie.release_date){
          return movie.release_date.slice(0,4)
        }else{
          return '';
        }
      }
      const movieData = computed(()=>{
        return store.getters.getSelectedMovie || [];
      });
      function getCredits(){
        return store.getters.getMovieCredits;
      }
      const similarMovies = computed(()=>{
        return store.getters.getSimilarMovies || [];
      });
      const recommendedMovies = computed(()=>{
        return store.getters.getRecommendedMovies || [];
      });

      const movieCredits = computed(()=>{
        //Retrieve movie credits (Director & writer)
        const credits = {
          directors:'',
          writers:'',
        };
        const allCredits = getCredits();
        let directors = null;
        let writers = null;
        if(allCredits){
          //if Credits get not null
          directors = allCredits.crew.filter(crew=>{
            return crew.job === 'Director'
          });
          writers = allCredits.crew.filter(crew=>{
            return crew.job === 'Screenplay' || crew.job === 'Writer';
          });
          let directorNames = '';
          let writerNames = '';
          const directorsLen = directors.length;
          const writersLen = writers.length;
          if(directorsLen > 0){
            //For Constructing Single and Multiple Directors
            directorNames += directors[0].name;
            let directorsLen = directors.length;
            if(directorsLen > 1){
              directors.slice(1,directors.length-1).forEach(director =>{
                directorNames += ', ' + director.name;
              });
            }
            // credits.director = director.name || '';
          }
          credits.directors = directorNames;

          if(writersLen > 0){
            //For Constructing singe or multiple writer names
            writerNames += writers[0].name;
            let writersLen = writers.length;
            if(writersLen > 1){
              console.log('writers length > 1');writers.lengh > 1
              console.log('sliced writers', writers.slice(1,writers.length-1));
              writers.slice(1,writers.length-1).forEach(writer =>{
                writerNames += ', ' + writer.name;
              });
            }
          }
          credits.writers = writerNames;
        }
        return credits;
      });

      const posterUrl = computed(()=>{
        //Generate Movie poster url
        // console.log('poster path',movieData.value.poster_path)
        return 'https://image.tmdb.org/t/p/w185' + movieData.value.poster_path;
      });
      const releaseYear = computed(()=>{
        //Retrieve release year from movie release date
        if (movieData.value.release_date){
          return movieData.value.release_date.slice(0,4);
        }
        return '';
      });
      const spokenLanguages = computed(()=>{
        //Retrieve spoken languages from movie object
        let languages = '';
        if(movieData.value.spoken_languages){
          movieData.value.spoken_languages.forEach(lang =>{
            languages += lang.english_name + ',';
          });
        }
        return languages;
      });
      const generalInfo = computed(()=>{
        //Create Object consisting general info about movie
        const movieDataLen = movieData.value.lengh;
        if(movieDataLen === 0){
          return null;
        }else{
          return{
            title :movieData.value.title || '',
            runtime : movieData.value.runtime || '',
            overview : movieData.value.overview || '',
            popularity : movieData.value.popularity || '',
            rating:movieData.value.vote_average,
            vote_count:movieData.value.vote_count,
          }
        }

      });
      //GET MOVIE REVIEWS
      const movieReviews = computed(()=>{
        //GET Reviews Data
        return store.getters.getMovieReviews || [];
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
          return reviewItem;
        }
        return [];
      });
      onBeforeMount(()=>{
        loadMovie();
        loadMovieReviews();
        loadMovieCriticReviews();
        loadRecommendedMovies();
        loadMovieCredits();
      });

      const loadingStatus = computed(()=>{
        //Check for errors occured on fetching from api
        // console.log('loading-status',this.$store.getters.getLoadingStatus);
        return store.getters.getLoadingStatus;
      });
      function scrollToTop(){
        window.scrollTo(0,0);
      }
      function closeModal(){
        store.commit('changeLoadingStatus','movieDetails');
        router.push('/movies');
        // window.location.reload();
      }
      return{
        posterUrl,
        releaseYear,
        movie:generalInfo,
        spokenLanguages,
        movieIdUpdate,
        reviews:movieReviews,
        reviewVisibility,
        criticReviewVisibility,
        criticReviews,
        similarMovies,
        setLanguageStr,
        renderReleaseYear,
        recommendedMovies,
        credits:movieCredits,
        scrollToTop,
        loadingStatus,
        closeModal,
      }
    }
  }
</script>
<style scoped>
  .movie-details{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.5em;
    color:#fafafa;
    justify-content: center;
    text-align:left;
    padding:1em;

  }
  .movie-details img{
    width:60%;
    height:auto;
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
    padding:1em;

  }
  .similar-movies{
    display: flex;
    justify-content: center;
    gap:1em;
    margin:0 1em;
    width:40%;
  }
  .similar-movies li{
    width:50%;
  }
  .suggestions-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* place-items:center; */
  }
  h3,a{
    color:#fafafa;
  }
  .scroll-block{
    display: flex;
    align-items:flex-end;
    justify-content: flex-end;
    padding:1em;
  }
  img{
    width:auto;
    height: auto;
  }
  .fa-arrow-circle-up:hover,
  .fa-arrow-circle-up:focus{
    cursor: pointer;
  }

@media(max-width:768px) {
  .movie-details{
    grid-template-columns: 1fr;
    place-items:center;
  }
  .container{
    font-size: 0.9em;
    padding:0.5em;
  }
  .movie-details img{
    width: auto;
  }
  .movie-details div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:0;
    margin:0;
  }
  .similar-movies{
    display: grid;
    grid-template-columns: 1fr;
    place-items:center;
    width:90%;

  }
  .similar-movies li {
    display: flex;
    justify-content: center;
    width: 60%;
    height: auto;
  }
  /* .similar-movies li:last-child{
    display: none;
  } */
}
</style>
