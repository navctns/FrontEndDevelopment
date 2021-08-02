import { createApp } from 'vue'
import App from './App.vue'
import AppButton from './components/UI/AppButton.vue';
import AppCard from './components/UI/AppCard.vue';
import TheNavbar from './components/UI/TheNavbar.vue'
import router from './router.js';

const app = createApp(App)
app.component('app-button', AppButton);
app.component('app-card', AppCard);
app.component('the-navbar', TheNavbar);

app.use(router);
router.isReady().then(()=>{
  app.mount('#app');
})
