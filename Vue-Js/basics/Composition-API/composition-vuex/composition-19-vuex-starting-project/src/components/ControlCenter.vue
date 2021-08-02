<template>
  <button @click="inc">Increment</button>
</template>

<script>
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    function inc() {
      console.log('inc');
      store.dispatch('increment');
    }

    return { inc };
  },
};
</script>
