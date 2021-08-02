<template lang="html">
  <button @click="increment">Add 1</button>
  <button @click="increase({value:15})">Add 15</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods:{
    // addOne(){
    //   // this.$store.commit('increment');
    //   this.$store.dispatch('increment');
    // }
    ...mapActions('numbers',['increment','increase'])
  }
}
</script>

<style lang="css" scoped>
</style>
