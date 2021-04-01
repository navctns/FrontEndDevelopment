
import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import writeReview from "@/views/writeReview.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/writeReview",
    name: "writeReview",
    component: writeReview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


// import Vue from 'vue';
// import Router from 'vue-router';
// import Home from './views/Home.vue';
// import About from './views/About.vue';

// Vue.use(Router);

// const routes= [
//         {
//           path:'/',
//           name:'home',
//           component:Home
//         },
//         {
//           path:'/about',
//           name:'about',
//           component:About
//         }
//       ];

// const router = new Router({
//   mode:'history',
//   base:process.env.BASE_URL,
//   routes
// });

// export default router;

// // export default new Router({

// //   routes:[
// //     {
// //       path:'/',
// //       name:'home',
// //       component:Home
// //     },
// //     {
// //       path:'/about',
// //       name:'about',
// //       component:About
// //     }
// //   ]
// // })
