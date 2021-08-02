<template>
  <div :class="{bgLight:!bgColor,bgDark:bgColor === 'dark',bgGreen:bgColor === 'green'}">
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
<script>
  export default{
    props:{
      bgColor:{
          type:String,
          default:null,
          required:false,
      }
    },
  }
</script>
<style scoped="">
  div{
    padding:1em;
    margin: auto;
    box-shadow: 0 2px 8px rgba(0,0,0,0.26);
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* gap:1em; */
    width:90%;
  }
  .bgLight{
    /* background-color: #f9fcfb; */
    background-color: #fafafa;
  }
  .bgDark{
    background-color: #111f4d;
    color:#fafafa;
  }
  .bgGreen{
    background-color: #91c788;
    color:#323232;
  }
  /* section{
    margin: auto;
  } */
  section{
    margin:1em 0;
  }
  footer{
    display: flex;
    justify-content: space-between;
    text-align:center;
    align-items: center;
  }
  header{
    display: flex;
    /* justify-content: center; */
    justify-content: space-between;
    max-height: 40vh;
    /* text-align:center; */
    /* align-items: center; */
    gap:2em;
  }

</style>
