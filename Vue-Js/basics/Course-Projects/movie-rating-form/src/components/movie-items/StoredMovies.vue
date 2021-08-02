<template>
  <app-card>
    <!-- <ul>
      <li>The Host</li>
      <li>Snowpiercer</li>
      <li>Tokyo</li>
      <li>Mother</li>
    </ul> -->
    <table>
      <thead>
        <tr>
          <th>SlNo.</th>
          <th>Id</th>
          <th>Name</th>
          <th>Director</th>
          <th>Writer</th>
          <th>synopsis</th>
          <th>==</th>
        </tr>
       </thead>
       <tbody>
         <movie-table-row v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
         >
           <!-- <td>1</td>
           <td>4522</td>
           <td>{{movie.title}}</td>
           <td>{{movie.director}}</td>
           <td>{{movie.writer}}</td>
           <td>{{movie.synopsis}}</td>
           <td><app-button value="Delete" mode="flat" @click="deleteItem(movie.id)"></app-button></td> -->
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
    inject:['movies','deleteMovie'],
    data(){
      return{

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
   display:flex;
   gap:1em;
   width:100%;
 }
 th,td{
   display: flex;
   justify-content: center;
   width:100%;
 }
 thead{
   background-color: #c1c1c1;
   border-radius:1em;
 }
 tbody tr{
   background-color: #eeeeee;
   color:#393e46;
   display:flex;
   justify-content: center;
   align-items: center;
   border: 1px solid #a2b29f;
 }

</style>
