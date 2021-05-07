import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import AppCard from './components/UI/AppCard.vue';
import AppSmallCard from './components/UI/AppSmallCard.vue';
import AppButton from './components/UI/AppButton.vue';
import AppIconButton from './components/UI/AppIconButton.vue';
import store from './store/index.js';

const app = createApp(App)
app.component('app-card', AppCard);
app.component('app-small-card', AppSmallCard);
app.component('app-button', AppButton);
app.component('icon-button', AppIconButton);

app.use(router);
app.use(store);

app.mount('#app');
