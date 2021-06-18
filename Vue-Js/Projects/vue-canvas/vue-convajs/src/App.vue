<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <v-stage :config="configKonva">
    <v-layer>
      <v-circle :config="configCircle"></v-circle>
    </v-layer>
  </v-stage>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  data() {
     return {
       configKonva: {
         width: 200,
         height: 200
       },
       configCircle: {
         x: 100,
         y: 100,
         radius: 70,
         fill: "red",
         stroke: "black",
         strokeWidth: 4
       }
     };
   }
};
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
