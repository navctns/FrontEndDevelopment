import {createRouter, createWebHistory} from 'vue-router';

const TheMovies = () => import('./pages/TheMovies.vue');
const MovieDetails = () => import('./components/movie-items/MovieDetails.vue');
const AboutPage = () => import('./pages/AboutPage.vue');
const HomePage = () => import ('./pages/HomePage.vue');
const FilmAppreciation = () => import('./pages/FilmAppreciation.vue');
const MovementMovies = () => import('./pages/FilmMovementMovies.vue');
const FilmMovement = () => import('./pages/FilmMovement.vue');

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
    { path:'/filmAppreciation', component:FilmAppreciation,redirect:'/filmAppreciation/gerExp',
      children:[
        {path:'/filmAppreciation/:moviesDataKey', name:'film_movement', props:true, component:FilmMovement},
      ]
    },
    { path:'/filmAppreciation/film_movement/:movement', name:"film_movement_movies",props:true, component:MovementMovies},
    { path:'/about', component:AboutPage, name:"about"},

  ],
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    return { left:0, top:0 };
  }
});

export default router
