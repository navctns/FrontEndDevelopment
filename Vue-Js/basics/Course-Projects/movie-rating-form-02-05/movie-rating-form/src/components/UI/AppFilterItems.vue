<template>
  <ul class="navbar">
    <li
      v-for="filter in filters"
        :key="filter.name">
        <app-button :value="filter.name" :name="filter.name" :id="filter.id" mode="flat" @click="sortBy($event)"></app-button>
    </li>
  </ul>
</template>
<script>
  export default{
    props:['filterBy','keywords'],
    emits:['sort-by'],
    data(){
      return{
        // filters:null,
      }
    },
    computed:{
      filters(){
        //Filter names are set according //
        //category names set on movie obj
        if(this.filterBy === 'genre'){
          console.log(this.keywords);
          return this.keywords;
        }else if(this.filterBy === 'lang'){
          return[
              {
                name:'malayalam',
                label:'Malayalam'
              },
              {
                name:'french',
                label:'French'
              },
              {
                name:'English',
                label:'English'
              },
              {
                name:'korean',
                label:'Korean'
              },
          ]
        }else{
          return [];
        }
      }
    },
    methods:{
      sortBy(event){
        //Sort parameters from specific buttons(specific genres)
        console.log(event.target.name,event.target.id);
        this.$emit('sort-by',event.target.id);
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
</style>
