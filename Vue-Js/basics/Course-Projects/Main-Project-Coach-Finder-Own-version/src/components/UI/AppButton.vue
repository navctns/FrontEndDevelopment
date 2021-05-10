<template>
  <button class="std"
  :class="{flat:color==='flat',btnBlue:color==='blue',btnRed:color==='red',btnGreen:color==='green',smallBtn:size==='sm',lgBtn:size==='lg',xlBtn:size==='xl',xxlBtn:size==='xxl'}"
  >{{value}}</button>
</template>
<script>
  export default{
    props:['value', 'mode', 'size','color'],
  }
</script>
<style scoped>

  .std{
    padding:0.5em;
    border-radius: 0.5em;
    position:inherit;
    width:100%;
    margin:0;

  }
  .btnRed{
    background: #ff8474;
    color:#eee;
  }
  .btnGreen{
    background-color: #91c788;
    color:#323232;
  }
  .btnBlue{
    background: #3d84b8;
    color:#eee;
  }
  .flat{
    background-color: transparent;
    color:inherit;
  }
  .flat:focus,
  .flat:hover{
    /* background: #3d84b8; */
    /* background-color: inherit; */
    /* background: #ff8474; */
    background-color: #1e6f5c;
    color:#fafafa;
  }
  .btnGreen:hover,
  .btnGreen:focus,
  .btnBlue:hover,
  .btnBlue:focus,
  .btnRed:hover,
  .btnRed:focus{
    opacity: 0.8;
  }
  .smallBtn{
    width:20%;
  }
  .lgBtn{
    width:50%;
  }
  .xlBtn{
    width:80%;
  }
  .xxlBtn{
    width:100%;
  }

</style>
