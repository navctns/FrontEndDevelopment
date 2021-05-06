import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import AppCard from './components/UI/AppCard.vue';
import AppSmallCard from './components/UI/AppSmallCard.vue';
import AppButton from './components/UI/AppButton.vue';

const app = createApp(App)
app.component('app-card', AppCard);
app.component('app-small-card', AppSmallCard);
app.component('app-button', AppButton);

app.use(router);
app.mount('#app');
