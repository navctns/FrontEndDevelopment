import {createRouter, createWebHistory} from 'vue-router';
import TheMovies from './pages/TheMovies.vue';
import AdminPanel from './pages/AdminPanel.vue';
import MovieForm from './components/movie-items/MovieForm.vue';
import StoredMovies from './components/movie-items/StoredMovies.vue';
import MovieDetails from './components/movie-items/MovieDetails.vue';
import AboutPage from './pages/AboutPage.vue';
import HomePage from './pages/HomePage.vue';
import FilmAppreciation from './pages/FilmAppreciation.vue';
import MovementMovies from './pages/FilmMovementMovies.vue';
import FilmMovement from './pages/FilmMovement.vue';

const router = createRouter({
  history:createWebHistory(),
  routes:[
    { path:'/',
      components:{
          showcase:HomePage
        }
    },
    { path:'/movies', component:TheMovies},
    { path:'/:movieId/:title', component:MovieDetails, props:true, name:"movie-details"},
    { path:'/filmAppreciation', component:FilmAppreciation,
      children:[
        {path:'/filmAppreciation/:moviesDataKey', name:'film_movement', props:true, component:FilmMovement},
      ]
    },
    { path:'/filmAppreciation/film_movement/:movement', name:"film_movement_movies",props:true, component:MovementMovies},
    // { path:'/filmAppreciation/film_movement/:movement', name:"french_impressionist",props:true, component:FilmMovement},

    { path:'/panel', component: AdminPanel, name:'main-panel', redirect:'/panel/addMovie',
      children:[
        // {path:'/panel/:section', name:"add-movie", component:MovieForm}
        {path:'/panel/addMovie', name:"add-movie", component:MovieForm},
        {path:'/panel/storedMovies', name:"stored-movies", component:StoredMovies},
      ]
    },
    { path:'/about', component:AboutPage, name:"about"},

  ],
  scrollBehavior(to,from,savedPosition){
    // console.log('scroll-beh',to, from, savedPosition);
    if(savedPosition){
      return savedPosition;
    }
    return { left:0, top:0 };
  }
});

export default router
