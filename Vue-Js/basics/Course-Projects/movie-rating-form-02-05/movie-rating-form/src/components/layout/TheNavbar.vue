<template>
  <div class="container">
    <ul class="navbar">
      <li>
        <router-link to='/'>
          Home
        </router-link>
      </li>
      <li>
        <!-- <a href="#">Movies</a> -->
        <router-link to="/movies">
          Movies
          <!-- <app-button type="button" name="button" value="Movies" mode="flat"></app-button> -->
        </router-link>
      </li>
      <li>
        <router-link to='/about'>
          About
        </router-link>
      </li>
      <li>
        <router-link to='/panel'>
          Panel
        </router-link>
      </li>
      <li>
        <router-link to='/filmAppreciation'>
          Film Appreciation
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
  padding:0;
  background: #323232;
}
.row{
  display: flex;
  flex-direction: column;
}
ul.navbar{
  display: flex;
  justify-content:center;
  align-items: center;
  list-style: none;
  gap:1em;
  padding:0;
  height: 0.8em;
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
  /* background-color: #21bf73; */
  /* background-color: #b0eacd; */
  background: #03256c;
  padding:0.5em;
  text-decoration: none;
  color:#fafafa;
}
a.router-link-active:hover{
  /* background-color: #21bf73; */
  background: #03256c;
}
a{
  text-decoration: none;
  padding:0.5em;
  border-radius: 0.5em;
  /* border: 1px solid #21bf73; */
  width:10rem;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  display: block;
  text-align: center;
  /* color:#393e46; */
  color:#fafafa;
}

a:hover{
  /* background-color: #b0eacd; */
  background: #03256c;
  /* color:#323232; */
  color:#fafafa;
}

</style>
