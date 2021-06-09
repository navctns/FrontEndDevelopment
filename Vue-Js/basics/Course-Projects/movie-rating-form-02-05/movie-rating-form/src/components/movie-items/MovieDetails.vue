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
        <h5>Director:{{credits.directors}}</h5>
        <h5>Writer:{{credits.writers}}</h5>
        <!-- <span class="writer">
          <h6>Writer</h6>
          <h5 v-for="wr in credits.writer" :key="wr.name">{{wr.name}}</h5>
        </span> -->
        <h4>Rating:{{movie.rating}}</h4>
      </div>
      <div>
        <h5>Overview</h5>
        <p>{{movie.overview}}</p>
      </div>
    </div>
    <div v-if="recommendedMovies.length > 0">
      <h3 style="text-align:center">Movies you may Like</h3>
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
    <div class="scroll-block">
      <app-button value="^" @click="scrollToTop"></app-button>
    </div>
</div>
</template>
<script>
  import MovieReview from './MovieReview.vue';
  import { computed, watch, toRefs, onBeforeMount } from 'vue';
  import { useStore } from 'vuex';
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
        type:String
      }

    },

    setup(props){
      const { movieId } = toRefs(props);//HERE
      const { title } = toRefs(props);

      const movieIdUpdate = watch(movieId, (newVal, oldVal)=>{
        console.log('movie ids', newVal, oldVal);
        loadMovie();
        loadMovieReviews();
        loadMovieCriticReviews();
        loadSimilarMovies();
        loadRecommendedMovies();
        loadMovieCredits();
        // setCreditsData();
      });

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

      async function loadSimilarMovies(){
        //Load similar movies
         const getLink = `https://api.themoviedb.org/3/movie/${movieId.value}/similar?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=1`;
         const payload = {
           link:getLink,
           toDo:'similar-movies',
         };
         try{
           await store.dispatch('getFromAPI', payload);
         }catch(error){
           this.error = error.message || 'Something went wrong';
         }
      }

      async function loadRecommendedMovies(){
        //Load similar movies

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
        // console.log('movie data',store.getters.getSelectedMovie);
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
        const credits = {
          directors:'',
          writers:'',
        };
        const allCredits = getCredits();
        let directors = null;
        let writers = null;
        if(allCredits){
          //if Credits get not null
          console.log('crews:',allCredits.crew);
          directors = allCredits.crew.filter(crew=>{
            return crew.job === 'Director'
          });
          writers = allCredits.crew.filter(crew=>{
            return crew.job === 'Screenplay' || crew.job === 'Writer';
          });
          console.log('writer',writers);
          let directorNames = '';
          let writerNames = '';
          const directorsLen = directors.length;
          const writersLen = writers.lengh;
          if(directorsLen > 0){
            //For Constructing Single and Multiple Directors
            directorNames += directors[0].name;
            let directorsLen = directors.length;
            if(directorsLen > 1){
              directors.slice(1,directors.length-1).forEach(director =>{
                directorNames += ', ' + director.name;
              });
            }
            console.log('directors', directors);
            // credits.director = director.name || '';
          }
          credits.directors = directorNames;

          if(writersLen > 0){
            //For Constructing singe or multiple writer names
            writerNames += writers[0].name;
            let writersLen = writers.length;
            console.log('writers len',writers.length,writersLen > 1);
            if(writersLen > 1){
              console.log('writers length > 1');writers.lengh > 1
              console.log('sliced writers', writers.slice(1,writers.length-1));
              writers.slice(1,writers.length-1).forEach(writer =>{
                writerNames += ', ' + writer.name;
              });
            }
            // credits.writer = writer || '';
          }
          credits.writers = writerNames;

          console.log('writers', writers);
        }
        return credits;
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
          rating:movieData.value.vote_average,
          vote_count:movieData.value.vote_count,
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
        loadSimilarMovies();
        loadRecommendedMovies();
        loadMovieCredits();
        // setCreditsData();
      });

      function scrollToTop(){
        window.scrollTo(0,0);
      }
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
        similarMovies,
        setLanguageStr,
        renderReleaseYear,
        recommendedMovies,
        credits:movieCredits,
        scrollToTop,
        // routeWatch
      }
    }
  }
</script>
<style scoped>
  .movie-details{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.5em;
    /* margin:1em; */
    /* color:#323232; */
    color:#fafafa;
    justify-content: center;
    /* place-items:center; */
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
    /* place-items:center; */
    padding:1em;

  }
  .similar-movies{
    display: flex;
    gap:1em;
    margin:1.5em 1em;
  }
  h3,a{
    /* color:#323232; */
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
  }
  .similar-movies li {
    display: flex;
    justify-content: center;
    width: 60%;
    height: auto;
  }
  .similar-movies li:last-child{
    display: none;
  }
}
</style>
