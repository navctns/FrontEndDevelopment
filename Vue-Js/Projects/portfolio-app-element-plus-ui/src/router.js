import {createRouter, createWebHistory} from 'vue-router';
// const TheHome = () => import('./pages/sample/TheHome.vue');
const TheAbout = () => import('./pages/sample/TheAbout.vue');
const HomePage = () => import('./pages/HomePage.vue');

const router = createRouter({
  history:createWebHistory(),
  routes:[
    { path:'/',
      component:HomePage,
    },
    {
      path:'/about',
      component:TheAbout,
    }

  ],
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    return { left:0, top:0 };
  }
});

export default router
