<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>
<script>
  import {
    computed,
    inject,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
  } from 'vue';
  export default{
    props:['firstName', 'lastName'],
    setup(props){
      const userName = computed(function(){
        return props.firstName + ' ' + props.lastName;
      });
      // context.emit('save-data'); can use emit like this
      //context can be set as the second arg in setup
      //INJECT DATA
      const age = inject('userAge');
      //LIFECYCLE HOOKS
      onBeforeMount(function(){
        console.log('onBeforeMount');
      });
      onMounted(()=>{
        console.log('onMounted');
      });
      onBeforeUpdate(() => {
        console.log('onBeforeUpdate');
      });
      onUpdated(() => {
        console.log('onUpdated');
      });
      onBeforeUnmount(() => {
        console.log('onBeforeUnmount');
      });
      onUnmounted(() => {
        console.log('onUnmounted');
      });
      return{
        userName,
        age,
      }
    }
  }
</script>
