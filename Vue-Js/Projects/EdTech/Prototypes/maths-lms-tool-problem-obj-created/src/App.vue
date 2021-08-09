<template>
  <problem-page-vuex></problem-page-vuex>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ProblemPage from './pages/ProblemPage.vue';
import ProblemPageVuex from './pages/ProblemPageVuex.vue'
export default {
  components: {
    ProblemPageVuex
    // ProblemPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
