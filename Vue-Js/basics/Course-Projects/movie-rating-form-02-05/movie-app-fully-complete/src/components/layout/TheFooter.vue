<template>
  <footer>
    <h5>Films Or Films<span>&copy;{{presentYear}}</span></h5>
  </footer>
</template>
<script>
  export default{
    computed:{
      presentYear(){
        const currentDate = new Date();
        return currentDate.getFullYear();
      }
    }
  }
</script>
<style scoped>
footer{
  background:#232323;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 20vh;
  margin:0;
}
</style>
