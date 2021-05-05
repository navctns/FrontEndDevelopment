<template>
  <ul>
    <movie-card
      v-for="movie in moviesList"
      :key="movie.id"
      :title="movie.title"
      :director="movie.director"
      :writer="movie.writer"
      :imgUrl="movie.imgUrl"
    ></movie-card>
  </ul>

</template>
<script>
  import MovieCard from './MovieCard.vue';
  export default{
    components:{
      MovieCard,
    },
    // inject:['movies']
    computed:{
      moviesList(){
        return this.$store.getters.movies;
      }
    }
  }
</script>
<style scoped>
ul {
  width: 90%;
  /* height:80%; */
  max-width: 1240px;
  margin: 1rem auto;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
}
  /* ul{
    display: flex;
    flex-basis: 30%;

  }
  ul > *{
    flex-basis: 30%;
    width:30%;
  } */
</style>
