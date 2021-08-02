<template>
  <div :class="{smallCard:width=== 'sm',mediumCard:width === 'md',largeCard:width=== 'lg',defaultCard:!width}">
    <span class="rightTag">
      <slot name="rightTag"></slot>
    </span>
    <header>
      <slot name="header"></slot>
    </header>
    <span>
      <slot name="content"></slot>
    </span>
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
    width:{
      type:String,
      default:null,
      required:false,
    }
  }
}
</script>

<style scoped>
  span.rightTag{
    display: flex;
    justify-content: flex-end;
  }
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
  }
  .smallCard{
    width:40%;
    height: auto;
  }
  .mediumCard{
    width:75%;
  }
  .defaultCard{
    width:90%;
  }
  .largeCard{
    width:100%;
  }

  section{
    margin: auto;
    gap:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  /* content{
    display: flex;
    flex
  } */
  header,footer{
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
    align-items: center;
  }
  footer >*{
    width: 100%;
  }
</style>
