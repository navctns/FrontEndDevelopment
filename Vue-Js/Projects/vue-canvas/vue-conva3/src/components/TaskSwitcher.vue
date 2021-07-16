<template>
  <div class="container">
    <p>Task Succeeded</p>
    <button @click="nextTask">Next Task</button>
  </div>
</template>
<script>
  export default{
    emits:['next-task'],
    setup(_,context){
      //Task result
      function nextTask(){
        context.emit('next-task');
      }
      return{
        nextTask
      }
    }
  }

</script>
<style scoped>
  .container{
    display: flex;
    justify-content: center;
    gap:1em;
  }
</style>
