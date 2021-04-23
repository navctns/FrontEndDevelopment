<template>
  <!-- Scoped Slot -->
  <ul>
    <li v-for="goal in goals" :key="goal">
    <!-- {{goal}} -->
    <!-- Passing props to slot -->
    <slot :item="goal" anotherProp="$$$....$$$"></slot>
    </li>
  </ul>
</template>
<script>
  export default{
    data(){
      return{
        goals:['Finish the course','Learn Vue'],
      };
    }
  }
</script>
<style scoped>
p{
  color:#000;
}
</style>
