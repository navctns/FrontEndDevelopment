
import { createStore } from 'vuex';
import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';

const store = createStore({
  modules:{
    prods:productsModule,
    cart:cartModule,
  },
  state(){
    return{
      isLoggedIn: false,

      // cart: { items: [], total: 0, qty: 0 },
    }

  },
  mutations:{

    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions:{
  },
  getters:{
    getAllProducts(state){
      return state.products;
    },
    getCart(state){
      return state.cart;
    },
    getAuth(state){
      return state.isLoggedIn;
    }
  }
});

export default store;
