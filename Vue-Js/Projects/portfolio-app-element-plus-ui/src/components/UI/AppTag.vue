<template>
  <el-tag :class="{largeTag:width==='lg',textBlack:type==='warning'}"
    :type="type"
    :effect="effect"
    :size="size"
    >
    <span>{{ label }}</span>
  </el-tag>
</template>
<script>
  //Props:
  //type - type of label based on purpose(eg:success,info,danger,warning)
  //label - text inside
  //effect - plain/dark
  //size - medium/small/mini
  //You can enclose component inside <div class="tag-group">
  export default{
    props:['type','label','effect','size','width']
  }
</script>
<style scoped>
  span{
    font-size: 0.9em;
    font-weight:600;
  }
  .el-tag{
    margin:0.5em 0.1em;
  }
  .largeTag{
    width:90%;
    display: flex;
    justify-content: center;
  }
  .textBlack{
    color:#323232;
  }
</style>
