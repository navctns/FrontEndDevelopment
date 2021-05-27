<template>
  <ul class="navbar">
    <li
      v-for="filter in filters"
        :key="filter.name">
        <app-button v-if="filterBy ==='genre'" :value="filter.name" :name="filter.name" :id="filter.id" mode="flat" @click="sortBy($event)"></app-button>
        <app-button v-else :value="filter.label" :name="filter.name" mode="flat" @click="sortBy($event)"></app-button>
    </li>
  </ul>
</template>
<script>
  export default{
    props:['filterBy','keywords'],
    emits:['sort-by'],

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
                name:'en',
                label:'English'
              },
              {
                name:'ko',
                label:'Korean'
              },
              {
                name:'ja',
                label:'Japanese'
              }
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
        if(this.filterBy === 'genre'){
          this.$emit('sort-by',event.target.id);
        }else{
          this.$emit('sort-by',event.target.name);
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
</style>
