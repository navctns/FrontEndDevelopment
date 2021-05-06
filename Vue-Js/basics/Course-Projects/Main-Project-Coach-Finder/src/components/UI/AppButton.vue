<template>
  <button class="std"
  :class="{flat:color==='flat',btnBlue:color==='blue',btnRed:color==='red',smallBtn:size==='sm',lgBtn:size==='lg',xlBtn:size==='xl'}"
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
  }
  .btnRed{
    background: #ff8474;
    color:#eee;
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

</style>
