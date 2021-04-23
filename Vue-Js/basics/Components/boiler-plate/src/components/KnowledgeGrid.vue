<template>

  <ul class="topics-container">
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      ></knowledge-element>
      <!-- WITHOUT Provide-inject function -->
  <!-- @select-topic="$emit('select-topic', $event)" -->


  </ul>

</template>

<script>
export default {
  // props: ['topics'],
  emits: ['select-topic'],
  inject:['topics'],
};
</script>
<style scoped>
/* font-family:Sans-serif; */
.topics-container{
  display: flex;
  gap:1em;
  /* width:100%; */
  padding:0;
}
.topics-container > *{
  width:100%;
  /* height: auto; */
}
ul{
  display: flex;
  gap:1em;
  /* width:100%; */
  padding:0;
}
li {
  text-decoration: none;
  list-style: none;
  background: #d5ecc2;
  padding:1em;
  border-radius: 1em;
}
</style>
