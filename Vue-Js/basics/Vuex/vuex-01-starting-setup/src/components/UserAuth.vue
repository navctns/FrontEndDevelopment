<template>
  <button @click="login" v-if="!isAuthenticated">Login</button>
  <button @click="logout" v-if="isAuthenticated">Logout</button>
  <!-- <p>{{isTestAuth}}</p> -->
</template>
<script>
// import { mapGetters } from 'vuex';

  export default{
    computed:{
        // ...mapGetters(['isAuthenticated'])
        // isTestAuth(){
        //   return this.$store.getters.isTestAuth;
        // },
        isAuthenticated(){
          return this.$store.getters.isAuthenticated;
        }
    },
    methods:{
      login(){
        // this.$store.commit('login');
        this.$store.dispatch('login');
      },
      logout(){
        // this.$store.commit('logout');
        this.$store.dispatch('logout');
      }
    }
  }
</script>
<style scoped>
  button{
    padding:1em;
    border:1px solid #87a7b3;
    border-radius: 0.5em;
    background-color: #34656d;
    color:#f4eee8;
    min-width: 8rem;
    /* display: block; */
  }
</style>
