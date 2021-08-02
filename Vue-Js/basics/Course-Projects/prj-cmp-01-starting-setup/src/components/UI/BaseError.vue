<template lang="html">
  <dialog open>
    <header>
      <slot name="header"></slot>
    </header>
    <slot name="body"></slot>
  </dialog>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  dialog{
  margin:auto;
   position: fixed;
   top:20vh;
   /* left:30%; */
   width:50%;
   /* background-color:#ffc2b4; */
   /* color:#5b6d5b; */
   color:#810000;
   box-shadow: 0 2px 8px rgba(0,0,0,0.26);
   padding:1em;
   border-radius: 1em;
   /* border:1px solid #ff8882; */
   display: flex;
   justify-content: center;
   flex-direction: column;
  }
</style>
