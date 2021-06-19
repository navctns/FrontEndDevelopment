<template>
  <!-- Navbar -->
  <router-view>
  </router-view>
  <!-- Footer -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ElAvatar from 'element-plus';
export default {
  name: 'App',
  components: {
    // HelloWorld,

  },
  setup(){
    const message = 'Load Items';
    return{
      message
    }
  }
}
</script>

<style>

body{
  margin:0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
