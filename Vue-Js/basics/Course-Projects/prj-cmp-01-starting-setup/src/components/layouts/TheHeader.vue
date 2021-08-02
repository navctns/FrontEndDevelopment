<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>
<script>
  export default{
    props:['title'],
  }
</script>
<style scoped>
  /* My Markups */
  /* header{
    min-height: 20vh;
    background: #2d6187;
    color:#f7f7e8;
    text-align: center;
    margin: 0;
    border-radius: 1em;
    align-items: center;
  } */

  /* Tutorial Markups */
  header {
    width: 100%;
    height: 5rem;
    /* background-color: #640032; */
    background-color:#045762;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header h1 {
    color: white;
    margin: 0;
  }
</style>
