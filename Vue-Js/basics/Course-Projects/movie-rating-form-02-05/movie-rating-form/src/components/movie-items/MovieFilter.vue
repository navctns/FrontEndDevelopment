<template>
  <div class="row">
    <ul class="filter-bar">
      <li>
        <input type="text" placeholder="search movie" @input="searchMovie" v-model="searchTermInp">
      </li>
      <li class="flex-item">
         <ul class="breadcrumb">
           <li>
             <app-button :active="sortTerm==='genre'" text-color="black" value="Movies by Genre" mode="flat" @click="setFilterType('genre')"></app-button>
           </li>
           <li>
             <app-button :active="sortTerm==='lang'" text-color="black" value="Movies By Language" mode="flat" @click="setFilterType('lang')"></app-button>
           </li>
           <li>
             <app-button :active="sortTerm==='resent'" text-color="black" value="Now showing/Other" mode="flat" @click="setFilterType('resent')"></app-button>
           </li>
        </ul>
      </li>
    </ul>
    <!-- Movies Category Collections - popular,now showing -->
    <filter-items v-if="sortTerm === ''" filter-by="resent" :keywords="keywordsList" @sort-by="sortBySpecificTerm"></filter-items>
    <filter-items v-else :filter-by="sortTerm" :keywords="keywordsList" @sort-by="sortBySpecificTerm"></filter-items>
  </div>
</template>
<script>
  //EXECUTION FLOW
  //setFilterType('genre')
  //Fiter type(genre,lang,...) pass as prop to filter-items
  //Also pass keywordsList to filter-items props(prop-keywords)
  //Keyword contains specific filter categs(eg:Languages-english,malayalam,...,/Genres-Action,Comedy,History)
  //filter-items emits the selected option by the user
  //thus execute sortBy() to set specific terms(english,mal)
  //sortBySpecificTerm() - to fetch data according to filter
  //Emit filtered data to MoviesList
  import FilterItems from '../UI/AppFilterItems.vue';
  export default{
    components:{
      FilterItems,
    },
    emits:['filter-movies', 'search-movie'],
    data(){
      return{
        // sortMode:'',
        sortTerm:'',
        genres:null,
        keywordsList:[],
        searchTermInp:'',
        genCollections:true,
      }
    },
    methods:{
      async sortMovies(sortBy){
        if(sortBy === 'genre'){
          // this.sortByGenre = !this.sortByGenre;
          this.sortTerm = 'genre';
          //Genres keywords on API
          this.keywordsList = this.$store.getters.genres;
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
      async sortBySpecificTerm(sortBy){
        //Sort by specific genre or Language
        //emitted function
        console.log('on-movie-filter',sortBy);
        if(this.sortTerm === 'genre'){
          // this.$emit('filter-movies',this.sortTerm,parseInt(sortBy));
          const moviesResponse = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&with_genres=' + sortBy);
          const responseData = await moviesResponse.json();
          this.$emit('filter-movies',this.sortTerm,responseData.results);
        }else if(this.sortTerm === 'lang'){
          const moviesResponse = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&with_original_language=' + sortBy);
          const responseData = await moviesResponse.json();
          this.$emit('filter-movies',this.sortTerm, responseData.results);
        }else if(this.sortTerm === 'resent'){
          //Get Now showing,Running Now,..lists
          let getLink = '';
          if(sortBy === 'top-rated') {
            getLink = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US';
          }else if(sortBy === 'now-showing'){
            getLink = 'https://api.themoviedb.org/3/movie/now_playing?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=2';
          }else if(sortBy === 'popular'){
            getLink = 'https://api.themoviedb.org/3/movie/popular?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=2';
          }else if(sortBy === 'upcoming'){
            getLink = 'https://api.themoviedb.org/3/movie/upcoming?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=2';
          }
          const moviesResponse = await fetch(getLink);
          const responseData = await moviesResponse.json();
          this.$emit('filter-movies',this.sortTerm, responseData.results);
        }
      },
      async searchMovie(){
        //Search movies by input keyword
        // console.log('searchMovie');
        // this.$emit('search-movie', 'search',this.searchTermInp);
        const searchResponse = await fetch('https://api.themoviedb.org/3/search/movie?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&query=' + this.searchTermInp);
        const responseData = await searchResponse.json();
        //SEARCH BY PEOPLE
        //Get Person Id
        const byPeopleResponse = await fetch(' https://api.themoviedb.org/3/search/person?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=1&query=' + this.searchTermInp);
        const byPeopleData = await byPeopleResponse.json();
        const personId = byPeopleData.results[0].id;
        const moviesByPeopleRes = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&with_people=' + parseInt(personId));
        const moviesByPeopleData = await moviesByPeopleRes.json();
        moviesByPeopleData.results.forEach(item => {
          responseData.results.unshift(item);
        });
        this.$emit('search-movie', 'search',responseData.results);
        // return responseData;
      },
      setFilterType(type){
        //Set sortTerm(genre,lang,...)
        this.sortTerm = type;
        this.genCollections = false;
      }
    },
    created(){
      this.$store.dispatch('fetchGenres');
      this.getGenresItems();
      this.sortTerm = 'resent';
      this.keywordsList = [
        {name:'top-rated',label:'Top Rated'},
        {name:'now-showing', label:'Now Showing'},
        {name:'popular', label:'Popular'},
        {name:'upcoming', label:'Upcoming'}];
    },
    watch:{
      async sortTerm(value){
        console.log(value);
        if(value === 'genre'){
          // const genresList = this.$store.getters.genres;
          this.keywordsList = this.$store.getters.genres;
        }else if(value === 'resent'){
          console.log('resent lists');
          this.keywordsList = [
            {name:'top-rated',label:'Top Rated'},
            {name:'now-showing', label:'Now Showing'},
            {name:'popular', label:'Popular'},
            {name:'upcoming', label:'Upcoming'}];
        }else if(value === ''){
          this.sortTerm = 'resent';
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
  /* justify-content: flex-start; */
  justify-content: center;
  align-items: center;
  list-style: none;
  gap:1em;
  padding: 0;
}
ul.filter-collections{
  display: flex;
  justify-content:center;
  align-items: center;
  list-style: none;
  gap:1em;
  padding:0;
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
/* breadcrumb */
/* Style the list */
ul.breadcrumb {
 padding: 10px 16px;
 list-style: none;
 /* background-color: #eee; */
}

/* Display list items side by side */
ul.breadcrumb li {
 display: inline;
 font-size: 18px;
 text-decoration: none;

}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li+li:before {
 padding: 8px;
 color: black;
 content: "/\00a0";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
 /* color: #0275d8; */
 /* color:#4aa96c; */
 text-decoration: none;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
 /* color: #01447e; */
 /* color:#4aa96c; */
 opacity:0.9;
 /* text-decoration: underline; */
}
.row{
  padding:0.5em 0.5em;
}
.filter-container{
  padding: 0;
}
</style>
