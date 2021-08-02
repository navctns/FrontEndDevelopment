<template lang="html">
  <div class="col s4 m4">
    <div class="bowling-bar">
      <div class="bowling-bar__value" :style="playerBarStyles"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.bowling-bar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.bowling-bar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}
</style>
