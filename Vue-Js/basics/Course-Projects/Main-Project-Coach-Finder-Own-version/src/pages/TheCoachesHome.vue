<template>
  <!-- header  -->
  <div class="container">
    <app-card>
      <coach-list></coach-list>
    </app-card>
  </div>

  <!-- footer -->
</template>
<script>
  import CoachList from '../components/coach-resources/CoachList.vue';
  // import TheHeader from '../components/UI/TheHeader.vue';

  export default{
    components:{
      CoachList,

    }
  }
</script>
<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    gap:1em;
  }
</style>
