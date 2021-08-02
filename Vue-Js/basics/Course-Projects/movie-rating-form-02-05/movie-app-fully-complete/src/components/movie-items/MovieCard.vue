<template>
  <li :class="{hoverEffectScale:onHover === 'scale-up',hoverEffectOpac:onHover === 'change-opac'}">
    <app-card size="sm-card">
      <template #header>
        <router-link :to="{ name: 'movie-details', params: {movieId:id,title:title} }" class="poster-img-contain">
          <img :src="imageUrl" alt="">
        </router-link>
      </template>
      <template #default>
        <router-link :to="{ name: 'movie-details', params: {movieId:id,title:title} }">
          <h4>{{titleWithYr}}</h4>
        </router-link>
        <h4>Language:{{language}}</h4>
      </template>
    </app-card>
  </li>

</template>
<script>
  export default{
    props:['id','posterPath','language','overview','title','releaseYear','onHover'],
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
  img{
    /* width:80%; */
    width:auto;
    max-width: 90%;
    height:auto;
    /* margin:1em 0; */
  }
  li{
    width:100%;
    /* height: 100%; */
    /* min-height: 15rem; */
    margin:1rem auto;
    display: grid;
    /* padding:1em 0; */
    margin:1em 0;
  }
  .hoverEffectScale:hover{
    transform: scale(1.1);
    /* opacity:0.7; */
    transition: 0.3s ease-out;
  }
  .hoverEffectOpac:hover{
    opacity:0.8;
  }
  h4{
    font-weight: 200;
    font-size:0.9em;
    /* text-align: center; */
    display: flex;
    justify-content:flex-start;
    margin-left: 1em;
  }
  a{
    text-decoration: none;
    color:#323232;
  }
  .poster-img-contain{
    display: flex;
    justify-content: center;
    align-items:flex-start;
  }
  @media(max-width:768px) {
    a,h4{
      font-size:0.9em;
    }
  }
</style>
