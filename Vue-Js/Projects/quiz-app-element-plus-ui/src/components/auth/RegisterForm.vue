<template>
  <el-container>
    <el-row>
      <el-input type="text" autocomplete="off"></el-input>
      <el-input type="password" autocomplete="off"></el-input>
      <el-button @click="$emit('switch')">Login</el-button>
    </el-row>
  </el-container>
</template>
<script>
  export default{
    emits:['switch'],
  }
</script>
