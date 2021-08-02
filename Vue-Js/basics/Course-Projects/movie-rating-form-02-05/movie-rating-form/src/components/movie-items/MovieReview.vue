<template>
  <div>
    <p>{{content}}</p>
    <span class="pull-right">
      <h5>-{{author}}</h5>
    </span>
  </div>
</template>
<script>
  export default{
    props:['content','author']
  }
</script>
<style scoped>
.pull-right{
  display: flex;
  justify-content:flex-start;
}
div{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
