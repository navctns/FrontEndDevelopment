<template>
  <el-row>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item index="/" to="/about">About Me</el-menu-item>
      <el-menu-item index="2">Skills</el-menu-item>
      <el-menu-item index="5">Projects</el-menu-item>
      <el-menu-item index="3" disabled>Info</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
    </el-menu>
    <div class="line"></div>
  </el-row>

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
</style>
