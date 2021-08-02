<template>
  <section>
    <h2>Select a Topic</h2>
    <!-- WITHOUT Provide-inject function -->
    <!-- <knowledge-grid @select-topic="$emit('select-topic', $event)"></knowledge-grid> -->
    <!-- WITH Provide-inject function -->
    <knowledge-grid></knowledge-grid>

  </section>
</template>

<script>
export default {
  props: ['topics'],
  emits: ['select-topic'],
};
</script>
<style>
  section{
    border-radius: 1em;
    border: solid #a2b29f;
    padding:1em;
    /* margin:1em; */
    /* width:100%; */
  }
  section h2 {
    text-align: center;
  }

</style>
