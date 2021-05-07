<template>
  <div>
    <header>
      <h2>Coach Finder</h2>
    </header>
    <section>
      <router-link class="link" :to="{ name: 'coaches', params: {} }">
        <app-button size="xxl" color="flat" value="Coaches"></app-button>
      </router-link>

      <router-link class="link" :to="{ name: 'requests', params: {} }" tag="div">

        <app-button size="xxl" color="flat" value="Requsts"></app-button>
      </router-link>

    </section>
  </div>
</template>
<style scoped>
  .link{
    /* position: absolute; */
    margin: 0;
    width: 100%;
    /* display: block; */
    background-color: inherit;
    padding: 0;
    /* position: absolute; */

  }
  a.router-link-active{
    background-color: #1e6f5c;
    border-radius: 0.5em;
    color:#fafafa;
    /* width:50%; */
    padding:0;
  }
  /* a >*{
    width: 100%;
  } */
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
  /* section >*{
    width:100%;
  } */
</style>
