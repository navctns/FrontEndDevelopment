<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
  <div>
    <slot></slot>
    <i class="fas fa-chevron-right"></i>
  </div>

</template>
<style scoped>
  div {
    display: flex;
    justify-content: space-between;
  }
</style>
