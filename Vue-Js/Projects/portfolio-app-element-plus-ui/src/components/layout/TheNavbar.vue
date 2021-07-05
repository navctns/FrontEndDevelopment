<template>
  <el-container>
      <el-row>
        <div class="navbar-toggler">
          <!-- <i class="fas fa-bars" @click="toggleNavbar"></i> -->
          <font-awesome-icon :icon="['fas','bars']"  @click="toggleNavbar"/>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true"
          v-if="navbarVisibility">
          <el-menu-item index="/" @click="hideNavbar">Home</el-menu-item>
          <el-menu-item index="/skills" @click="hideNavbar">Skills & Projects</el-menu-item>
          <el-menu-item index="/exp_academics" @click="hideNavbar">Experience & Academics</el-menu-item>
          <!-- <el-menu-item index="3" disabled>Info</el-menu-item> -->
          <el-menu-item ><a target="_blank" href="https://www.facebook.com/naveenvijay.v" @click="hideNavbar"><font-awesome-icon :icon="['fab','facebook']" /></a></el-menu-item>
          <el-menu-item ><a target="_blank" href="https://www.linkedin.com/in/naveen-vijayan-frontend" @click="hideNavbar"><font-awesome-icon :icon="['fab','linkedin']" /></a></el-menu-item>
          <el-menu-item ><a target="_blank" href="https://github.com/navctns" @click="hideNavbar"><font-awesome-icon :icon="['fab','github']" /></a></el-menu-item>
        </el-menu>
        <div class="line"></div>
      </el-row>
  </el-container>

</template>
<script>
    export default {
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          navbarVisibility:window.innerWidth > 768?true:false,

        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        toggleNavbar(){
          this.navbarVisibility = !this.navbarVisibility;
        },
        hideNavbar(){
          if(window.innerWidth < 768 )
          this.navbarVisibility = false;
        },

      }
    }
</script>
<style scoped>
  .el-container{
    margin:0;
  }
  div{
    display: flex;
    gap:1em;
    justify-content: center;
  }
  .el-menu-item{
    font-size: 1.3em;
  }
  .el-row,.el-menu,.el-container{
    /* background: #ddffbc; */
    background: #f7f7f7;
    margin: 0;
  }
  .el-row{
    margin:0;
    padding:0;
    width:100%;
  }
  .navbar-toggler{
    display:none;
  }
  @media(max-width:768px) {
    .navbar-toggler{
      display: flex;
      width:100%;
      /* background: #323232; */
    }
    .el-row{
      position: fixed;
      z-index: 10;
    }
    .el-menu-item{
      font-size: 1.2em;
      display: block;
      width:100%;
    }
  }
</style>
