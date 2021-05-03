<template lang="html">
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  methods:{
    addOne(){
      this.$store.commit('increment');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
