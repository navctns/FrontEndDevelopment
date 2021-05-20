<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>
<script>
  import { computed } from 'vue';
  export default{
    props:['firstName', 'lastName', 'age'],
    setup(props){
      const userName = computed(function(){
        return props.firstName + ' ' + props.lastName;
      });
      return{
        userName,
      }
    }
  }
</script>
