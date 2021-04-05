
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
    }

  },
  computed:{
    playerBarStyles(){
      return {width:this.playerHealth + '%'};
    },
    mayUseSpecialAttack(){
      return this.currentRound %3 !== 0;
    },

  },
  methods:{
    attackOpponent(){
      this.currentRound++;
      const attackValue = getRandomValue(5,12);
      this.opponentHealth -= attackValue;
      this.attackPlayer();
      this.gameOverCase();
    },
    attackPlayer(){
      const attackValue = getRandomValue(8,15);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster(){
      this.currentRound++;
      const attackValue = getRandomValue(10,25);
      this.opponentHealth -= attackValue;
      this.attackPlayer();
      this.gameOverCase();

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
      this.gameOverCase();

    },
    gameOverCase(){
      if(this.opponentHealth <=0 && this.playerHealth >0){
        this.Result = 'You Won';
        this.gameOver = true;
        console.log(this.opponentHealth,this.playerHealth);
      }else if(this.playerHealth <=0 && this.opponentHealth >0){
        this.gameResult = 'You Lost';
        this.gameOver = true;
        console.log(this.opponentHealth,this.playerHealth);

      }else if(this.playerHealth <= 0 && this.opponentHealth <=0){
        this.gameResult = 'Drow';
        this.gameOver = true;
        console.log(this.opponentHealth,this.playerHealth);

      }
      console.log(this.opponentHealth,this.playerHealth);

      return this.gameResult;
    }

  },
});

app.mount('#game');
