
import { createStore } from 'vuex';
import movementsData from './movementsData.js';
const store = createStore({
  state(){
    return{
        movies:[],
      genres:null,
      selectedMovie:null,
      similarMovies:null,
      recommendedMovies:null,
      currentMovieCredits:null,
      currentMovieReviews:[],
      currentMovieCriticReviews:[],
      filmMovements:{
        gerExp:[], freImp:[],sovMon:[],
        itlNeo:[],jpNew:[],brNew:[],
        freNew:[],hongNew:[],dogme95:[],
        docFilmMov:[],poeticReal:[],polSch:[],
        freeCinema:[],cinNovo:[],czechNew:[],
        movieBrats:[],laRebel:[],
        newGer:[],ausNew:[],
        duLook:[],newQueer:[],
        mumble:[],indParallel:[],dirCinema:[],
      },
      languages:null,
      movementsData:movementsData,
      popularMovies:null,
      nowshowingMovies:null,
      upcomingMovies:null,
      errorLoading:{
        movies:false,
        movieDetails:false,
      },
    }

  },
  mutations:{

    sortMoviesByGenre(state, payload){
      state.movies = state.movies.filter(movie => movie.genre_ids.includes(payload));
    },
    setSelectedMovie(state, payload){
      //Set movie selected by the user to show details
      state.selectedMovie = payload;
    },
    setReviews(state, payload){
      //Set Reviews for current movie
      state.currentMovieReviews = payload;
    },
    setCriticReviews(state, payload){
      //Set Critics Reviews for current movie
      state.currentMovieCriticReviews = payload;
    },
    setLanguages(state, payload){
      //Set languages
      state.languages = payload;
    },
    setFilmMovements(state, payload){
      //Set Film movements
      state.filmMovements[payload.key].push(payload.data);
    },
    setSimilarMovies(state, payload){
      //Set Similar movies of a movie and slice to 5Nos
      state.similarMovies = payload.slice(0,5);
    },
    setRecommendedMovies(state, payload){
      //Set Recommended movies after slicing
      if(window.innerWidth >768){
        state.recommendedMovies = payload.slice(0,5);
      }else{
        state.recommendedMovies = payload.slice(0,4);
      }
    },
    setMovieCredits(state, payload){
      //Set Movie credits data
      state.currentMovieCredits = payload;
    },
    setPopularMovies(state, payload){
      //Set Popular movies
      state.popularMovies = payload;
    },
    setNowshowingMovies(state, payload){
      state.nowshowingMovies = payload;
    },
    setUpcomingMovies(state, payload){
      state.upcomingMovies = payload;
    },
    changeLoadingStatus(state,type){
      state.errorLoading[type] = false;
    }

  },
  actions:{

    async setMovies(context){
      context.state.errorLoading.movies = false;
      //TOP Rated MOVIES
      // const moviesResponse = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US');
      //NOW PLAYING
      // const moviesResponse = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=2');
      //POPULAR
      // const moviesResponse = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=2');
      //UPCOMING MOVIES
      const moviesResponse = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=2');
      const responseData = await moviesResponse.json();

      if(!moviesResponse.ok){
        console.log('Error while lading movies');
        context.state.errorLoading.movies = true;
      }
      context.state.movies = responseData.results;
      // return responseData.results;
    },
    async fetchGenres(context){
      const genresRes = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US');
      const genresData = await genresRes.json();

      context.state.genres = genresData.genres;
    },
    async getMovieData(context, payload){
      context.state.errorLoading.movieDetails = false;
      // console.log('payload', payload, typeof payload);
      const movieResponse = await fetch(payload);
      if(!movieResponse.ok){
        console.log('Something went wrong, on getting data');
        context.state.errorLoading.movieDetails = true;
      }
      const responseData = await movieResponse.json();
      context.commit('setSelectedMovie', responseData);
    },
    async getFromAPI(context, payload){
      context.state.errorLoading.movies = false;
      context.state.errorLoading.movieDetails = false;
      const movieResponse = await fetch(payload.link);
      const responseData = await movieResponse.json();
      // console.log('Data Retrieved:', responseData);
      if(!movieResponse.ok){
        console.log('Something went wrong, on getting data');
        if(payload.toDo === 'reviews' || payload.toDo === 'critic-reviews' ||
            payload.toDo === 'recomm-movies' || payload.toDo === 'movie-credits' ){
          context.state.errorLoading.movieDetails = true;
        }else if(payload.toDo === 'popular-movies' || payload.toDo === 'now-showing' ||
          payload.toDo === 'upcoming'){
            context.state.errorLoading.movies = true;
          }
      }
      if(payload.toDo === 'reviews'){
        await context.commit('setReviews',responseData.results);
      }else if(payload.toDo === 'langs'){
        await context.commit('setLanguages', responseData);
      }else if(payload.toDo === 'critic-reviews'){
        await context.commit('setCriticReviews', responseData.results);
      }else if(payload.toDo === 'film-movements'){
        // console.log('film-movement-movie', responseData);
        const mutationData = {
          data:responseData,
          key:payload.filmMov
        }
        await context.commit('setFilmMovements', mutationData);
      }else if(payload.toDo === 'similar-movies'){
        await context.commit('setSimilarMovies', responseData.results);
      }else if(payload.toDo === 'recomm-movies'){
        await context.commit('setRecommendedMovies', responseData.results);
      }else if(payload.toDo === 'movie-credits'){
        await context.commit('setMovieCredits', responseData);
      }else if(payload.toDo === 'popular-movies'){
        await context.commit('setPopularMovies', responseData.results);

      }else if(payload.toDo === 'now-showing'){
        let response = await fetch(payload.link);
        let dataFetched = await response.json();
        await context.commit('setNowshowingMovies', dataFetched.results);
      }else if(payload.toDo === 'upcoming'){
        await context.commit('setUpcomingMovies', responseData.results);
      }
    },
  },
  getters:{
    movies(state){
      return state.movies;
    },
    genres(state){
      return state.genres;
    },
    getSelectedMovie(state){
      return state.selectedMovie;
    },
    getMovieReviews(state){
      return state.currentMovieReviews;
    },
    getMovieCriticReviews(state){
      return state.currentMovieCriticReviews;
    },
    getLanguages(state){
      return state.languages;
    },
    getFilmMovements(state){
      return state.filmMovements;
    },
    getSpecificFilmMovement(state){
      return function(key){
        return state.filmMovements[key];
      }
    },
    getMovementContents(state){
      return function(key){
        return state.movementsData[key];
      }
    },
    getSimilarMovies(state){
      return state.similarMovies;
    },
    getRecommendedMovies(state){
      return state.recommendedMovies;
    },
    getMovieCredits(state){
      return state.currentMovieCredits;
    },
    getPopularMovies(state){
      return state.popularMovies;
    },
    getNowshowingMovies(state){
      return state.nowshowingMovies;
    },
    getUpcomingMovies(state){
      return state.upcomingMovies;
    },
    getLoadingStatus(state){
      return state.errorLoading;
    },
    loadingMovieDetailsStatus(state){
      return state.errorLoading.movieDetails;
    }
  }
});

export default store;
