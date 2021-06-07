
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
        mumble:[],indParallel:[],
      },
      languages:null,
      movementsData:movementsData,
    }

  },
  mutations:{
    addNewMovie(state,movieObj){
      console.log('add new movie');
      state.movies.unshift(movieObj);
    },
    deleteMovieFromList(state,id){
      console.log('delete from app');
      // this.movies = this.movies.filter(movie => movie.id !== id);
      const idx = state.movies.findIndex(movie => movie.id === id);
      state.movies.splice(idx,1);
      // console.log(state.movies);
    },
    sortMoviesByGenre(state, payload){
      // console.log(state.movies,state.movies[0].genre_ids,'movie-genre-eg');
      // console.log(payload);
      state.movies = state.movies.filter(movie => movie.genre_ids.includes(payload));
      // const sortedIndexes = state.movies.findIndex(movie => movie.genre_ids.includes(payload));
      // console.log('sorted movies', sortedIndexes);

      console.log(state.movies);
    },
    setSelectedMovie(state, payload){
      //Set movie selected by the user to show details
      state.selectedMovie = payload;
    },
    setReviews(state, payload){
      //Set Reviews for current movie
      console.log('audience-reviews',payload);
      state.currentMovieReviews = payload;
    },
    setCriticReviews(state, payload){
      //Set Reviews for current movie
      // state.currentMovieCriticReviews = payload;
      console.log('critic-reviews',payload);
      state.currentMovieCriticReviews = payload;

    },
    setLanguages(state, payload){
      state.languages = payload;
    },
    setFilmMovements(state, payload){
      // console.log('mutation', payload.key);
      state.filmMovements[payload.key].push(payload.data);
    },
    setSimilarMovies(state, payload){
      // const similarMovies = [];
      // console.log(payload);
      state.similarMovies = payload.slice(0,5);
      console.log('similar movies sliced', state.similarMovies);
    },
    setRecommendedMovies(state, payload){
      state.recommendedMovies = payload.slice(0,5);
    },
    setMovieCredits(state, payload){
      state.currentMovieCredits = payload;
    }

  },
  actions:{
    addMovie(context, payload){
      context.commit('addNewMovie', payload);
    },
    deleteMovie(context, payload){
      console.log('delete movie');
      context.commit('deleteMovieFromList', payload);
    },
    async setMovies(context){
      //TOP Rated MOVIES
      // const moviesResponse = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US');
      //NOW PLAYING
      // const moviesResponse = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=2');
      //POPULAR
      // const moviesResponse = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=2');
      //UPCOMING MOVIES
      const moviesResponse = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=2');
      const responseData = await moviesResponse.json();
      // console.log(responseData.results);
      // return state.movies;
      if(!moviesResponse.ok){
        console.log('Error while lading movies');
      }
      context.state.movies = responseData.results;
      // return responseData.results;
    },
    async fetchGenres(context){
      const genresRes = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US');
      const genresData = await genresRes.json();
      // console.log('genres data',genresData);
      // console.log('genres data',genresData.genres);
      if(!genresRes.ok){
        console.log('Error while fetching genres');
      }
      context.state.genres = genresData.genres;
    },
    async getMovieData(context, payload){
      // console.log('payload', payload, typeof payload);
      const movieResponse = await fetch(payload);
      const responseData = await movieResponse.json();
      console.log('movie details', responseData);
      context.commit('setSelectedMovie', responseData);
    },
    async getFromAPI(context, payload){
      const movieResponse = await fetch(payload.link);
      const responseData = await movieResponse.json();
      // console.log('Data Retrieved:', responseData);
      if(!movieResponse.ok){
        console.log('Something went wrong, on getting data');
      }
      console.log('res',payload.toDo);
      if(payload.toDo === 'reviews'){
        console.log('setReviews');
        await context.commit('setReviews',responseData.results);
      }else if(payload.toDo === 'langs'){
        await context.commit('setLanguages', responseData);
        console.log('langs fetched', responseData);
      }else if(payload.toDo === 'critic-reviews'){
        console.log('critic reviews loaded', responseData);
        await context.commit('setCriticReviews', responseData.results);
      }else if(payload.toDo === 'film-movements'){
        // console.log('film-movement-movie', responseData);
        const mutationData = {
          data:responseData,
          key:payload.filmMov
        }
        await context.commit('setFilmMovements', mutationData);
      }else if(payload.toDo === 'similar-movies'){
        console.log('similar movies', responseData);
        await context.commit('setSimilarMovies', responseData.results);
      }else if(payload.toDo === 'recomm-movies'){
        await context.commit('setRecommendedMovies', responseData.results);
      }else if(payload.toDo === 'movie-credits'){
        console.log('movie-credits', responseData);
        await context.commit('setMovieCredits', responseData);
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
    }
  }
});

export default store;
