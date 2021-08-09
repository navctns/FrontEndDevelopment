import { createApp } from 'vue'
import App from './App.vue'
import VueKonva from 'vue3-konva'
import store from './store/index.js';
const app = createApp(App);
app.use(VueKonva);
app.use(store);
app.mount('#app');
