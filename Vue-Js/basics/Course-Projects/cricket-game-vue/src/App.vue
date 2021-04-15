<template>
  <nav>
  <div class="nav-wrapper">
    <a href="#" class="brand-logo center">Pro-Cricket</a>
    <ul id="nav-mobile" class="left hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <li><a href="collapsible.html">JavaScript</a></li>
    </ul>
  </div>
  <!-- Score Card -->
  <div class="row">
    <score-card
      :runs-count="runsCount"
      :overs-count="oversCount"
      :balls-count="ballsCount"
    ></score-card>
    <instant-visuals></instant-visuals>
  </div>
  <div class="row valign-wrapper center-align">
    <game-buttons
      :match-started="matchStarted"
      @start-match="triggerMatchStart"
      @current-ball="addCurrentBallScore"
      @update-scores="updateScores"
      @innings-change="onInningsChange"
    ></game-buttons>
    <!-- Removed Props -->
    <!-- :loading-styles="loadingStylesValue" -->
    <!-- :bowler-styles="bowlerStylesValue" -->
  </div>
  <!-- <a href="#"><img src="./assets/cricket.svg" alt=""></a> -->
</nav>
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
      wickestCount:0,
      scoreIndex:[0,1,2,3,4,5,6,'wd','nb','wk'],//Inactive
      loadingWidth:'100',
      loadingStylesValue:{width:'100%'},
      bowlerStylesValue:{width:'20%'},
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



        // setTimeout(()=>{
        //   console.log('time out 300');
        //   for(let i=90;i>=80;i--){
        //     this.loadingWidth = 90;
        //     this.loadingStylesValue = {width:this.loadingWidth+'%'};
        //   }
        //   // this.loadingWidth = 90;
        //
        //   setTimeout(()=>{
        //     console.log('time out 300');
        //     this.loadingWidth = 80;
        //     this.loadingStylesValue = {width:this.loadingWidth+'%'};
        //
        //   },3000);
        // },4000);
        //
        // setTimeout(()=>{
        //   console.log('time out 300');
        //   this.loadingWidth = 60;
        //   this.loadingStylesValue = {width:this.loadingWidth+'%'};
        //   setTimeout(()=>{
        //     this.loadingWidth = 50;
        //     this.loadingStylesValue = {width:this.loadingWidth+'%'};
        //
        //   },3000);
        //   setTimeout(()=>{
        //     this.loadingWidth = 40;
        //     this.loadingStylesValue = {width:this.loadingWidth+'%'};
        //
        //   },3000);
        // },4000);
        //
        //   setTimeout(()=>{
        //     console.log('time out 300');
        //     this.loadingWidth = 30;
        //     this.loadingStylesValue = {width:this.loadingWidth+'%'};
        //     setTimeout(()=>{
        //       console.log('time out 300');
        //       this.loadingWidth = 20;
        //       this.loadingStylesValue = {width:this.loadingWidth+'%'};
        //
        //     },3000);
        //
        //
        //     setTimeout(()=>{
        //       console.log('time out 300');
        //       this.loadingWidth = 10;
        //       this.loadingStylesValue = {width:this.loadingWidth+'%'};
        //     },3000);
        //   },4000);
        //
        //
        //     setTimeout(()=>{
        //       console.log('time out 300');
        //       this.loadingWidth = 0;
        //       this.loadingStylesValue = {width:this.loadingWidth+'%'};
        //
        //     },4000);



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
        //
        // for (let i=0;i<totalBalls;i++){
        //
        // }

        // while(this.oversCount <= this.totalOvers){
        //
        //   if(this.ballsCount !=0){
        //     if(this.ballsCount % 6 === 0){
        //       this.oversCount +=1;
        //     }
        //   }
        //   //Ball Details
        //   let currentBall = randomNumberFromArray(this.scoreIndex);
        //   console.log(currentBall);
        // }
        // while(over <= this.totalOvers ){
        //   //Details of delivered ball
        //   let currentBall = randomNumberFromArray(this.scoreIndex);
        //   setTimeout(()=>{
        //     console.log(currentBall)
        //     // this.ballsCount += 1;
        //     over +=1;
        //   },2000);
        // }
      }
    },
    addCurrentBallScore(ballValue){
      console.log(ballValue);
    },
    updateScores(overs,balls,ballOutput){
      //Update values from data passed from game buttons component
      this.oversCount = overs;
      this.ballsCount = balls;
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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
