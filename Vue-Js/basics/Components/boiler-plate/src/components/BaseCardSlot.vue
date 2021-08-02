<template>
  <section>
    <slot></slot>
  </section>
</template>
<script>
  export default{

  }
</script>
<style scoped>
  section{
    display: flex;
    gap:10em;
    border-radius: 1em;
    border: solid #a2b29f;
    padding:1em;
    align-items: center;
    justify-content: between;
    background:#8fd9a8;
  }
  section > h3{
    width:30%;
    background:#8fd9a8;
  }
  div {
    width:70%;
  }
</style>
