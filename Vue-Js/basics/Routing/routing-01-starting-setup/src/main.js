import { createApp } from 'vue';
import {createRouter,createWebHistory} from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

import App from './App.vue';

const app = createApp(App)

//ROUTER
//Team Members component
// const Members = {
//   props:['teamId'],
//   template:TeamMembers,
// }

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      redirect:'/teams'
    },
    {
      path:'/teams',
      meta:{
        needsAuth:true,
      },
      components:{
        default:TeamsList,
        footer:TeamsFooter
      },
      // alias:'/',//But it wont change the url
      children:[
        {
          path:'/teams/:teamId',
          component:TeamMembers,
          props:true,
          name:'team-members'
          // name:'membersList',
          // props:true,
        },
      ]
    },
    {
      path:'/users',
      components:{
        default:UsersList,
        footer:UsersFooter
      },
      beforeEnter(to,from,next){
        console.log('Router-config:Users beforeEnter');
        console.log(to, from);
        next();
      }

    },

    {
      //Catch All routes(Invalid routes) - Must come last
      path:'/:notFound(.*)',
      component:NotFound,
    }
  ],
  linkActiveClass:'active',
  scrollBehavior(to, from, savedPosition){
    // console.log(to,from,savedPosition);
    if(savedPosition){
      //on navigating back preserves the previos position
      return savedPosition;
    }
    return{left:0,top:0};
  },

});
router.beforeEach((to,from,next)=>{
  console.log('Global beforeEach');
  // console.log(to,from,next);
  // next(false);
  // if(to.name === 'team-members'){
  //   next();
  // }else{
  //   next({name:'team-members', params:{teamId:'t2'}})
  // }
  if(to.meta.needsAuth){
    console.log('Needs Auth!');
    next();
  }else{
    next();
  }
});

//After Each
router.afterEach((to,from) =>{
  //This method Cant deny a navigation
  //can send/store analytic data like
  //Log every navigation, Log when navigation changes
  //Can't set or change what user see
  //It is executed Last on the navigation action
  console.log('Global afterEach');
  console.log(to, from);
});
app.use(router);
app.mount('#app');
