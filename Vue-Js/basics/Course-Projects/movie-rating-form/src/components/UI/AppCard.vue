<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <section>
      <slot></slot>
    </section>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<style scoped="">
  div{
    padding:1em;
    /* margin: 1em 0; */
    margin: auto;
    /* margin: 2rem auto; */
    box-shadow: 0 2px 8px rgba(0,0,0,0.26);
    border-radius: 1em;
    /* max-width: 40rem; */
    /* max-width: 80%; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    width:100%;
  }
  header,footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
