<template>
  <li>
    <app-card>
      <template #header>
        <img :src="imageUrl" alt="">
      </template>
      <template #default>
        <h3>{{title}}</h3>
        <h4>Language:{{language}}</h4>
        <!-- <h4>Writer:{{writer}}</h4> -->
      </template>
    </app-card>
  </li>

</template>
<script>
  export default{
    props:['id','posterPath','language','overview','title'],
    computed:{
      imageUrl(){
        return 'https://image.tmdb.org/t/p/w185' + this.posterPath;
      }
    }
  }
</script>
<style scoped>
  img{
    width:80%;
    height: auto;
  }
  li{
    width:100%;
    height: 60%;
    display: grid;
  }
  h4{
    font-weight: 200;
    /* text-align: center; */
  }
</style>
