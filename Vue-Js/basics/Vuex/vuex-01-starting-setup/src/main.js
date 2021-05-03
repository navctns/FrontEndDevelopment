import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
const app = createApp(App);

//Vuex
const store = createStore({
  state(){
    return{
      counter:0,
    };
  },
  mutations:{
    increment(state){
      state.counter++;
    },
    increase(state, payload){
      state.counter = state.counter + payload.value;
    }
  }
});

app.use(store);

app.mount('#app');
