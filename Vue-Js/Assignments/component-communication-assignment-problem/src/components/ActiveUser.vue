<template lang="html">
  <div>
    <h2>Username:{{userData.username}}</h2>
    <h3>Age:{{userData.age}}</h3>
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
