
import { createStore } from 'vuex';

const store = createStore({
  state(){
    return{
        movies:[{
          id:'snow-piercer',
          title:'Snowpiercer',
          genre:'Action/Sci-fi',
          director:'Bong Joon-ho',
          writer:'Bong Joon-ho, Kelly Masterson',
          imgUrl:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPOHIxYdTXDpbFEWC-cv-tAQ98ELcVPMGVFy0pgFoI5s7UiDNU',
          synopsis:''
        },
        {
          id:'host',
          title:'The Host',
          genre:'Horror/Action',
          director:'Bong Joon-ho',
          writer:'Bong Joon-ho',
          imgUrl:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQI9-kW4DCOtKg9c5UlYw1RgDPv5v508ysKahIbG6u_hvTa2TQH',
          synopsis:'An unidentified monster appears from the Han River in Seoul, kills hundreds and also carries off Hyun-seo. When her family learns that she is being held captive, they resolve to save her.',
        },

      ],
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
      console.log(state.movies);
    }
  },
  actions:{
    addMovie(context, payload){
      context.commit('addNewMovie', payload);
    },
    deleteMovie(context, payload){
      console.log('delete movie');
      context.commit('deleteMovieFromList', payload);
    }
  },
  getters:{
    movies(state){
      return state.movies;
    }
  }
});

export default store;
