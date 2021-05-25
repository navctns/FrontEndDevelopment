<template>
  <div class="row">
    <ul class="filter-bar">
      <li>
        <input type="text" placeholder="search movie">
      </li>
      <li class="flex-item">
        <h5>Sort by</h5>
        <select name="" id="" v-model="sortTerm">
          <option value="lang" selected>Language</option>
          <option value="genre">by Genre</option>
        </select>
      </li>
    </ul>
    <filter-items :filter-by="sortTerm" :keywords="keywordsList" @sort-by="sortBySpecificTerm"></filter-items>
  </div>
</template>
<script>
  import FilterItems from '../UI/AppFilterItems.vue';
  export default{
    components:{
      FilterItems,
    },
    emits:['filter-movies'],
    data(){
      return{
        // sortMode:'',
        sortTerm:'',
        genres:null,
        keywordsList:[],
      }
    },
    methods:{
      async sortMovies(sortBy){
        if(sortBy === 'genre'){
          // this.sortByGenre = !this.sortByGenre;
          this.sortTerm = 'genre';
          //Genres keywords on API
          this.keywordsList = this.$store.getters.genres;
          console.log(this.keywordsList,'abc');
          // const response = fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=yourkey')
          // const getMoviewByGenres = fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US',)
          const getMoviewByGenres = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a',);
          const responseData = getMoviewByGenres.json();
          console.log(responseData);

        }else if(sortBy==='lang'){
          this.sortTerm = 'lang';
        }
      },
      getGenresItems(){
        this.genres = this.$store.getters.genres;
        console.log('on filter',this.genres);
        return this.genres;
      },
      sortBySpecificTerm(sortBy){
        //Sort by specific genre or Language
        //emitted function
        console.log('on-movie-filter',sortBy);
        // this.$store.commit('sortMoviesByGenre', parseInt(sortBy));
        this.$emit('filter-movies',this.sortTerm,parseInt(sortBy));
      }
    },
    created(){
      this.$store.dispatch('fetchGenres');
      this.getGenresItems();
    },
    // computed:{
    //   filterKeywords(){
    //     if(this.sortTerm === 'genre'){
    //       return this.$store.getters.genres;
    //     }
    //   }
    // },
    watch:{
      async sortTerm(value){
        console.log(value);
        if(value === 'genre'){
          console.log('sort by genre');
          const genresList = this.$store.getters.genres;
          console.log('genres list', genresList);
          this.keywordsList = this.$store.getters.genres;
          console.log(this.keywordsList);
        }
      }
    }
  }
</script>
<style scoped>
ul.navbar{
  display: flex;
  justify-content: center;
  list-style: none;
  gap:1em;
  margin:1.5em 0;
}
ul.filter-bar{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  gap:1em;
}
select{
  width:10em;
  padding:0.5em;
  height: auto;
}
/* li{
  width:100%;
  align-items: center;
} */
.flex-item{
  display:flex;
  gap:0.5em;
  justify-content: center;
}
/* .flex-item >*{
  width: 100%;
} */
</style>
