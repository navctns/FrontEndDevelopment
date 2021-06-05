
import { createStore } from 'vuex';

const store = createStore({
  state(){
    return{
        movies:[],
      genres:null,
      selectedMovie:null,
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
      movementsData:{
        gerExp:{
          path:'german_expressionism', moviesDataKey:'gerExp', header:'German Expressionism', moviesNav:'German Expressionist Films (1919 - 1931)'
        },
        freImp:{
          path:'french_impressionist_cinema ', moviesDataKey:'freImp', header:'French Impressionist Cinema', moviesNav:'French Impressionist Films (1918 - 1929)'
        },
        sovMon:{
          path:'Soviet_Montage', moviesDataKey:'sovMon', header:'Soviet Montage', moviesNav:'Soviet Montage Films (1924 - 1933)'
        },
        itlNeo:{
          path:'Italian_Neorealism', moviesDataKey:'itlNeo', header:'Italian Neorealism', moviesNav:'Italian Neorealist Films (1943 - 1954)'
        },
        jpNew:{
          path:'Japanese_New_Wave', moviesDataKey:'jpNew', header:'Japanese New Wave', moviesNav:'Japanese New Wave Films (1956 - 1976)'
        },
        brNew:{
          path:'British_New_Wave', moviesDataKey:'brNew', header:'British New Wave', moviesNav:'British New Wave Films (1959 - 1969)'
        },
        freNew:{
          path:'French_New_Wave', moviesDataKey:'freNew', header:'French New Wave', moviesNav:'French New Wave Films (1958 - 1968)'
        },
        hongNew:{
          path:'Hong_Kong_New_Wave', moviesDataKey:'hongNew', header:'Hong Kong New Wave', moviesNav:'Hong Kong New Wave Films: The First Wave (1979 - 1989)'
        },
        dogme95:{
          path:'Dogme_95', moviesDataKey:'dogme95', header:'Dogme 95 ', moviesNav:'Dogme95 Films: A Complete List (1995 - 2004)'
        },
        docFilmMov:{
          path:'Documentary_Film_Movement', moviesDataKey:'docFilmMov', header:'Documentary Film Movement', moviesNav:'Documentary Film Movement Films(1929-1950)'
        },
        polSch:{
          path:'The_Polish_School', moviesDataKey:'polSch', header:'The Polish School', moviesNav:'The Polish School Movies(1955-1963)'
        },
        freeCinema:{
          path:'Free_Cinema', moviesDataKey:'freeCinema', header:'Free Cinema', moviesNav:'Films in Free Cinema(1956-1959)'
        },
        cinNovo:{
          path:'Cinema_Novo', moviesDataKey:'cinNovo', header:'Cinema Novo Movies', moviesNav:'Cinema Novo Movies(1960-1972)'
        },
        czechNew:{
          path:'Czech_New_Wave', moviesDataKey:'czechNew', header:'Czech New Wave Cinemas', moviesNav:'Czech New Wave Cinemas(1962-1968)'
        },
        movieBrats:{
          path:'The_Movie_Brats', moviesDataKey:'movieBrats', header:'The Movie Brats', moviesNav:'The Movie Brats Movies(Late 1960s – 1980s)'
        },
        laRebel:{
          path:'L_A_Rebellion', moviesDataKey:'laRebel', header:'L.A. Rebellion', moviesNav:'L.A. Rebellion Movies(1967-1991)'
        },
        newGer:{
          path:'New_German_Cinema', moviesDataKey:'newGer', header:'New German Cinema(1968-1982)', moviesNav:'New German Cinema(1968-1982)'
        },
        ausNew:{
          path:'Australian_New_Wave', moviesDataKey:'ausNew', header:'Australian New Wave', moviesNav:'Movies in the Australian New Wave(1975-1985)'
        },
        duLook:{
          path:'Cinéma_du_look', moviesDataKey:'duLook', header:'Cinéma du look', moviesNav:'Movies in Cinéma du look(1980-1991)'
        },
        newQueer:{
          path:'New Queer Cinema', moviesDataKey:'newQueer', header:'New Queer Cinema', moviesNav:'Movies in New Queer Cinema(1990-1995)'
        },
        mumble:{
          path:'Mumblecore', moviesDataKey:'mumble', header:'Mumblecore', moviesNav:'Movies in Mumblecore (2002-)'
        },
        indParallel:{
          path:'Indian_Parallel_Cinema', moviesDataKey:'indParallel', header:'Indian Parallel Cinema', moviesNav:'Movies in Indian Parallel Cinema (1952–1992)'
        },

      }
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
      // console.log('movie details', responseData);
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
    }
  }
});

export default store;
