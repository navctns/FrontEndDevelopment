import { createApp } from 'vue';
//import Root App
import App from './App.vue';
//import vuex
import store from './store/index.js';
//import ROUTER
import router from './router.js';
//Import elementplusui
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
//Import Global components
import TheNavbar from './components/layout/TheNavbar.vue';
//Import Global components
import AppProjectCard from './components/UI/AppProjectCard.vue';


const app = createApp(App);
app.component('the-navbar', TheNavbar);
app.component('app-project-card', AppProjectCard);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app')
