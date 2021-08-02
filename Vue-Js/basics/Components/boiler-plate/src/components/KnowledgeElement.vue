<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <!-- WITHOUT Provide-inject function -->
    <!-- <button class="btn" @click="$emit('select-topic', id)">Learn More</button> -->
    <!-- WITH Provide-inject function -->
    <button class="btn" @click="selectTopic(id)">Learn More</button>

  </li>
</template>

<script>
export default {
  props: ['id', 'topicName', 'description'],
  // emits: ['select-topic'],
  inject:['selectTopic'],
};
</script>
<style>
  .btn{
    /* display: flex; */
    width:50%;
    border:1px solid #a2b29f;
    background: #8fd9a8;
    color:#194350;
    padding:0.5em;
  }
</style>
