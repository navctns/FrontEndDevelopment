<template>
  <li class="container">
    <div class="movie-poster">
      <router-link :to="{ name: 'movie-details', params: {movieId:id,title:title} }">
        <img :src="imageUrl" alt="">
      </router-link>
    </div>
    <div class="movie-info">
      <router-link :to="{ name: 'movie-details', params: {movieId:id,title:title} }">
        <h4>{{titleWithYr}}</h4>
      </router-link>
    </div>
  </li>
</template>
<script>
  export default{
    props:['id','posterPath','language','title','releaseYear'],

    computed:{
        imageUrl(){
          return 'https://image.tmdb.org/t/p/w185' + this.posterPath;
        },
        titleWithYr(){
          if(this.releaseYear !== ''){
            return this.title + '(' + this.releaseYear + ')';
          }
          return this.title;
        }

    }
  }
</script>
<style scoped>
li{
  width:100%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  gap:0.5em;
  margin:0.5em 0;
}
a{
  text-decoration: none;
}
</style>
