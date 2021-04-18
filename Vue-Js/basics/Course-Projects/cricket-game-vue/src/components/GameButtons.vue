<template lang="html">


  <!--MENUS -->
  <div class="col s4 m4">
      <!-- <div class="row"> -->

        <div class="ball-banner center-align">

            <div v-if="!matchStarted">
              <a class="waves-effect waves-light btn-large" @click="startMatch" >Start Match</a>
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
            <div v-else-if="inningsNumber === 1">
              <h5 style="color:black;" v-if="inningsOver">Inning Over</h5>
              <a class="waves-effect waves-light btn-large" @click="newInnings">Start Second Innings</a>
            </div>
            <div v-else-if="inningsNumber === 2">
              <h5>{{winningCase}}</h5>
            </div>
            <div v-else-if="startBowling">
              <h4>Start Bowling...</h4>
            </div>
            <div>

            </div>

      </div>
    </div>
    <!-- <div class="col s4 m4 center-align"> -->
    <div class="col s4 m4 center-align game-container">
      <div class="game-play">

        <!-- <div v-show="ballRelease === 'running'"> -->
        <div>
          <!-- <p style="color:black;">Running</p> -->
          <a href="#"><img class="bowler" :style="bowlerStyles" src="./assets/bowling.gif" alt="" v-show="!inningsOver" v-if="inningsNumber === 0"></a>
          <a href="#"><img class="bowler" :style="bowlerStyles" src="./assets/bowling.gif" alt="" v-show="!inningsOver" @click="playerBatting" v-if="inningsNumber === 1"></a>
        </div>

        <div v-show="ballRelease === 'relasing'" class="ball-container">
            <!-- <p style="color:black;">Relasing</p> -->
            <a href="#"><img class="bowler" :style="ballStyles"  src="./assets/cricketball.svg" alt="" v-show="!inningsOver" v-if="inningsNumber === 0"></a>
            <a href="#"><img class="bowler" :style="ballStyles"  src="./assets/cricketball.svg" alt="" v-show="!inningsOver" @click="playerBatting" v-if="inningsNumber === 1"></a>

        </div>
        <div v-show="ballRelease === 'running'" class="ball-container">

        </div>


          <!-- <div class="bowling-bar" v-show="!inningsOver">
            <div class="bowling-bar__value" :style="loadingStyles"></div>
          </div> -->



      </div>
      <!-- BATSMAN -->
      <!-- <div class="col s4 m4 center-align" :class="{battingLg:playerHits}"> -->
      <div class="batsman-side center-align" :class="{battingLg:playerHits}">

        <!-- <a href="#"><img src="./assets/cricket.svg" alt="" @click.stop="playerBatting" v-show="!inningsOver" v-if="inningsNumber === 0"></a> -->
        <!-- <a href="#"><img src="./assets/cricket.svg" alt="" v-show="!inningsOver" v-if="inningsNumber === 1"></a> -->
        <a href="#"><img class="bat-img" src="./assets/cricket-bat-01.svg"  alt="" @click.stop="playerBatting" v-show="!inningsOver" v-if="inningsNumber === 0"></a>
        <a href="#"><img class="bat-img" src="./assets/cricket-bat-01.svg"  alt="" v-show="!inningsOver" v-if="inningsNumber === 1"></a>
      </div>
      <div class="stump-container">
        <img src="./assets/wickets.svg" alt="" class="stump-img">

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
      //Bowler
      bowlerImg:"./assets/batsman-2.jpg",
      ballRelease:'running',
      ballStyles:{width:'10%',margin:0},
      //Match General
      matchStartedStatus:this.matchStarted,
      scoreIndex:[0,1,2,3,4,6,'wd','nb','wk'],
      loadingStyles:{width:'100%'},
      bowlerStyles:{width:'10%'},
      loadingWidth:100,
      currentBallScore:'',
      maxOvers:2,
      ballsCount:0,
      oversCount:0,
      wicketsCount:0,
      startBowling:false,
      ballTimer:0,
      //Results
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
      thisOver:{
        one:0,
        two:0,
        three:0,
        four:0,
        five:0,
        six:0
      },
    }
  },
  mounted(){
    console.log('mounted');
  },
  emit:['start-match','update-scores','innings-change'],
  watch:{
    ballsCount(value){
      if(value){
        if(value % 6 === 0){
          this.oversCount++;

          //This over value set to zero(remove prev values)
          this.thisOver = {
            one:0,
            two:0,
            three:0,
            four:0,
            five:0,
            six:0
          }
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
  computed:{
    bowlerActions(){
      console.log(this.bowlerImg);
      return this.bowlerImg.toString();
    },
  winningCase(){
      if(this.inningsNumber === 2){
        console.log('match result');
        if(this.playerOne.score > this.playerTwo.score){
          return 'Player 1 Won the match'
        }else if(this.playerOne.score === this.playerTwo.score){
          return 'Match Tied'
        }else{
          return 'Player 2 Won the match'
        }
      }
      return '';
    }
  },
  methods:{
    showBowlingAnimations(){
      //Start Bowling
      this.playerHits = false;
      this.startBowling = true;
      //Change Bowlers Styles
      // for(let i=20;i<23;i+=0.1){
      //   setTimeout(()=>{
      //     this.bowlerStyles.width = i+'%';
      //   },300);
      // }
      //Loading Animation
        for(let i=100;i>=0;i-=0.1){
          setTimeout(()=>{
            this.loadingWidth = i;
            //Change loader width decreasing
            this.loadingStyles = {width:this.loadingWidth+'%'};
            if(this.loadingWidth < 70){
              //bowler action image
              this.bowlerImg= './assets/bowler21.jpg'
              this.ballRelease = 'relasing';
              // this.bowlerStyles = {width:String(10-i)+'%'};
              console.log(this.ballRelease);
              //Ball animation with width change
              this.ballStyles = {width:String(40-i)+'%',margin:String(100-i)+'px'};
              // this.ballStyles = {width:String(30-i)+'%'};
            }else if(this.loadingWidth < 7){
              console.log('running',this.ballRelease);

            }
          },300)
        }

        this.bowlerImg= './assets/bowler2.jpg'

        //Reset Loader to Full Width
        setTimeout(()=>{
          this.loadingWidth = 100;
          //Set to Full Width
          this.loadingStyles = {width:this.loadingWidth+'%'};
          this.bowlerStyles.width = '10%';
          //bowler still image
          this.ballRelease = 'running';
        },2000);
    },
    startMatch(){
      //Change Balls Count
      // this.ballsCount += 1;
      this.$emit('start-match','start');
        console.log('match start')
      this.showBowlingAnimations();

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
      //Increase wickets
      this.wicketsCount++;
      this.setThisOver(this.ballsCount,'wk');
      this.ballsCount++;
    }else if(this.currentBallScore === 'nb' || this.currentBallScore === 'wd'){
      ballOutput = 1;
      if(this.currentBallScore === 'nb'){
        this.setThisOver(this.ballsCount,'nb');
      }else if(this.currentBallScore === 'wd'){
        this.setThisOver(this.ballsCount,'wd');
      }
      // this.ballsCount--;
      // this.startBowling = true;
    }else{
      ballOutput = this.currentBallScore;
      this.setThisOver(this.ballsCount, this.currentBallScore);
      this.ballsCount++;

    }
    this.$emit('update-scores',this.oversCount,this.ballsCount,this.wicketsCount,ballOutput, this.thisOver);

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
  setThisOver(ball,value){
    if(ball === 0){
      this.thisOver.one = value;
    }else if(ball === 1){
      this.thisOver.two = value;
    }else if(ball === 2){
      this.thisOver.three = value;
    }else if(ball === 3){
      this.thisOver.four = value;
    }else if(ball === 4){
      this.thisOver.five = value;
    }else if(ball === 5){
      this.thisOver.six = value;
    }
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
  .batting-lg{
    transform: scale(1.1);
  }
  .bat-img{
    width:30%;
    height: auto;
  }
  .stump-img{
    width:30%;
    height: auto;
  }
.game-play{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:#e2b07e;
  height: 55vh;
}
.game-play > *{
  width:100%;
}
.batsman-side{
  /* display: fixed; */
  margin-bottom: 0;
  /* margin-top: 4em; */
  /* position:sticky; */
  justify-content:bottom;
  align-items: bottom;
  background-color:#e2b07e;


}
.ball-container{
  height: 30vh;
  background-color:#e2b07e;
}
.stump-container{
  background-color:#e2b07e;

}
.game-container{
  background-color:#e2b07e;
  -moz-box-shadow:    inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow:         inset 0 0 10px #000000;
}
.btn-large{
  background-color: #52734d;

}
</style>
