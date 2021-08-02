import { createApp } from 'vue'
import App from './App.vue'
import VueKonva from 'vue3-konva';
import AppShape from './components/elements/AppShape.vue';

const app = createApp(App)
app.component('app-shape', AppShape);
app.use(VueKonva);
app.mount('#app')
