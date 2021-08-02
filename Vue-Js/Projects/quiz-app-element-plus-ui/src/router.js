import {createRouter, createWebHistory} from 'vue-router';
const TheHome = () => import('./pages/sample/TheHome.vue');
const TheAbout = () => import('./pages/sample/TheAbout.vue');
const LoginPage = () => import ('./pages/auth/LoginPage.vue');

const router = createRouter({
  history:createWebHistory(),
  routes:[
    { path:'/',
      component:TheHome,
      redirect:'/login'
    },
    {
      path:'/about',
      component:TheAbout,
    },
    {
      path:'/login',
      component:LoginPage,
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
