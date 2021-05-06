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
<style scoped>
  div{
    padding:2em;
    /* margin: auto; */
    box-shadow: 0 2px 8px rgba(0,0,0,0.26);
    border-radius: 1em;
    display: flex;
    grid-gap: 0;
    /* place-items:center; */
    justify-content: center;
    margin: auto;
    flex-direction: column;
    /* gap:1em; */
    width:90%;
  }

  /* section{
    margin: auto;
    gap:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } */
  header,footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
