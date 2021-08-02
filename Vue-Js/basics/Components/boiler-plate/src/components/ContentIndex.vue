<template>
<base-cardslot>
    <h3>{{topicTitle}}</h3>
    <div>
      <h4>Contents</h4>
      <ul>
        <li>Introduction</li>
        <li>Art and Aesthetics</li>
        <li>Kierkegaard on Art</li>
      </ul>
    </div>
</base-cardslot>
</template>
<script>
  export default{
    props:['topicTitle'],
  }
</script>
