<template>
  <movies-list></movies-list>
</template>
<script>
  // import MovieForm from '../components/movie-items/MovieForm.vue';
  import MoviesList from '../components/movie-items/MoviesList.vue';
  // import MovieFilter from '../components/movie-items/MovieFilter.vue';

  export default{
    components:{
      MoviesList,
    },
    data(){
      return{
        selectedTab:'movies-list',
      }
    },

    methods:{
      setTab(tab){
        this.selectedTab = tab;
      },


  }
}
</script>
<style media="screen" scoped>
  /* ul{
    list-style: none;
    text-decoration: none;
    margin: auto;
    display: flex;
    flex-basis: 30%;
    gap:1em;
    align-items: center;
    justify-content: center;
  } */

  ul {
    width: 100%;
    max-width: 1240px;
    margin: 1rem auto;

    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
    list-style:none;
  }
  li a{
    text-decoration: none;
  }
@media(max-width:768px){
  ul{
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
