<template>
  <div class="row">
    <ul class="filter-bar">
      <li>
        <input type="text" placeholder="search movie or Artist" @input="searchMovie" v-model="searchTermInp">
      </li>
      <li class="filter-items">
         <ul class="breadcrumb">
           <li>
             <app-button :active="sortTerm==='genre'" text-color="white" value="Movies by Genre" mode="flat" @click="setFilterType('genre')"></app-button>
           </li>
           <li>
             <app-button :active="sortTerm==='lang'" text-color="white" value="Movies By Language" mode="flat" @click="setFilterType('lang')"></app-button>
           </li>
           <li>
             <app-button :active="sortTerm==='resent'" text-color="white" value="Popular Now" mode="flat" @click="setFilterType('resent')"></app-button>
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
      // async sortMovies(sortBy){
      //   if(sortBy === 'genre'){
      //     this.sortTerm = 'genre';
      //     //Genres keywords on API
      //     this.keywordsList = this.$store.getters.genres;
      //     const getMoviewByGenres = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a',);
      //     const responseData = getMoviewByGenres.json();
      //   }else if(sortBy==='lang'){
      //     this.sortTerm = 'lang';
      //   }
      // },
      getGenresItems(){
        this.genres = this.$store.getters.genres;
        return this.genres;
      },
      async sortBySpecificTerm(sortBy){
        //Sort by specific genre or Language
        //emitted function
        if(this.sortTerm === 'genre'){
          //Fetch movies by genre from api
          const moviesResponse = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&with_genres=' + sortBy);
          const responseData = await moviesResponse.json();
          this.$emit('filter-movies',this.sortTerm,responseData.results);
        }else if(this.sortTerm === 'lang'){
          //Fetch movies by Language from api
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
        const searchResponse = await fetch('https://api.themoviedb.org/3/search/movie?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&query=' + this.searchTermInp);
        const responseData = await searchResponse.json();
        //SEARCH BY PEOPLE(CREW/CAST)
        //Get Person Id
        const byPeopleResponse = await fetch(' https://api.themoviedb.org/3/search/person?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&page=1&query=' + this.searchTermInp);
        const byPeopleData = await byPeopleResponse.json();
        if(byPeopleData.results && byPeopleData.results.length !==0){
          const personId = byPeopleData.results[0].id;
          const moviesByPeopleRes = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=c9a2fdad68cf48b2893d6e9ab30ad18a&language=en-US&with_people=' + parseInt(personId));
          const moviesByPeopleData = await moviesByPeopleRes.json();
          moviesByPeopleData.results.forEach(item => {
            responseData.results.unshift(item);
          });
        }

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
        if(value === 'genre'){
          this.keywordsList = this.$store.getters.genres;
        }else if(value === 'resent'){
          this.keywordsList = [
            {name:'top-rated',label:'Top Rated'},
            {name:'now-showing', label:'Now Showing'},
            {name:'popular', label:'Popular'},
            {name:'upcoming', label:'Upcoming'}];
        }else if(value === 'lang'){
          this.keywordsList = [
              {name:'ml',label:'Malayalam'},
              {name:'fr',label:'French'},
              {name:'en',label:'English'},
              {name:'ko',label:'Korean'},
              {name:'ja',label:'Japanese'},
              {name:'cs',label:'Czech'},
              {name:'de', label:'German'},
              {name:'it', label:'Italian'},
              {name:'ku', label:'Kurdish'},
              {name:'la', label:'Latin'},
              {name:'pl', label:'Polish'},
              {name:'da', label:'Danish'},
              {name:'no', label:'Norwegian'},
              {name:'hi', label:'Hindi'},
              {name:'ru', label:'Russian'},
              {name:'sr', label:'Serbian'},
              {name:'sv', label:'Swedish'},
              {name:'af', label:'Afrikaans'},

          ]
        }
        else if(value === ''){
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

.filter-items{
  display:flex;
  gap:0.5em;
  justify-content: center;
}

ul.breadcrumb {
 padding: 10px 16px;
 list-style: none;
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
 opacity:0.9;
}
.row{
  padding:0.5em 0.5em;
}
.filter-container{
  padding: 0;
}
input{
  /* height: 1.5em; */
  font-size: 1em;
}
@media(max-width:768px) {
  ul.filter-bar{
    flex-direction: column;
  }
  input{
    width:80%;
    font-size: 0.8em;
  }
  ul.breadcrumb{
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* gap:0.8em; */
  }
  ul.breadcrumb li{
    font-size:0.8em;
    width:auto;
    margin: 0.5em 0;
  }
  ul.breadcrumb {
   padding: 0;
   list-style: none;
   /* background-color: #eee; */
  }
  ul.breadcrumb li+li:before {
    padding:0;
    content:'';
  }
}
</style>
