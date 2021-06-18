<template>
  <!-- <div class="container"> -->
    <app-modal-dialog mode="search" @close="$emit('close')">
      <template #default>
        <ul>
          <result-card v-for="movie in movies"
            :key="movie.id"
            :id="movie.id"
            :title="movie.title"
            :poster-path="movie.poster_path"
            :language="setLanguageStr(movie.original_language)"
            :release-year="renderReleaseYear(movie)"

          ></result-card>
        </ul>
      </template>
      <template #actions>
        <app-button mode="flat" value="View all" @click="$emit('view-all')"></app-button>
      </template>
    </app-modal-dialog>
  <!-- </div> -->
</template>
<script>
  import ResultCard from './MovieSearchResultCard';
  export default{
    emits:['close','view-all'],
    components:{
      ResultCard,
    },
    props:['searchTerm','movies'],
    methods:{
      setLanguageStr(langCode){
        let langObj = null;
        let langStr = '';
        const langsLib = this.getLanguagesList();

        if(langsLib){
          langObj = langsLib.filter(lang => lang.iso_639_1 === langCode);
          if(langObj){
            langObj.forEach(lang=>{
              // return lang.english_name;
              langStr = lang.english_name;
            });
            return langStr;
          }
        }
        return '';
      },
      getLanguagesList(){
        return this.$store.getters.getLanguages;
      },
      renderReleaseYear(movie){
        if(movie.release_date){
          return movie.release_date.slice(0,4)
        }else{
          return '';
        }
      },
    }
  }
</script>
<style scoped>
ul{
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  gap:1em;
  margin:0;
  padding:0;
}
@media(max-width:768px) {
  ul{
    flex-direction: column;
    align-items: center;
  }
}
</style>
