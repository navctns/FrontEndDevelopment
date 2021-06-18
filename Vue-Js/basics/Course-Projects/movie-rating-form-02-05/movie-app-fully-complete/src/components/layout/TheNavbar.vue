<template>
  <div :class="{backdrop:backdrop}" class="main">
    <div class="navbar-toggler">
      <i class="fas fa-bars" @click="toggleNavbar"></i>
    </div>
    <div class="container" v-if="navbarVisibility">

      <ul class="navbar">
        <li>
          <router-link to="/" class="logo-nav" @click="hideNavbar">
            <img src="../../assets/icons8-film-reel-48.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to='/' @click="hideNavbar">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/movies" @click="hideNavbar">
            Movies
          </router-link>
        </li>
        <li>
          <router-link to='/about' @click="hideNavbar">
            About
          </router-link>
        </li>
        <li>
          <router-link to='/filmAppreciation' @click="hideNavbar">
            Film Movements
          </router-link>
        </li>
      </ul>
    </div>
  </div>


</template>
<script>
  export default{
    data(){
      return{
        navbarVisibility:window.innerWidth > 768?true:false,
      }
    },
    methods:{
      toggleNavbar(){
        this.navbarVisibility = !this.navbarVisibility;
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
  place-items:center;
  align-items: center;

}
.backdrop {
  /* position: fixed; */
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
  justify-content:center;
  align-items: center;
  list-style: none;
  gap:1em;
  padding:0;
  height: 0.8em;
}
.router-link-active{
  background-color: #21bf73;
}
a.router-link-active{
  background: #03256c;
  text-decoration: none;
  color:#fafafa;
}
a.router-link-active:hover{
  background: #03256c;
}
a{
  text-decoration: none;
  padding:0.2em;
  border-radius: 0.5em;
  min-width:12rem;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  display: block;
  text-align: center;
  color:#fafafa;
  font-weight: 500;

}

a:hover{
  background: #03256c;
  color:#fafafa;
}
.navbar-toggler{
  display:none;
}
li img{
  display: flex;
  justify-content: center;
  margin:0.5em;
}
.logo-nav{
  display: flex;
  justify-content: center;
}
.logo-nav:hover,
.logo-nav:focus{
  background: transparent;
}
.logo-nav.router-link-active{
  background: transparent;
}
.fa-bars:hover,
.fa-bars:focus{
  cursor:pointer;
}
.main{
  position: fixed;
  top:0;
  z-index: 10;
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
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    /* gap:0.5em; */
    gap:1em;
    margin: 4em 0;

  }
  .container{
    grid-template-columns: 1fr;
    position: absolute;
    width:100%;
    height:100%;
    position: fixed;
  }
  a{
    /* font-weight: 400; */
    font-size: 1.5em;
    margin:0.5em 0;
  }
  .main{
    top:0;
    width:100%;
    position:fixed;
    margin:0;
    padding:0;
  }
}
</style>
