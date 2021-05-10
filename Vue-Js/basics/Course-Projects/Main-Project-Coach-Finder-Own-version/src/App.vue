<template>
  <header>
    <app-card bgColor="green">
      <the-header></the-header>
    </app-card>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <app-card>
      <the-footer></the-footer>
    </app-card>
  </footer>
</template>
<script>
import TheHeader from './components/UI/TheHeader.vue';
import TheFooter from './components/UI/TheFooter.vue';
  export default{
    components:{
      TheHeader,
      TheFooter,
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

body{
  color:#323232;
  font-family: 'noto-sans-jp',sans-serif;
}
.container{
  display: flex;
  flex-direction: column;
  gap:1em;
}
</style>
