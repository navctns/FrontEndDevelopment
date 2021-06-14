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
          main:HomePage
        }
    },
    { path:'/movies',
      components:{
        main:TheMovies
      }
    },
    { path:'/:movieId/:title', props:true, name:"movie-details",
      components:{
        main:MovieDetails,
      }
    },
    { path:'/filmAppreciation', redirect:"/filmAppreciation/gerExp",
      components:{
        main:FilmAppreciation,
      },
      children:[
        {path:'/filmAppreciation/:moviesDataKey', name:'film_movement', props:true,
          component:FilmMovement
        },
      ]
    },
    { path:'/filmAppreciation/film_movement/:movement', name:"film_movement_movies",props:true,
      components:{
        main:MovementMovies
      }
    },
    { path:'/about',  name:"about",
      components:{
        main:AboutPage
      },
    },

  ],
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    return { left:0, top:0 };
  }
});

export default router
