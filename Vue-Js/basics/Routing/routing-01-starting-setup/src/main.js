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
  console.log(to,from,next);
  // next(false);
  // if(to.name === 'team-members'){
  //   next();
  // }else{
  //   next({name:'team-members', params:{teamId:'t2'}})
  // }
  next();
})
app.use(router);
app.mount('#app');
