/*
  GAME FUNCTION:
  - Player must guess a number between a min & max
  - Player gets a certain amount of guesses
  - Notify player of guesses remaining
  - Notify the player of the correct answer if loose
  - Let player choose to play again
*/

//Game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

//UI Elements

const gameEl = document.querySelector('#game'),
      minNumEl = document.querySelector('.min-num'),
      maxNumEl = document.querySelector('.max-num'),
      guessBtnEl = document.querySelector('#guess-btn'),
      guessInputEl = document.querySelector('#guess-input'),
      messageEl = document.querySelector('.message');


//assign UI min & max

minNumEl.textContent = min;
maxNumEl.textContent = max;

//Play again event listener

gameEl.addEventListener('mousedown', function(e){

  if(e.target.className === 'play-again'){
    console.log('play again');
    guessInputEl.value = '';
    window.location.reload();
  }
});

// Listen for guess

guessBtnEl.addEventListener('click', function(){
  console.log(guessInputEl.value);
  let guess = parseInt(guessInputEl.value);

  //validate
  if(isNaN(guess) || guess < min || guess > max){

    setMessage(`Please enter a number between ${min} and ${max}`,'red');
    // setTimeout(clearMessage,2000);
  }

  //check if won
  if(guess === winningNum){
    //Won game  over

    gameOver(true,`${winningNum} is correct..YOU WIN !`);

  }

  else {
    //Wrong winning number
    guessesLeft -= 1 ;

    if(guessesLeft === 0){
      //Game over lost

      gameOver(false,`Game over, you lost. The correct number was ${winningNum}`)

    }

    else{
      //Game continues - answer wrong

      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');

      //clear input

      guessInputEl.value = '';
    }

    }


});

//Game over

function gameOver(won, msg){

  won === true ? color = 'green': color = "red";

  guessInputEl.disabled = true;

  //change border color
  guessInputEl.style.borderColor = color;

  //set text color
  messageEl.style.color = color;

  //set message
  setMessage(msg,color);

  guessBtnEl.value = 'Play Again';
  guessBtnEl.className += 'play-again';
  // console.log(guessBtnEl);
}

function getRandomNum(min,max){
return Math.floor(Math.random()*(max-min+1)+min);

}

//set message
function setMessage(msg, color){

  messageEl.style.color = color;
  messageEl.textContent = msg;
}

function clearMessage(){
  messageEl.style.display = 'none';
}
