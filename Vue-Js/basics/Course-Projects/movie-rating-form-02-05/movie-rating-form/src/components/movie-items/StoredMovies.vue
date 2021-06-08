<template>
  <app-card>

    <template #header>
      <h2>Movies List</h2>
    </template>
    <table>
      <thead>
        <tr>
          <th>SlNo.</th>
          <th>Id</th>
          <th>Name</th>
          <th>Director</th>
          <th>Writer</th>
          <th>==</th>
        </tr>
       </thead>
       <tbody>
         <movie-table-row v-for="movie in moviesList"
            :key="movie.id"
            :movie="movie"
         >
         </movie-table-row>
      </tbody>
    </table>
  </app-card>
</template>
<script>
  import MovieTableRow from './MovieTableRow.vue';
  export default{
    components:{
      MovieTableRow
    },
    computed:{
      moviesList(){
        return this.$store.getters.movies;
      }
    },
    methods:{
      deleteItem(id){
        console.log('id', id);
        console.log('delete');
        this.deleteMovie(id);
      }
    }
  }
</script>
<style scoped>
 table {
   width:100%;
 }
 tr{
   margin:0.5em 0;
   display:grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
   /* justify-content: center; */
   /* gap:1em; */
   width:100%;
   padding:0;
   border: 1px solid #a2b29f;
   border-radius:0.5em;

 }
 /* th,td{
   display: flex;
   justify-content: center;
   width:100%;
 } */
 th {
  border: 1px solid #999;
  padding: 0.5rem;
}
 thead{
   background-color: #c1c1c1;
   border-radius:1em;
   border: 1px solid #a2b29f;
   border-radius:0.5em;
 }
 /* tbody tr{
   background-color: #eeeeee;
   color:#393e46;
   display:grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
   justify-content: center;
   align-items: center;
   border: 1px solid #a2b29f;
 } */
h2{
  text-align: center;
}
</style>
