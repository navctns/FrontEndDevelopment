import { createApp } from 'vue'
import App from './App.vue'
import VueKonva from 'vue3-konva';
import AppCircle from './components/AppCircle.vue';

const app = createApp(App)
app.component('app-circle', AppCircle);
app.use(VueKonva);
app.mount('#app')
