
function getRandomNumber(){
    return Math.floor(Math.random()*(10-1))+1;
}

app = Vue.createApp({
  data(){
    return{
      playerNum:0,
      opponentNum:0,
      winOrLose:'',
      startStopAnim:'',
      animationVisibility:false,
      resultVisibility:false,
    }
  },
  // watch:{
  //   startStopAnim(){
  //     if(this.startStopAnim === 'start'){
  //         // return true;//true value to start animation
  //         console.log('star animation');
  //         this.animationVisibility = true;
  //         setTimeout(()=>{
  //           this.animationVisibility = false;
  //           this.resultVisibility = true;
  //         },2000);
  //     }else if(this.startStopAnim === 'stop'){
  //       setTimeout(()=>{
  //         // return false;//To stop animation
  //         this.animationVisibility = false;
  //       },2000);
  //     }
  //   }
  // },
  methods:{
    gameTurn(oddOrEven){
      // this.resultVisibility = false;
      this.animationVisibility = true;
      this.resultVisibility = false;

      this.startStopAnim = 'stop';
      console.log('calculating');
      this.playerNum = getRandomNumber();
      this.opponentNum = getRandomNumber();
      console.log(this.playerNum,this.opponentNum);

      const playerSum = this.playerNum + this.opponentNum;
      if(playerSum % 2 === 0 && oddOrEven === 'even'){
        this.winOrLose = 'You Won';
      }else if(playerSum % 2 !== 0 && oddOrEven === 'odd'){
          this.winOrLose = 'You Won';
      }else{
        this.winOrLose = 'You Lose';
      }
      this.startStopAnim = 'start';
      setTimeout(()=>{
        this.animationVisibility = false;
        this.resultVisibility = true;
      },2000);
    }
  }
});
app.mount('#game-body');

//
// function gameTurn(oddEven){
//   const randomNumPone = Math.floor(Math.random()*(10-1))+1;
//   const randomNumPtwo = Math.floor(Math.random()*(10-1))+1;
//   const playerSum = randomNumPone + randomNumPtwo;
//   //Show animation
//   document.querySelector('.loading-anim').style.display = 'flex';
// setTimeout(()=>{
//   document.querySelector('.loading-anim').style.display = 'none';
//   document.querySelector('.player-score').style.display='flex';
//   document.querySelector('#player-1').textContent = randomNumPone;
//   document.querySelector('#player-2').textContent = randomNumPtwo;
//   document.querySelector('#result').textContent = playerSum;
//
//   if(playerSum % 2 === 0 && oddEven === 'even'){
//     document.querySelector('#winner').textContent = 'You Won';
//   }else if(playerSum % 2 !== 0 && oddEven === 'odd'){
//     document.querySelector('#winner').textContent = 'You Won';
//   }else{
//     document.querySelector('#winner').textContent = 'You Lose';
//   }
//   document.querySelector('.result-block').style.display = 'block';
//   document.querySelector('.winner').style.display = 'block';
// },1000);
//
// setTimeout(()=>{
//   document.querySelector('.player-score').style.display='none';
//   document.querySelector('.result-block').style.display = 'none';
//   document.querySelector('.winner').style.display = 'none';
// },5000);
//
//   // console.log(randomNum);
// }
