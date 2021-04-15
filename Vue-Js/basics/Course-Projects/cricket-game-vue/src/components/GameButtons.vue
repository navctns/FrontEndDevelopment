<template lang="html">
    <div class="col s4 m4 center-align">
      <a href="#"><img src="./assets/cricket.svg" alt="" @click.stop="playerBatting"></a>

    </div>

    <div class="col s4 m4 center-align">
      <a class="waves-effect waves-light btn-large" @click="startMatch" v-if="!matchStarted">Start Match</a>
      <p style="color:black;">{{currentBallScore}}</p>
    </div>
    <div class="col s4 m4 center-align">
      <a href="#"><img class="bowler" :style="bowlerStyles" src="./assets/bowling.gif" alt=""></a>

      <div class="bowling-bar">
        <div class="bowling-bar__value" :style="loadingStyles"></div>
      </div>

    </div>
</template>

<script>
function randomNumberFromArray(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

export default {
  props:{
    matchStarted:{
      type:Boolean,
      required:true,
    },

  },
  data(){
    return{
      matchStartedStatus:this.matchStarted,
      scoreIndex:[0,1,2,3,4,5,6,'wd','nb','wk'],
      loadingStyles:{width:'100%'},
      bowlerStyles:{width:'20%'},
      loadingWidth:100,
      currentBallScore:'',
    }
  },
  emit:['start-match'],

  methods:{
    startMatch(){
      this.$emit('start-match','start');
        console.log('match start');
        //Change Bowlers Styles
        for(let i=20;i<22;i+=0.1){
          setTimeout(()=>{
            this.bowlerStyles = {width:i+'%'};
          },300);
        }
        //Loading Animation
          for(let i=100;i>=0;i-=0.1){
            setTimeout(()=>{
              this.loadingWidth = i;
              //Change loader width decreasing
              this.loadingStyles = {width:this.loadingWidth+'%'};
            },300)
          }
          //Reset Loader to Full Width
          setTimeout(()=>{
            this.loadingWidth = 100;
            //Set to Full Width
            this.loadingStyles = {width:this.loadingWidth+'%'};
          },2000);

  },
  playerBatting(){
    const currentBallScore = randomNumberFromArray(this.scoreIndex);
    this.$emit('current-ball',currentBallScore);
    this.currentBallScore = currentBallScore;
    console.log(currentBallScore);
  },
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
    margin: 0;
  }
  .bowling-bar {
    width: 100%;
    height: 40px;
    border: 1px solid #575757;
    /* margin: 1rem 0; */
    background: #fde5e5;
  }

  .bowling-bar__value {
    background-color: #00a876;
    width: 100%;
    height: 100%;
  }
</style>
