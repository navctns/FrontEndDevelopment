<template>
  <tr>
    <td>1</td>
    <td>{{movie.id}}</td>
    <td>{{movie.title}}</td>
    <td>{{movie.director}}</td>
    <td>{{movie.writer}}</td>
    <td>{{movie.synopsis}}</td>
    <td><app-button value="Delete" mode="flat" @click="deleteItem()"></app-button></td>
  </tr>
</template>
<script>
  export default{
    props:['movie'],
    inject:['deleteMovie'],
    methods:{
      deleteItem(){
        console.log('delete item', this.movie)
        this.deleteMovie(this.movie.id);
      }
    }
  }
</script>
<style scoped>
   tr{
    background-color: #eeeeee;
    color:#393e46;
    display:flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #a2b29f;
  }
  td{
    display:block;
    /* border:1px solid #a2b29f; */
    justify-content: center;
    width:90%;
    /* text-align: center; */
  }
  tr td{
    width:100%;
  }
</style>
