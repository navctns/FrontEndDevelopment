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
//Tag component
import AppTag from './components/UI/AppTag.vue';
import AppCustomTag from './components/UI/AppCustomTag.vue';

//Font awesome fb
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//Add to font awesome library
library.add(faUserSecret,fas,fab);
// library.add(fab);

const app = createApp(App);
app.component('the-navbar', TheNavbar);
app.component('app-project-card', AppProjectCard);
app.component('app-tag', AppTag);
app.component('app-custom-tag', AppCustomTag);

//font awesome component
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app')
