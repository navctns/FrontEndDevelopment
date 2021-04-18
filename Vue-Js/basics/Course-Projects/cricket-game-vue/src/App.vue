<template>



  <!-- Score Card -->
  <div class="row game-container">
    <!-- SCORE CARD -->
    <!-- <score-card
      :runs-count="runsCount"
      :overs-count="oversCount"
      :balls-count="ballsCount"
      :wickets-count="wicketsCount"
    ></score-card> -->

    <!-- PLAYERS AND PITCH -->
    <!-- <div class="row valign-wrapper center-align"> -->
      <game-buttons
        :match-started="matchStarted"
        @start-match="triggerMatchStart"
        @update-scores="updateScores"
        @innings-change="onInningsChange"
      ></game-buttons>

      <!-- THIS OVER AND OTHER -->
      <!-- <instant-visuals
        :this-over = "thisOverItems"
      ></instant-visuals>-->

  </div>

  <div class="nav-wrapper row">

      <score-card
        :runs-count="runsCount"
        :overs-count="oversCount"
        :balls-count="ballsCount"
        :wickets-count="wicketsCount"
      ></score-card>


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
      totalOvers:2,
      oversCount:0,
      ballsCount:0,
      runsCount:0,
      wicketsCount:0,
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
        six:0
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
    onInningsChange(){
      this.oversCount = 0;
      this.ballsCount = 0;
      this.runsCount = 0;
      this.wickestCount = 0;
    }
  }
}
</script>

<style>
  .nav-wrapper{
    /* background-color: #52734d; */
    background-color:#f8f5f1;

    /* height:20vh; */
    color:#f8f5f1;
  }
  .nav-wrapper > *{
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
}
.game-container{
  background-color: #4cb050;
  height: 80vh;
  margin:0;
}
</style>
