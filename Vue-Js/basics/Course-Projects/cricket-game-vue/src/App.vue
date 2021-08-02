<template >


  <div :class="{gameCelebration:boundaryCelebration,celebrationBox:!boundaryCelebration}">
    <!-- GAME CONTAINER -->
    <div class="row game-container" >

        <game-buttons
          :match-started="matchStarted"
          :second-innings="secondInnings"
          @update-scores="updateScores"
          @innings-change="onInningsChange"
          @ball-celebration="showCelebrations"
        ></game-buttons>


    </div>
  </div>


  <div class="nav-wrapper">

      <score-card
        :runs-count="runsCount"
        :overs-count="oversCount"
        :balls-count="ballsCount"
        :wickets-count="wicketsCount"
      ></score-card>

        <!-- GAME CORE CONTROLS -->
        <div class="col offset-m4 s12 m12 ball-banner center-align">
        <!-- <div> -->
            <div v-if="!matchStarted">
              <a class="waves-effect waves-light btn-large" @click="startMatch">Start Match</a>
            </div>
            <div v-else-if="inningsNumber === 1 && !secondInnings">
              <a class="waves-effect waves-light btn-large" @click="startSecondInnings">Start Second Innings</a>
            </div>
            <div class="stump-container" v-else>
              <img src="./assets/wickets.svg" alt="" class="stump-img">

            </div>
        </div>

        <!-- THIS OVER AND OTHER -->
        <instant-visuals
          :this-over = "thisOverItems"
        ></instant-visuals>



  </div>


</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

function randomNumberFromArray(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

export default {
  data(){
    return{
      matchStarted:false,
      secondInnings:false,
      totalOvers:2,
      oversCount:0,
      ballsCount:0,
      runsCount:0,
      wicketsCount:0,
      boundaryCelebration:false,
      inningsNumber:0,
      scoreIndex:[0,1,2,3,4,5,6,'wd','nb','wk'],//Inactive
      loadingWidth:'100',
      loadingStylesValue:{width:'100%'},
      bowlerStylesValue:{width:'20%'},
      thisOverItems:{
        one:0,
        two:0,
        three:0,
        four:0,
        five:0,
        six:0,
        matchStarted:false,
      },
    }
  },
  watch:{
    matchStarted(value){
      if(value){
        console.log('match start');
        //Change Bowlers Styles
        for(let i=20;i<22;i+=0.1){
          setTimeout(()=>{
            this.bowlerStylesValue = {width:i+'%'};
          },300);
        }
        //Loading Animation
          for(let i=100;i>=0;i-=0.1){
            setTimeout(()=>{
              this.loadingWidth = i;
              //Change loader width decreasing
              this.loadingStylesValue = {width:this.loadingWidth+'%'};
            },300)
          }
          //Reset Loader to Full Width
          setTimeout(()=>{
            this.loadingWidth = 100;
            //Set to Full Width
            this.loadingStylesValue = {width:this.loadingWidth+'%'};
          },2000);
          // this.bowlerStyles = {width:'20%'};

      }
    }
  },
  // computed:{
  //   loadingStyles(){
  //     this.loadingStylesValue = {width:this.loadingWidth+'%'};
  //     return {width:`${this.loadingWidth}%`}
  //   }
  // },
  methods:{
    triggerMatchStart(msg){
      if(msg==='start'){
        this.matchStarted = true;
        console.log(this.matchStarted);
        //START BOWLING
        // let over = 0;
        // const totalBalls = this.totalOvers * 6;
        // console.log(totalBalls);
        let currentBall = randomNumberFromArray(this.scoreIndex);
        console.log(currentBall);

      }
    },
    // addCurrentBallScore(ballValue){
    //   console.log(ballValue);
    // },
    updateScores(overs,balls,wickets,ballOutput,thisOver){
      console.log(thisOver);
      this.thisOverItems = thisOver;
      //Update values from data passed from game buttons component
      this.oversCount = overs;
      this.ballsCount = balls;
      this.wicketsCount = wickets;
      this.runsCount += ballOutput;
    },
    onInningsChange(inningsNumber){
      this.oversCount = 0;
      this.ballsCount = 0;
      this.runsCount = 0;
      this.wicketsCount = 0;
      this.inningsNumber = inningsNumber;
    },
    startMatch(){
      this.matchStarted = true;
    },
  startSecondInnings(){
    this.secondInnings = true;
  },
  showCelebrations(){
    this.boundaryCelebration = true;
    setTimeout(()=> this.boundaryCelebration = false,2000);
  },

  }
}
</script>

<style>
  .nav-wrapper{
    /* background-color: #52734d; */
    background-color:#f8f5f1;

    /* height:20vh; */
    color:#f8f5f1;
    border-radius: 30%;
    display: flex;
    width: 100%;
    gap:1em;
    margin: 1em;
    padding:1em;
  }
  .nav-wrapper > * {
    width:100%;
  }
.scores-card{
  background-color:#91c788;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.nav-wrapper{
  background-color: #4cb050;
  margin:0;
  border:2px solid #fdca40;

}
.game-container{
  background-color: #4cb050;
  height: 83vh;
  margin:0;
  border-radius: 30%;
  border:2px solid #fdca40;
}
.gameCelebration{
  background: url('./assets/Crowd-Of-Kids.svg');
  /* background: url('./assets/crowd.jpg'); */

  z-index: -1;
  border-radius: 0;
}
.celebrationBox{
  width:100%;
  background: #0a8043;
}
#app{
  background: #0a8043;
}
.stump-img{
  width:30%;
  height: auto;
}
.stump-container{
  /* position: absolute; */
  background-color:#e2b07e;
  height: 100%;
  padding:0;
}

</style>
