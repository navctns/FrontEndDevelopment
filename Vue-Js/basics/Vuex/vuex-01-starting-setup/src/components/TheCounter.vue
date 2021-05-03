<template lang="html">
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  computed:{
    counter(){
      return this.$store.state.counter;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
