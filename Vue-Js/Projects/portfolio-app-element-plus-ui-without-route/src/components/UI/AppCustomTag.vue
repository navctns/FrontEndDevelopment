<template>
  <div
    class="std-tag"
    :class="{
      success:type==='success',plain:effect==='plain',
      sizeMedium:size==='medium'
      }">
    {{ label }}
  </div>
</template>
<script>
  //dark as default / also able to set plain
  //more colors are used
  export default{
    // props:['label','type','size','effect'],
    props:{
      label:{
        type:String,
        default:'tag1',
      },
      type:{
        type:String,
        default:'',
      },
      size:{
        type:String,
        default:'medium'
      },
      effect:{
        type:String,
      }
    }
  }

</script>
<style scoped>
  .std-tag{
    /* general styles for tag */
    border-radius: 0.5em;
    padding:0.2em;
    display: flex;
    justify-content: center;
    font-size: 1em;
    font-weight:600;
    border: solid 1px;
    flex-shrink: 1;

  }
  /* .sizeMedium{ */
    /* min-width: 3em; */
    /* max-width: 5em; */
    /* width:auto; */
  /* } */
  .success{
    background:#4AA96C;
    color:#fafafa;
    border-color:#4AA96C;
  }
  .plain{
    /* set plain background; */
    background: transparent !important;
    /* color:#323232 !important; */
  }
  .plain.success{
    /* to make the border color and font-color same */
    color:#4AA96C;
  }
</style>
