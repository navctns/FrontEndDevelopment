<template>
  <el-container>
    <el-header>
      <the-navbar>
      </the-navbar>
    </el-header>
    <router-view>
    </router-view>
    <el-footer><the-footer></the-footer></el-footer>
  </el-container>

  <!-- Footer -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ElAvatar from 'element-plus';
import TheFooter from './components/layout/TheFooter.vue';
export default {
  name: 'App',
  components: {
    TheFooter,
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

body{
  font-family: 'Roboto',sans-serif;
  margin:0;
  line-height: 1.4em;
  font-size: 18px;
  letter-spacing: 1px; 
  /* background: #ddffbc; */
  background: #f7f7f7;

}
.fab{
  cursor: pointer;
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
