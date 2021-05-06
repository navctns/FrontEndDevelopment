<template>
  <div>
    <header>
      <h2>Coach Finder</h2>
    </header>
    <section>
      <app-button size="lg" color="flat" value="Coaches"></app-button>
      <app-button size="lg" color="flat" value="Requsts"></app-button>
    </section>
  </div>
</template>
<style scoped>
  div{
    text-align: center;
    display:grid;
    grid-template-columns: 1fr 1fr;
  }
  section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1em;
  }
</style>
