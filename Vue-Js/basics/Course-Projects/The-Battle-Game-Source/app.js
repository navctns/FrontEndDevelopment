
function getRandomValue(min,max){
  return Math.floor(Math.random() * (max-min)) + min;
}

app = Vue.createApp({
  data(){
    return{
      playerHealth:100,
      opponentHealth:100,
      currentRound:0,
      gameResult:'',
      gameOver:false,
      winner:null,
      battleLog:[],
    }

  },
  watch:{
    playerHealth(value){
      if(value <= 0 && this.opponentHealth <= 0){
        //draw
        this.winner = 'draw';
      }else if(value<=0){
        //player Lost
        this.winner = 'opponent';
      }
    },
    opponentHealth(value){
      if(value <= 0 && this.playerHealth <= 0){
        //draw
        this.winner = 'draw';
      }else if(value <= 0){
        //opponent lost
        this.winner = 'player';
      }
    }
  },
  computed:{
    playerBarStyles(){
      if(this.playerHealth < 0){
        return {width:'0%'};
      }
      return {width:this.playerHealth + '%'};
    },
    opponentBarStyles(){
      if(this.opponentHealth < 0){
        return {width:'0%'};
      }
      return {width:this.opponentHealth + '%'};
    },
    mayUseSpecialAttack(){
      return this.currentRound %3 !== 0;
    },

  },
  methods:{
    startGame(){
      this.playerHealth = 100;
      this.opponentHealth = 100;
      this.currentRound = 0;
      this.winner = null;
    },
    attackOpponent(){
      this.currentRound++;
      const attackValue = getRandomValue(5,12);
      this.opponentHealth -= attackValue;
      this.attackPlayer();
      // this.gameOverCase();
      this.addToBattleLog(`player attacks ${attackValue}`);
    },
    attackPlayer(){
      const attackValue = getRandomValue(8,15);
      this.playerHealth -= attackValue;
      this.addToBattleLog(`opponent attacks ${attackValue}`);

    },
    specialAttackMonster(){
      this.currentRound++;
      const attackValue = getRandomValue(10,25);
      this.opponentHealth -= attackValue;
      this.attackPlayer();
      // this.gameOverCase();
      this.addToBattleLog(`Player make Special attack ${attackValue}`);
    },
    healPlayer(){
      this.currentRound++;
      const healValue = getRandomValue(8,20);
      if(this.playerHealth + healValue > 100){
        this.playerHealth = 100;
      }else{
        this.playerHealth += healValue;
      }
      this.attackPlayer();
      this.addToBattleLog(`Player heals ${healValue}`);

      // this.gameOverCase();

    },
    addToBattleLog(message){
      this.battleLog.push(message);
    }
    // gameOverCase(){
    //   if(this.opponentHealth <=0 && this.playerHealth >0){
    //     this.Result = 'You Won';
    //     this.gameOver = true;
    //     console.log(this.opponentHealth,this.playerHealth);
    //   }else if(this.playerHealth <=0 && this.opponentHealth >0){
    //     this.gameResult = 'You Lost';
    //     this.gameOver = true;
    //     console.log(this.opponentHealth,this.playerHealth);
    //
    //   }else if(this.playerHealth <= 0 && this.opponentHealth <=0){
    //     this.gameResult = 'Drow';
    //     this.gameOver = true;
    //     console.log(this.opponentHealth,this.playerHealth);
    //
    //   }
    //   console.log(this.opponentHealth,this.playerHealth);
    //
    //   return this.gameResult;
    // }

  },
});

app.mount('#game');
