
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      redirect:'/coaches'
    },
    {
      path:'/coaches',
      component: HomePage,
    },
    {
      path:'/coaches/:id',
      component:null,
      children:[
        {
          path:'/contact',
          component:null,
        },
      ]
    },
    {
      path:'/register',
      component:null,
    },
    {
      path:'/request',
      component:null,
    },
    {
      path:'/:notFound(.*)',
      component:null,
    },
  ]
});

export default router;
