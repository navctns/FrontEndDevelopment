<template lang="html">
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" /> -->
  <a href="">
    <!-- <i  class="fa-2x" :class="{fas:mode==='delete', faTrashAlt:mode==='delete'}"></i> -->
    <!-- <font-awesome-icon :icon="['fas','phone']"></font-awesome-icon> -->
    <!-- <font-awesome-icon :icon="['fab', 'twitter']" class="icon alt"/> -->
    <!-- <font-awesome-icon icon="user-secret"></font-awesome-icon> -->
    <font-awesome-icon icon="trash-alt"></font-awesome-icon>

  </a>
  <!-- <a href="" v-if="mode === 'save'"><i class="far fa-bookmark fa-2x"></i></a> -->
</template>

<script>
export default {
  props:['mode']
}
</script>

<style lang="css" scoped>
  .fa-trash-alt{
    color:#323232;
  }
  .fas:focus,
  .fas:hover{
    opacity: 0.8;
  }
</style>
