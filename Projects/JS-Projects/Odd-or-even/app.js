
function gameTurn(oddEven){
  const randomNumPone = Math.floor(Math.random()*(10-1))+1;
  const randomNumPtwo = Math.floor(Math.random()*(10-1))+1;
  const playerSum = randomNumPone + randomNumPtwo;
  //Show animation
  document.querySelector('.loading-anim').style.display = 'flex';
setTimeout(()=>{
  document.querySelector('.loading-anim').style.display = 'none';
  document.querySelector('.player-score').style.display='flex';
  document.querySelector('#player-1').textContent = randomNumPone;
  document.querySelector('#player-2').textContent = randomNumPtwo;
  document.querySelector('#result').textContent = playerSum;

  if(playerSum % 2 === 0 && oddEven === 'even'){
    document.querySelector('#winner').textContent = 'You Won';
  }else if(playerSum % 2 !== 0 && oddEven === 'odd'){
    document.querySelector('#winner').textContent = 'You Won';
  }else{
    document.querySelector('#winner').textContent = 'You Lose';
  }
  document.querySelector('.result-block').style.display = 'block';
  document.querySelector('.winner').style.display = 'block';
},1000);

setTimeout(()=>{
  document.querySelector('.player-score').style.display='none';
  document.querySelector('.result-block').style.display = 'none';
  document.querySelector('.winner').style.display = 'none';
},5000);

  // console.log(randomNum);
}
