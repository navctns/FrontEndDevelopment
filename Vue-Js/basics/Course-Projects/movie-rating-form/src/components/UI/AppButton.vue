<template id="">
  <a class="btn" :class="{flat:mode === 'flat',std:mode === 'std',navButton:nav}">{{value}}</a>
  <!-- <a class="btn">{{value}}</a> -->

</template>
<script type="text/javascript">
  export default{
    props:{
      mode:{
        type:String,
        default:'std',
        // required:false,
      },
      value:{
        type:String,
        required:true,
      },
      nav:{
        type:Boolean,
        default:false,
      }
    },
    mounted(){
      console.log('nav button',this.nav);
    }
  }
</script>
<style media="screen" scoped>
  .btn{
    padding:1em;
    border-radius: 0.5em;
    width:10rem;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }
  .navButton{
    background-color: #21bf73;
  }
  .std{
    background-color: #21bf73;
    text-decoration: none;
  }
  .flat{
    background-color: transparent;
  }
  .flat:focus,
  .flat:hover{
      background-color: #b0eacd;
  }
  .router-link-active.flat{
    background-color: #21bf73;
    padding:1em;
  }
</style>
