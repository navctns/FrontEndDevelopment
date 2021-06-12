<template id="">
  <a class="btn"
  :class="{
    flat:mode === 'flat' && !active,std:mode === 'std',
    navButton:nav, otherBtn:mode === 'oth',
    textWhite:textColor==='white',
    textBlack:textColor==='black',
    bgBlack:mode ==='bg-black',
    bgBlue:mode ==='bg-blue',
    active:active}">
    {{value}}
  </a>
</template>
<script type="text/javascript">
  export default{
    props:{
      active:{
        type:Boolean,
        default:false,
      },
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
      },
      textColor:{
        type:String,
        required:false,
      }
    },
  }
</script>
<style media="screen" scoped>
  .btn{
    padding:0.5em;
    border-radius: 0.5em;
    width:10rem;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }
  .bgBlack{
    background: #161616;
    color:#fafafa;
  }
  .bgBlack:hover{
    background: #161616;
    color:#fafafa;
    opacity: 0.9;
  }
  .bgBlue{
    background: #293b5f;
    color:#fafafa;
  }
  .bgBlue:hover{
    background: #293b5f;
    color:#fafafa;
    opacity: 0.9;
  }
  .active{
    /* background-color: #b0eacd;
    color:#323232; */
    background: #03256c;
    color:#fafafa;
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
    background: #03256c;
    color:#fafafa;
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
  .textBlack:hover{
    color:#323232;
  }
  .textWhite:hover{
    color:#fafafa;
  }
</style>
