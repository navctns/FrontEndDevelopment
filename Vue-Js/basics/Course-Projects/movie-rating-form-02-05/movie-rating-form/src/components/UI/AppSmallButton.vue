<template id="">
  <!-- <a class="btn" :class="{flat:mode === 'flat',std:mode === 'std',navButton:nav, otherBtn:mode === 'oth'}">{{value}}</a> -->
  <button class="btn">{{value}}</button>

</template>
<script type="text/javascript">
  export default{
    props:{
      // mode:{
      //   type:String,
      //   default:'std',
      //   // required:false,
      // },
      value:{
        type:String,
        required:true,
      },
      // nav:{
      //   type:Boolean,
      //   default:false,
      // }
    },
    mounted(){
      // console.log('nav button',this.nav);
    }
  }
</script>
<style scoped>
  .btn{
    padding:0.5em;
    border-radius: 0.5em;
    /* width:3rem; */
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    background-color: #91c788;
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
  .otherBtn{
    background-color: #1e6f5c;
    color:#fff;
  }
  .otherBtn:focus,
  .otherBtn:hover{
    background-color: #1e6f5c;
    opacity: 0.9;
  }
  .router-link-active.flat{
    background-color: #21bf73;
    padding:1em;
  }

</style>
