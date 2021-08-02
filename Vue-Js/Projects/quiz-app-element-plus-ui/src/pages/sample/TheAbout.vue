<template>
  <h3>About Page</h3>
  <p>{{aboutContent}}</p>
</template>
<script>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  export default{

    setup(){
      const store = useStore();
      const aboutContent = computed(()=>{
        return store.getters.aboutText;
      });
      return{
        aboutContent,
      }
    }
  }
</script>
