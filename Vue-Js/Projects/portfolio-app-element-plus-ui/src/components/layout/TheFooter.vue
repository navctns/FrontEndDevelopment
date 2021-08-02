<template>
  <el-container>
    <el-main>
      <span>Copyright&copy;{{year}}</span>
    </el-main>
  </el-container>
</template>
<script>
  export default{
    setup(){
      const year = new Date().getFullYear();
      return{
        year,
      }
    }
  }
</script>
<style scoped>
  .el-main{
    min-height: 2em;
    /* background: #5d5d5d; */
    display: flex;
    justify-content: center;
  }
</style>
