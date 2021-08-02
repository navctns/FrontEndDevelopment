<template lang="html">


  <!--MENUS -->
  <!-- <div class="col s4 m4">

      <div class=" row ball-banner-container  center-align">

    </div>
    </div> -->
    <!-- LEG SIDE CANVAS -->
    <canvas class="col s4 m4 center-align game-ball-action" id="left-ballCanvas">
      <ball-action></ball-action>
    </canvas>
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

            <div v-if="inningsNumber === 1 && !secondInnings">
              <h5 style="color:black;" v-if="inningsOver">Inning Over</h5>
              <a class="waves-effect waves-light btn-large" >Start Second Innings</a>
            </div>
            <div v-else-if="inningsNumber === 2">
              <h5>{{winningCase}}</h5>
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
            <div v-else-if="!playerHits">
              <a href="#"><img class="bowler" :style="ballStyles"  src="./assets/cricketball.svg" alt="" v-show="!inningsOver" v-if="inningsNumber === 0"></a>
              <a href="#"><img class="bowler" :style="ballStyles"  src="./assets/cricketball.svg" alt="" v-show="!inningsOver" @click="playerBatting" v-if="inningsNumber === 1"></a>
            </div>

        </div>
        <div v-show="ballRelease === 'running'" class="ball-container">

        </div>


          <!-- <div class="bowling-bar" v-show="!inningsOver">
            <div class="bowling-bar__value" :style="loadingStyles"></div>
          </div> -->



      </div>
      <!-- BATSMAN -->
      <!-- <div class="col s4 m4 center-align" :class="{battingLg:playerHits}"> -->
      <div class="batsman-side left-align" :class="{battingLg:playerHits}">

        <!-- <a href="#"><img src="./assets/cricket.svg" alt="" @click.stop="playerBatting" v-show="!inningsOver" v-if="inningsNumber === 0"></a> -->
        <!-- <a href="#"><img src="./assets/cricket.svg" alt="" v-show="!inningsOver" v-if="inningsNumber === 1"></a> -->
        <div class="bat-click-zone">
          <a href="#"><img class="bat-img" src="./assets/cricketbat.svg"  alt="" @click.stop="playerBatting" v-show="!inningsOver" v-if="inningsNumber === 0"></a>
          <a href="#"><img class="bat-img" src="./assets/cricketbat.svg"  alt="" v-show="!inningsOver" v-if="inningsNumber === 1"></a>

        </div>
      </div>
      <!-- <div class="stump-container">
        <img src="./assets/wickets.svg" alt="" class="stump-img">

      </div> -->

    </div>

    <canvas class="col s4 m4 center-align game-ball-action" id="ballCanvas">
      <ball-action></ball-action>
    </canvas>







</template>

<script>
function randomNumberFromArray(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

import BallAction from './BallAction.vue';

export default {
  props:{
    matchStarted:{
      type:Boolean,
      required:true,
      default:false,
    },
    secondInnings:Boolean,

  },
  components:{
    BallAction,
  },
  data(){
    return{
      //Ball Animations
      // ballCanvas:this.$el.querySelector("#ballCanvas"),
      // ballCanvas:this.$refs.ballCanvas,
      ballCanvas:'',
      ctx : '',
      x:0,
      y:0,
      dx:0,
      dy:0,
      ballInitialY:0,
      shotPatternsRight : [
        {dx:6,dy:-2},
        {dx:6,dy:-3},
        {dx:6,dy:-6},
        {dx:6,dy:-1},
      ],
      //SHOT LEFT
      leftCanvas:'',
      lCtx:'',
      lx:0,
      ly:0,
      ldx:0,
      ldy:0,
      shotPatternsLeft : [
        {dx:-6,dy:-2},
        {dx:-6,dy:-3},
        {dx:-6,dy:-6},
        {dx:-6,dy:-1},
      ],
      leftBallInitialY:0,
      //BOWLER
      bowlerImg:"./assets/batsman-2.jpg",
      ballRelease:'running',
      ballStyles:{width:'10%',margin:0},
      //Match General
      // matchStartedStatus:this.matchStarted,
      scoreIndex:[0,1,2,3,4,6,'wd','nb','wk'],
      loadingStyles:{width:'100%'},
      bowlerStyles:{width:'10%'},
      loadingWidth:100,
      currentBallScore:0,
      maxOvers:2,
      ballsCount:0,
      oversCount:0,
      wicketsCount:0,
      startBowling:false,
      ballTimer:0,
      boundaryCelebration:false,
      startSecondInnings:this.secondInnings,
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
    //Mounts The Canvases for showing Ball Movement on Left SIDE
    // and right side
    // console.log('mounted');
    var canvas = document.getElementById("ballCanvas");
    console.log(canvas);
    var ctx = canvas.getContext("2d");

    this.ballCanvas = canvas;
    this.ctx = ctx;
    this.x = canvas.width/2;
    this.y = canvas.height-30;
    // this.x = 20;
    // this.y = canvas.height;
    this.ballInitialY = canvas.height-5;
    //LEFT BALL CANVAS
    const leftCanvas = document.getElementById("left-ballCanvas");
    const lCtx = leftCanvas.getContext("2d");
    this.leftCanvas = leftCanvas;
    this.lCtx = lCtx;
    this.lx = leftCanvas.width/2;
    this.ly = leftCanvas.height-30;
    this.leftBallInitialY = leftCanvas.height-5;

    //KEYBOARD EVENT HANDLER
    window.addEventListener('keyup',(e)=>{
      //GAME PLAY ARROW KEY Event Listener
      console.log('Key pressed');
      if(this.startBowling){
        if(e.keyCode === 37){
          console.log('left arrow')
          this.playerBatting('left');
        }else if(e.keyCode === 39){
          // this.playerBatting();
          console.log('right arrow');
          this.playerBatting('right');
        }
      }

    });



  },
  emits:['start-match','update-scores','innings-change','ball-celebration'],
  watch:{
    matchStarted(){
      //Start The match - Button Event, show initial bowling animations
      if(this.matchStarted){
        this.showBowlingAnimations();
      }
    },
    ballsCount(value){
      //ON Change Balls Count Check for overchange,
      //If over change set this over object
      if(value){
        if(value % 6 === 0){
          this.oversCount++;
          console.log('over change');
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
        this.x = 20;
        this.y = this.ballInitialY;
        this.drawBallRight('#4cb050');
        //Draw Left ball
        this.lx = 20;
        this.ly = this.leftBallInitialY;
        this.drawBallLeft('#4cb050');


        setTimeout(()=>{
          this.showBowlingAnimations();
        },2000);

      }
    },
    oversCount(){
      //Check for over count, Check for innings end
      //If innings ended emit an event to app
      // also store current players score
      if(this.oversCount === this.maxOvers){
        this.startBowling = false;
        this.inningsOver = true;
        console.log('overs ended');
        ////////
        console.log('second innings',this.startSecondInnings);
        console.log('second innings', this.secondInnings);
        ///////
        this.inningsNumber++;
        this.$emit('innings-change',this.inningsNumber);

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
    },
    secondInnings(value){
      //On Second innings true start new innings
      //Second innings is a prop from app
      // console.log('second innings',this.secondInnings);
      if(value){
        this.newInnings();
      }
    }
  },
  computed:{
    bowlerActions(){
      console.log(this.bowlerImg);
      return this.bowlerImg.toString();
    },
  winningCase(){
      //Check the scores of two players on second innings change and show result
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
      //Show ball movement animations
      //Make ball size increase  on time creates a small effect
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
      //Start match button
      //Change Balls Count
      // this.ballsCount += 1;
      // this.$emit('start-match','start');
        console.log('match start')
      this.showBowlingAnimations();

  },
  playerBatting(direct){
    //On when player hits on the bat, set a random score value for the ball
    //If it is a boundary show celebrations ,
    //Trigger ball movement on the canvas
  // playerBatting(){
    // console.log('direction',direct)
    this.playerHits = true;
    //Generate Random type of shots
    if(this.startBowling){
      const currentBallScore = randomNumberFromArray(this.scoreIndex);
      // this.$emit('current-ball',currentBallScore);
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
    if(ballOutput === 4 || ballOutput === 6){
      //MAKE CELEBRATIONS
      this.$emit('ball-celebration');

    }
    this.$emit('update-scores',this.oversCount,this.ballsCount,this.wicketsCount,ballOutput, this.thisOver);

    this.startBowling = false;

    //SHOW BALL MOVEMENT
    // setInterval(this.drawBallPathRight, 30);

    //SET MOVEMENT RATE(Steps and direction randomly)
    this.randomShotsGen(direct);

    if(direct === 'right'){
      this.randomShotsGen('right');/////Change this
      setInterval(this.drawBallPathRight, 30);
      direct = '';
    }else if(direct === 'left'){
      setInterval(this.drawBallPathLeft, 30);

    }

    // for(let i=0;i<10;i++){
    //   setTimeout(()=>{
    //     setInterval(this.drawBallPath(), 10);
    //   },10);
    // }






   if(this.currentBallScore === 'nb' || this.currentBallScore === 'wd'){
     //Start Bowling in case no ball or wide (since ballcount is not incrementing)
     this.startBowling = true;
     setTimeout(()=>{
       this.showBowlingAnimations();
     },2000);

   }
  },
  newInnings(){
    //Start a new innings reset certain values
    this.runsCount = 0;
    this.oversCount = 0;
    this.ballsCount = 0;
    this.inningsOver = false;

    // this.$emit('update-scores',this.oversCount,this.ballsCount,0);
    // this.$emit('innings-change',this.inningsNumber);
  },
  setThisOver(ball,value){
    //Create This over Object
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
  //BALL MOVEMENT
  //SHOT TOWARDS RIGHT
  drawBallRight(color = "#810000") {
    //Draw the Ball for the movement in right side
    // if(direct === 'right'){
      //Shot to right
      // console.log('right shot')
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
      this.ctx.fillStyle = color ;
      this.ctx.fill();
      this.ctx.closePath();
    // }else if(direct === 'left'){
    //   this.lCtx.beginPath();
    //   this.lCtx.arc(this.x, this.y, 10, 0, Math.PI*2);
    //   this.lCtx.fillStyle = color ;
    //   this.lCtx.fill();
    //   this.lCtx.closePath();
    // }

  },
  drawBallPathRight() {
    //Draw Ball path Through the right with x,y change by dx and dy
    // if(direct === 'right'){
      //Shot to Right
      console.log('right shot');
      this.ctx.clearRect(0, 0, this.ballCanvas.width, this.ballCanvas.height);
      this.drawBallRight();
      this.x += this.dx;
      this.y += this.dy;

  },
  //SHOT TOWARDS LEFT
  drawBallLeft(color = "#810000") {
    //Draw the Ball for the movement in Left side

      this.lCtx.beginPath();
      this.lCtx.arc(this.lx, this.ly, 10, 0, Math.PI*2);
      this.lCtx.fillStyle = color ;
      this.lCtx.fill();
      this.lCtx.closePath();
  },
  drawBallPathLeft() {
    //Draw Ball path Through the right with lx,ly change by ldx and ldy

      this.lCtx.clearRect(0, 0, this.leftCanvas.width, this.leftCanvas.height);
      this.drawBallLeft();
      this.lx += this.ldx;//For left side shot interval
      this.ly += this.ldy;//For left side shot interval
  },

 randomShotsGen(direct){
   //Generate Random Ball Movement on shots by setting dx,dy patterns
   //control the direction the ball travel
   if(direct === 'right'){
     const shotObj = randomNumberFromArray(this.shotPatternsRight);
     this.dx = shotObj.dx;
     this.dy = shotObj.dy;
   }else if(direct === 'left'){
     const shotObj = randomNumberFromArray(this.shotPatternsLeft);
     this.ldx = shotObj.dx;
     this.ldy = shotObj.dy;
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

  .ball-banner-container{
    flex-direction: column;
    display: flex;
    align-items:center;
    justify-content:end;
    border-radius: 30%;
    align-items: end;

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
    flex-direction: column;
    border-radius: 40%;

  }
  .ball-banner-first{
    height: 20vh;
    background-color: #4cb050;
    border-radius: 30%;
  }
  .battingLg img{
    /* transform: scale(1.1); */
    margin-bottom: 1em;
    transform: rotate(-30deg);
  }
  .bat-img{
    width:10%;
    height: auto;
    margin-left:8em;
    background:#2193b0;
    /* border-radius: 50%; */
    position: absolute;
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
.bat-click-zone{
  background:#2193b0;
  /* border-radius: 50%; */
  width: 20%;
  position: absolute;
  /* content:''; */
  /* position:absolute; */
  /* padding:65% 65% 0 0; */
  /* top:10%; */
  /* left:10%; */
  /* border-radius:50%; */
  /* background:#2193b0; */
  /* z-index:-1; */
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
  border-radius: 10%;
}

.btn-large{
  background-color: #52734d;

}
.game-ball-action{
  height: 55vh;
  color:#fff;
}


</style>
