import { createApp } from 'vue'
// import App from './App.vue'
// import AppStripe from './App-stripe.vue';
import AppStripeProduct from './app-stripe-one.vue';
import router from './router.js';
// import AppStripeSession from './app-stripe-session.vue';

const app = createApp(AppStripeProduct)
app.use(router);
app.mount('#app')
