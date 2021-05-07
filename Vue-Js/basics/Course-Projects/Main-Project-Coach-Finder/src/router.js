
import { createRouter, createWebHistory } from 'vue-router';
import CoachesHome from './pages/TheCoachesHome.vue';
import TheRequests from './pages/TheRequests.vue';
import CoachInfo from './pages/CoachInfo.vue';

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      redirect:'/coaches'
    },
    {
      path:'/coaches',
      component: CoachesHome,
      name:'coaches',
    },
    {
      path:'/coaches/:coachId',
      props:true,
      name:'coach-info',
      component:CoachInfo,
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
      component:TheRequests,
      name:'requests'
    },
    {
      path:'/:notFound(.*)',
      component:null,
    },
  ]
});

export default router;
