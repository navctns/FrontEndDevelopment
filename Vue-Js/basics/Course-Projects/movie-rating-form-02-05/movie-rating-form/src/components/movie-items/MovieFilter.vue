<template>
  <div class="row">
    <ul class="filter-bar">
      <li>
        <input type="text" placeholder="search movie">
      </li>
      <li class="flex-item">
        <h5>Sort by</h5>
        <select name="" id="">
          <option>Language</option>
          <option value="">by Genre</option>
        </select>
      </li>
    </ul>
    <ul class="navbar">
      <!-- <li>
        <app-small-button value="Sort by Genres" mode="oth" @click="sortMovies('genre')"></app-small-button>
      </li> -->
      <li>
        <app-button value="Comedy" mode="flat" @click="sortMovies('genre')"></app-button>
      </li>
      <li>
        <app-button value="Action/Horror" mode="flat" @click="sortMovies('genre')"></app-button>
      </li>
      <li>
        <app-button value="Fantacy/Sci-fi" mode="flat" @click="sortMovies('genre')"></app-button>
      </li>
      <li>
        <app-button value="Drama/History" mode="flat" @click="sortMovies('genre')"></app-button>
      </li>
      <li>
        <app-button value="Slow Cineme" mode="flat" @click="sortMovies('genre')"></app-button>
      </li>
    </ul>
    <ul class="navbar" v-if="sortByGenre">
      <li>
        <app-small-button value="Genres" mode="oth"></app-small-button>
      </li>
      <li>
        <app-small-button value="Genres" mode="oth"></app-small-button>
      </li>
      <li>
        <app-small-button value="Genres" mode="oth"></app-small-button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        sortByGenre:false,
      }
    },
    methods:{
      sortMovies(sortBy){
        if(sortBy === 'genre'){
          this.sortByGenre = !this.sortByGenre;
          const response = fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=yourkey')
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
