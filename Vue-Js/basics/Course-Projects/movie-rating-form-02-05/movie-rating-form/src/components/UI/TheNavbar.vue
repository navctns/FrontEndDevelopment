<template>
  <div class="container">


    <ul class="navbar">

      <li>
        <!-- <a href="#">Movies</a> -->
        <router-link to="/">
          Movies
          <!-- <app-button type="button" name="button" value="Movies" mode="flat"></app-button> -->
        </router-link>
      </li>
      <li>
        <!-- <a href="#">Add Movie</a> -->
        <router-link to='/panel'>
          Panel
          <!-- <app-button type="button" name="button"  value="Add Movie" mode="flat" :nav="true"></app-button> -->
        </router-link>
      </li>
    </ul>
  </div>

</template>
<script>
  export default{
    data(){
      return{
      }
    },
    methods:{

    }
  }
</script>
<style scoped>
.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.row{
  display: flex;
  flex-direction: column;
}
ul.navbar{
  display: flex;
  justify-content: center;
  list-style: none;
  gap:1em;
}
.router-link-active{
  /* width:100%; */
  background-color: #21bf73;
  /* text-decoration: none;
  padding:1em;
  border-radius: 0.5em;
  cursor: pointer;
  text-decoration: none; */
}
a.router-link-active{
  background-color: #21bf73;
  padding:1em;
  text-decoration: none;
}
a.router-link-active:hover{
  background-color: #21bf73;
}
a{
  text-decoration: none;
  padding:1em;
  border-radius: 0.5em;
  border: 1px solid #21bf73;
  width:10rem;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  display: block;
  text-align: center;
  color:#393e46;
}

a:hover{
  background-color: #b0eacd;
}

</style>
