import { createApp } from 'vue'
import App from './App.vue'
import AppButton from './components/UI/AppButton.vue';
import AppCard from './components/UI/AppCard.vue';
import TheNavbar from './components/UI/TheNavbar.vue';
import AppModalDialog from './components/UI/AppModalDialog.vue';
import AppSmallButton from './components/UI/AppSmallButton.vue';
import router from './router.js';
import store from './store/index.js';

const app = createApp(App)
app.component('app-button', AppButton);
app.component('app-card', AppCard);
app.component('the-navbar', TheNavbar);
app.component('app-modal-dialog', AppModalDialog);
app.component('app-small-button', AppSmallButton);

app.use(router);
app.use(store);
router.isReady().then(()=>{
  app.mount('#app');
})
