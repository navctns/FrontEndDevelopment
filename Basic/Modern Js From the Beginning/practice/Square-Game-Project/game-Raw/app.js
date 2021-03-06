function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);

    dropzones = document.querySelectorAll('.example-origin');
    dropzones.forEach((item, i) => {
      if(!item.firstChild){
        console.log('no first child');
      }else {

      }

    });

    event
    .currentTarget
    .style
    // .backgroundColor = 'yellow';
    // event.preventDefault();
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');

    const draggableElement = document.getElementById(id);
    console.log(draggableElement);
    const dropzone = event.target;

    dropzones = document.querySelectorAll('.example-origin');
    // dropzones.forEach((item, i) => {
    //   console.log(item.firstChild);
    // });setTimeout(() =>{})


    // setTimeout(() =>{
    //   console.log('timeout',!dropzone.firstChild);
    //   if(!dropzone.firstChild === false){
    //     // console.log('first child',dropzone.className);
    //     console.log('no child');
    //     dropzone.appendChild(draggableElement);
    //
    //   }
    // },2000);

    if(dropzone.firstChild){
      // console.log('first child',dropzone.className);
      console.log('no child',dropzone.children.length);

    }else {
      dropzone.appendChild(draggableElement);
    }

    // Allow only one child on a box
    if(dropzone.children.length === 0){
      dropzone.appendChild(draggableElement);
    }
    // Allow only one child on a box
    checkWinning();

    event
    .dataTransfer
    .clearData();

    // event.preventDefault();

}

function checkWinning(){

  const gameField1 = document.getElementsByClassName('game-field-1');
  const gameField2 = document.getElementsByClassName('game-field-2');

  // console.log('Game Fields',gameField1[1]);
  // console.log('Game Fields child 11', gameField1[0].getElementsByClassName('example-draggable').length);
  // console.log('Game Fields child 22', gameField1[1].firstChild)
  // console.log('Game Fields child 33', gameField1[2].firstChild)

  //Game win compare
  // console.log('Game win check :', gameField1[0].firstChild === gameField1[1].firstChild === gameField1[2].firstChild)

  //check winning track 1 player 1
  // console.log('Track1 player 1',checkWinningTracks(gameField1, 'example-draggable'));
  //check winning track1 player 2
  // console.log('Track1 player 2',checkWinningTracks(gameField1, 'example-draggable-alter'));

  //check winning track 2 player 1
  // console.log('Track2 player 1',checkWinningTracks(gameField2, 'example-draggable'));
  //check winning track1 player 2
  // console.log('Track1 player 2',checkWinningTracks(gameField2, 'example-draggable-alter'));

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
  }
  if(player2WinTrack1 || player2winTrack2){
    console.log('Player II WON')
    document.getElementById('game-winner').textContent = 'Player II WON';
    document.body.style.backgroundColor = '#d6b0b1';

  }

  // const gameField1 = document.querySelectorAll('.game-field-1');
  // gameField1.forEach((item, i) => {
  //   if(item.children.length === 1){
  //     console.log(item.firstChild);
  //   }
    // event.preventDefault();

  // });

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
