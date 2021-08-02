
import { createWebHistory, createRouter } from "vue-router";
import SuccessPage from "./components/SuccessPage.vue";
import CancelPage from "./components/CancelPage.vue";
// import CheckoutPage from "./pages/CheckoutPage.vue";
import SubscriptionCheckout from './pages/SubscriptionCheckout.vue';
const routes = [
  {
    path:"/",
    name:'checkout',
    // component:CheckoutPage
    component:SubscriptionCheckout
  },

  {
    path: "/success",
    name: "success",
    component: SuccessPage,
  },
  {
    path: "/cancel",
    name: "cancel",
    component: CancelPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
