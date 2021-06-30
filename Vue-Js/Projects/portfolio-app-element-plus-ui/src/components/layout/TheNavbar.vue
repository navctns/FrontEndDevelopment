<template>
  <el-container>
      <el-row>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/skills">Skills & Projects</el-menu-item>
          <el-menu-item index="/exp_academics">Experience & Academics</el-menu-item>
          <!-- <el-menu-item index="3" disabled>Info</el-menu-item> -->
          <el-menu-item index="www.facebook.com"><font-awesome-icon :icon="['fab','facebook']" /></el-menu-item>
          <el-menu-item index="www.facebook.com"><font-awesome-icon :icon="['fab','linkedin']" /></el-menu-item>
          <el-menu-item index="www.facebook.com"><font-awesome-icon :icon="['fab','github']" /></el-menu-item>
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
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>
<style scoped>
  div{
    display: flex;
    gap:1em;
    justify-content: center;
  }
  .el-menu-item{
    font-size: 1.5em;
  }
  .el-row,.el-menu,.el-container{
    /* background: #ddffbc; */
    background: #f7f7f7;
  }
  .el-row{
    margin:0;
    padding:0;
    width:100%;
  }
</style>
