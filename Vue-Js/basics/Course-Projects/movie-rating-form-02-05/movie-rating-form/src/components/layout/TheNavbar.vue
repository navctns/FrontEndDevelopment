<template>
  <div :class="{backdrop:backdrop}" @click="hideNavbar">
    <div class="navbar-toggler">
      <!-- <app-button value="Navbar" @mouseover="showNavbar"></app-button> -->
      <i class="fas fa-bars" @mouseover="showNavbar"></i>
    </div>
    <div class="container" v-if="navbarVisibility">

      <ul class="navbar">
        <li>
          <router-link to='/'>
            Home
          </router-link>
        </li>
        <li>
          <!-- <a href="#">Movies</a> -->
          <router-link to="/movies" @click="hideNavbar">
            Movies
            <!-- <app-button type="button" name="button" value="Movies" mode="flat"></app-button> -->
          </router-link>
        </li>
        <li>
          <router-link to='/about' @click="hideNavbar">
            About
          </router-link>
        </li>
        <li>
          <router-link to='/panel' @click="hideNavbar">
            Panel
          </router-link>
        </li>
        <li>
          <router-link to='/filmAppreciation' @click="hideNavbar">
            Film Appreciation
          </router-link>
        </li>

      </ul>
    </div>
  </div>


</template>
<script>
  export default{
    // emits:['hide-nav'],
    data(){
      return{
        navbarVisibility:window.innerWidth > 768?true:false,
      }
    },
    methods:{
      showNavbar(){
        this.navbarVisibility = true;
      },
      hideNavbar(){
        if(window.innerWidth < 768 )
        this.navbarVisibility = false;
      },

    },
    computed:{
      backdrop(){
        return window.innerWidth < 768 && this.navbarVisibility;
      }
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
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color:rgba(0, 0, 0, 0.75);
}
.row{
  display: flex;
  flex-direction: column;
}
ul.navbar{
  display: flex;
  /* justify-content:center; */
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
  min-width:12rem;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  display: block;
  text-align: center;
  /* color:#393e46; */
  color:#fafafa;
  font-weight: 600;

}

a:hover{
  /* background-color: #b0eacd; */
  background: #03256c;
  /* color:#323232; */
  color:#fafafa;
}
.navbar-toggler{
  display:none;
}
@media(max-width:768px) {
  .navbar-toggler{
    display: flex;
    width:100%;
    background: #323232;
  }
  .fa-bars{
    margin: 1em 1em;
  }
  ul.navbar{
    flex-direction:column;
    align-items:center;
    gap:0.5em;

  }
  .container{
    grid-template-columns: 1fr;
    position: absolute;
    width:60%;
    height:50vh;
  }
  a{
    font-weight: 400;
    font-size: 0.8em;
  }
}
</style>
