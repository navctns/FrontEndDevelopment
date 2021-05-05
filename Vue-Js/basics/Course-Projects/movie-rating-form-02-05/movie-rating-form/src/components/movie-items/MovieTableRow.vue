<template>
  <tr>
    <td>1</td>
    <td>{{movie.id}}</td>
    <td>{{movie.title}}</td>
    <td>{{movie.director}}</td>
    <td>{{movie.writer}}</td>
    <!-- <td>{{movie.synopsis}}</td> -->
    <td><app-button value="Delete" mode="flat" @click="deleteItem()"></app-button></td>
  </tr>
</template>
<script>
  export default{
    props:['movie'],
    // inject:['deleteMovie'],
    methods:{
      deleteItem(){
        // console.log('delete item', this.movie)
        // this.deleteMovie(this.movie.id);
        this.$store.dispatch('deleteMovie', this.movie.id);
      }
    }
  }
</script>
<style scoped>
   tr{
    background-color: #fafafa;
    color:#393e46;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap:0.3em;
    /* justify-content: center; */
    /* align-items: center; */
    border: 1px solid #a2b29f;
    border-radius:0.5em;

    padding: 0;
  }
  /* td{
    display:flex;
    justify-content: center;
    width:90%;
  } */
  td, th {
  border: 1px solid #999;
  border-radius:0.5em;
  padding: 0.5rem;
  text-align: center;
  /* display: flex; */
  /* justify-content: center; */
}
  /* tr td{
    width:100%;

  } */
</style>
