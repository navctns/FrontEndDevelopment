<template>
  <!-- <img :src="logo" alt />
  <hello></hello> -->
    <div class="hello">
    ...
    <!-- Add a test button -->
    <ui-button icon="add" @click="$alert('Hello BalmUI')">Click Me</ui-button>
  </div>
</template>

<script>
// import Hello from '@/views/components/hello';
// import logo from '@/assets/logo.png';

export default {
  name: 'App',
  components: {
    // Hello
  },
  setup() {
    // return {
    //   logo
    // };
  }
};
</script>
