
import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import NotFound from './pages/NotFound.vue';
// import CoachContactForm from './pages/CoachContactForm.vue';
import UserAuth from './pages/auth/UserAuth.vue';

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      redirect:'/coaches'
    },
    {
      path:'/coaches',
      component: CoachesList,
      name:'coaches',
    },
    {
      path:'/coaches/:id',
      props:true,
      name:'coach-info',
      component:CoachDetail,
      children:[
        {
          path:'/coaches/:id/contact',
          name:'contact',
          component:ContactCoach,
        },
      ]
    },
    // {
    //   path:'/contact',
    //   name:'contact',
    //   component:CoachContactForm,
    // },
    {
      path:'/register',
      component:CoachRegistration,
    },
    {
      path:'/requests',
      component:RequestsRecieved,
      name:'requests'
    },
    {
      path:'/auth',
      component:UserAuth,
    },
    {
      path:'/:notFound(.*)',
      component:NotFound,
    },
  ]
});

export default router;
