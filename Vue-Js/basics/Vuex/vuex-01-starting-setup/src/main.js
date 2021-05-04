import { createApp } from 'vue';

import App from './App.vue';
import store from './store/index.js';
const app = createApp(App);

//Vuex
//modules




app.use(store);

app.mount('#app');
