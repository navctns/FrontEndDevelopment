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
body{
  color:#323232;
}
.container{
  display: flex;
  flex-direction: column;
  gap:1em;
}
</style>
