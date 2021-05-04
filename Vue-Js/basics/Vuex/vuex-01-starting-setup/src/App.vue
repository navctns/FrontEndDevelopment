<template>
  <base-container title="Vuex" v-if="isAuth">
    <!-- <h3>{{ $store.state.counter }}</h3> -->
    <!-- <h3>{{ counter }}</h3> -->
    <the-counter></the-counter>
    <favourite-value></favourite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';
// import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth,
  },
  computed:{
    counter(){
      return this.$store.state.counter * 2;
    },
    isAuth(){
      return this.$store.getters.isAuthenticated;
    },
    // ...mapGetters(['isAuthenticated','counter'])
  },
  methods:{
    addOne(){
      // this.$store.state.counter++;
      // this.$store.commit('increment');
      // this.$store.commit('increase',{value:10});
      //OR
      this.$store.commit({
        type:'numbers/increase',
        value:10,
      });
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
