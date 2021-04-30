<template>
  <li>
    <app-card>
      <template #header>
        <img :src="imgUrl" alt="">
      </template>
      <template #default>
        <h3>{{title}}</h3>
        <h4>Director:{{director}}</h4>
        <h4>Writer:{{writer}}</h4>
      </template>
    </app-card>
  </li>

</template>
<script>
  export default{
    props:['id','imgUrl','director','writer','title']
  }
</script>
<style scoped>
  img{
    width:100%;
    height: auto;
  }
  li{
    width:100%;
    height: auto;
    display: grid;
  }
</style>
