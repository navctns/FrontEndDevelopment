<template lang="html">
    <div class="col s4 m4 center-align">
      <a href="#"><img src="./assets/cricket.svg" alt=""></a>
    </div>
    <div class="col s4 m4 center-align">
      <div class="bowling-bar">
        <div class="bowling-bar__value" :style="loadingStyles"></div>
      </div>
      <a class="waves-effect waves-light btn-large" @click="startMatch">Start Match</a>
    </div>
    <div class="col s4 m4 center-align">
      <a href="#"><img class="bowler" src="./assets/bowling.gif" alt=""></a>
    </div>
</template>

<script>
export default {
  props:{
    matchStarted:{
      type:Boolean,
      required:true,
    }
  },
  data(){
    return{
      matchStartedStatus:this.matchStarted,
    }
  },
  emit:['start-match'],

  methods:{
    startMatch(){
      this.$emit('start-match','start');
    }
  }
}
</script>

<style lang="css" scoped>
  img{
    width:50%;
    height:auto;
  }
  .bowler{
    width:20%;
    height:auto;
  }
  .bowling-bar {
    width: 100%;
    height: 40px;
    border: 1px solid #575757;
    margin: 1rem 0;
    background: #fde5e5;
  }

  .bowling-bar__value {
    background-color: #00a876;
    width: 100%;
    height: 100%;
  }
</style>
