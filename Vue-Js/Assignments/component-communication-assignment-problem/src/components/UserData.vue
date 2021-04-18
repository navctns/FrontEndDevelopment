<template lang="html">
  <div>
    <h4>Name:{{userData.name}}</h4>
    <h5>Age:{{userData.age}}</h5>
  </div>
</template>

<script>
export default {
  props:{
    userData:Object,
  }
}
</script>

<style lang="css" scoped>
</style>
