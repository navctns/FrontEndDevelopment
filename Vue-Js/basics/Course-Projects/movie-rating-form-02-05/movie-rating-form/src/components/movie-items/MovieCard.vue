<template>
  <li>
    <app-card size="sm-card">
      <template #header>
        <router-link :to="{ name: 'movie-details', params: {movieId:id,title:title} }">
          <img :src="imageUrl" alt="">
        </router-link>
      </template>
      <template #default>
        <router-link :to="{ name: 'movie-details', params: {movieId:id,title:title} }">
          <h4>{{title}} <span v-if="releaseYear !==''">({{releaseYear}})</span></h4>
        </router-link>
        <h4>Language:{{language}}</h4>
        <!-- <h4>Writer:{{writer}}</h4> -->
      </template>
    </app-card>
  </li>

</template>
<script>
  export default{
    props:['id','posterPath','language','overview','title','releaseYear'],
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
    /* height: 100%; */
    /* min-height: 15rem; */
    margin:0.5rem auto;
    display: grid;
  }
  li:hover{
    transform: scale(1.1);
    transition: 0.3s ease-out;
  }
  h4{
    font-weight: 200;
    /* text-align: center; */
  }
  a{
    text-decoration: none;
    color:#323232;
  }
</style>
