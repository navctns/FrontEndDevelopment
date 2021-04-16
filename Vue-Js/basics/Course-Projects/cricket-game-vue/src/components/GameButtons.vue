<template lang="html">
    <div class="col s4 m4 center-align">
      <!-- <a href="#"><img src="./assets/cricket.svg" alt="" @click.stop="playerBatting" v-show="!inningsOver" v-if="inningsNumber === 0"></a> -->
      <!-- <a href="#"><img src="./assets/cricket.svg" alt="" v-show="!inningsOver" v-if="inningsNumber === 1"></a> -->
      <a href="#"><img src="./assets/batsman4.jpg" alt="" @click.stop="playerBatting" v-show="!inningsOver" v-if="inningsNumber === 0"></a>
      <a href="#"><img src="./assets/batsman4.jpg" alt="" v-show="!inningsOver" v-if="inningsNumber === 1"></a>

    </div>

    <div class="col s4 m4">
      <div class="ball-banner center-align" >
        <div v-if="!matchStarted">
          <a class="waves-effect waves-light btn-large" @click="startMatch" >Start Match</a>
        </div>
        <div v-else-if="inningsOver">
          <p style="color:black;" v-if="inningsOver">Inning Over</p>
          <a class="waves-effect waves-light btn-large" @click="newInnings">Start Second Innings</a>
        </div>
        <div v-else-if="playerHits">
          <div v-if="currentBallScore === 0">
            <h4>Dot Ball</h4>
          </div>
          <div v-else-if="currentBallScore === 1">
            <h4>Its Just a Single</h4>
          </div>
          <div v-else-if="currentBallScore === 2">
            <h4>Scores a Double</h4>
          </div>
          <div v-else-if="currentBallScore === 3">
            <h4>Runs a Triple</h4>
          </div>
          <div v-else-if="currentBallScore === 4">
            <!-- <h4>Its a Four</h4> -->
            <img src="./assets/four.jpg" alt="">
          </div>
          <div v-else-if="currentBallScore === 6">
            <!-- <h4>Oh..Its a Six</h4> -->
            <img src="./assets/six3.jpg" alt="">
          </div>
          <div v-else-if="currentBallScore === 'nb'">
            <h4>Its a Noball</h4>
          </div>
          <div v-else-if="currentBallScore === 'wd'">
            <h4>Wide Ball</h4>
          </div>
          <div v-else-if="currentBallScore === 'wk'">
            <!-- <h4>Its a Wicket</h4> -->
            <img src="./assets/wicket2.webp" alt="">
            <h4>Wicket!!</h4>
          </div>

        </div>
        <div v-else>
          <h5>Bowling Starts...</h5>
        </div>
    </div>
  </div>
    <div class="col s4 m4 center-align">
      <a href="#"><img class="bowler" :style="bowlerStyles" src="./assets/bowling.gif" alt="" v-show="!inningsOver" v-if="inningsNumber === 0"></a>
      <a href="#"><img class="bowler" :style="bowlerStyles" src="./assets/bowling.gif" alt="" v-show="!inningsOver" @click="playerBatting" v-if="inningsNumber === 1"></a>

      <div class="bowling-bar" v-show="!inningsOver">
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
      scoreIndex:[0,1,2,3,4,6,'wd','nb','wk'],
      loadingStyles:{width:'100%'},
      bowlerStyles:{width:'20%'},
      loadingWidth:100,
      currentBallScore:'',
      maxOvers:2,
      ballsCount:0,
      oversCount:0,
      startBowling:false,
      ballTimer:0,
      inningsOver:false,
      inningsNumber:0,
      playerOne:{
        score:0,
        wickets:0,
      },
      playerTwo:{
        score:0,
        wickets:0,
      },
      playerHits:false,
    }
  },
  mounted(){
    console.log('mounted');
    // for(let i=0;i<12;i++){
    //   this.ballsCount++;
    //   console.log(this.ballsCount);
    // }
  },
  emit:['start-match','update-scores','innings-change'],
  watch:{
    ballsCount(value){
      if(value){
        if(value % 6 === 0){
          this.oversCount++;
        }
        setTimeout(()=>{
          this.showBowlingAnimations();
        },2000);
      }
    },
    oversCount(){
      if(this.oversCount === this.maxOvers){
        this.startBowling = false;
        this.inningsOver = true;
        this.inningsNumber++;
        //Store innings Score
        if(this.inningsNumber === 1){
          this.playerOne.score = this.runsCount;
          this.playerOne.wickets = 0;
        }else{
          this.playerTwo.score = this.runsCount;
          this.playerTwo.wickets = 0;
        }
      }else{
        this.ballsCount = 0;
      }
    }
  },
  methods:{
    showBowlingAnimations(){
      //Start Bowling
      this.playerHits = false;
      this.startBowling = true;
      //Change Bowlers Styles
      for(let i=20;i<23;i+=0.1){
        setTimeout(()=>{
          this.bowlerStyles.width = i+'%';
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
          this.bowlerStyles.width = '20%';
        },2000);
    },
    startMatch(){
      //Change Balls Count
      // this.ballsCount += 1;
      this.$emit('start-match','start');
        console.log('match start')
      this.showBowlingAnimations();

      // for(let i=0;i<12;i++){
      //   if(i%6 === 0){
      //     this.oversCount++;
      //   }
      //   this.ballsCount++;
      //   setTimeout(()=>{
      //       this.startBowling = true;
      //       this.showBowlingAnimations();
      //   },2000);
      //
      //
      // }

  },
  playerBatting(){
    this.playerHits = true;
    if(this.startBowling){
      const currentBallScore = randomNumberFromArray(this.scoreIndex);
      this.$emit('current-ball',currentBallScore);
      this.currentBallScore = currentBallScore;
      console.log(currentBallScore);
    }
    let ballOutput;
    if(this.currentBallScore === 'wk'){
      ballOutput = 0;
      this.ballsCount++;
    }else if(this.currentBallScore === 'nb' || this.currentBallScore === 'wd'){
      ballOutput = 1;
      // this.ballsCount--;
      // this.startBowling = true;
    }else{
      ballOutput = this.currentBallScore;
      this.ballsCount++;

    }
    this.$emit('update-scores',this.oversCount,this.ballsCount,ballOutput);

    this.startBowling = false;

   if(this.currentBallScore === 'nb' || this.currentBallScore === 'wd'){
     //Start Bowling in case no ball or wide (since ballcount is not incrementing)
     this.startBowling = true;
     setTimeout(()=>{
       this.showBowlingAnimations();
     },2000);

   }
  },
  newInnings(){
    this.runsCount = 0;
    this.oversCount = 0;
    this.ballsCount = 0;
    this.inningsOver = false;
    // this.$emit('update-scores',this.oversCount,this.ballsCount,0);
    this.$emit('innings-change');
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
    /* background:#52734d; */
  }

  .bowling-bar__value {
    /* background-color: #00a876; */
    /* background-color:#52734d; */
    background-color: #91c788;
    width: 100%;
    height: 100%;
  }
  .card {
    width:100%;
    height:auto;
  }
  .ball-banner{
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: #ddffbc;
    width:100%;
    height: 100%;
    color:#52734d;
    height: 30vh;
  }
</style>
