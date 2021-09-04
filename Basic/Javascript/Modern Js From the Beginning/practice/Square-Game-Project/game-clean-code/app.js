
//on drag start an item
function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
    dropzones = document.querySelectorAll('.example-origin');

    event
    .currentTarget
    .style
    // .backgroundColor = 'yellow';
    // event.preventDefault();
}

function onDragOver(event) {
  event.preventDefault();
}

//When drop an item
function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
    const draggableElement = document.getElementsByClassName(id);
    const dropzone = event.currentTarget;

    dropzones = document.querySelectorAll('.example-origin');


    // Allow only one child on a box
    if(dropzone.children.length === 0){
      dropzone.appendChild(draggableElement);
      // dropzone.innerHTML += draggableElement;
    }
    // Allow only one child on a box
    checkWinning();

    event
    .dataTransfer
    .clearData();

    // event.preventDefault();

}

function checkWinning(){
  //Check All Winnning Conditions for both players
  //Game Tracks of Winning
  const gameField1 = document.getElementsByClassName('game-field-1');
  const gameField2 = document.getElementsByClassName('game-field-2');

  //PLAYER I Winning Conditions
  player1WinTrack1 = checkWinningTracks(gameField1, 'example-draggable');
  player1WinTrack2 = checkWinningTracks(gameField2, 'example-draggable');

  //PLAYER II Winning Conditions
  player2WinTrack1 = checkWinningTracks(gameField1, 'example-draggable-alter');
  player2winTrack2 = checkWinningTracks(gameField2, 'example-draggable-alter');

  if(player1WinTrack1 || player1WinTrack2){
    console.log('Player 1 WON');
    document.body.style.backgroundColor = '#a6f0c6';
    document.getElementById('game-winner').textContent = 'Player I WON';
    endGame(gameField1);
  }
  if(player2WinTrack1 || player2winTrack2){
    console.log('Player II WON')
    document.getElementById('game-winner').textContent = 'Player II WON';
    document.body.style.backgroundColor = '#d6b0b1';
    endGame(gameField2);
  }

}

function checkWinningTracks(gameField, gameItemClass){
  //check the routes for possibilities of winning

  pos1 = gameField[0].getElementsByClassName(gameItemClass).length;
  pos2 = gameField[1].getElementsByClassName(gameItemClass).length;
  pos3 = gameField[2].getElementsByClassName(gameItemClass).length;

  let correctLen = pos1 + pos2 + pos3;
  if(correctLen === 3){
    return true;
  }
  else{
    return false;
  }
}

function restartGame(){
  window.location.reload();
}

function endGame(gameField){
  //Disable Drat items and Show Restart button
  allDropFields = document.querySelectorAll('.example-origin');
  allDropFields.forEach(item =>{
    console.log(item);
    item.setAttribute("onDrop","");
  })
  // ondrop
  //Show Restart Button
  document.getElementById('restart').innerHTML = '<a class="waves-effect waves-light btn-large" id="restart-btn" onclick="restartGame()">Restart Game</a>'

  //change game field color
  gameField[0].style.backgroundColor = '#ffd880';
  gameField[1].style.backgroundColor = '#ffd880';
  gameField[2].style.backgroundColor = '#ffd880';

}
