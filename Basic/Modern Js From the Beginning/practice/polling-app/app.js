
const tabsContain = document.querySelector('.tabs')

let electOneData = getElectionDataFromLS();

let electOne = new Election(electOneData[0],electOneData[1],electOneData[2],electOneData[3],electOneData[4],electOneData[5]);
let electOneVoteDone = 0;
console.log(electOne.p1);

function setElectOne(){
  //set elect one;
  let electOneData = getElectionDataFromLS();
  electOne = new Election(electOneData[0],electOneData[1],electOneData[2],electOneData[3],electOneData[4],electOneData[5]);
}
setElectOne();

function changeTab(){
  event
    const tabs = tabsContain.getElementsByTagName('li');
    const tabsArr = Array.from(tabs);
    tabsArr.forEach(tab => {
      tab.classList.remove('is-active');
    });
    console.log(event.target);
    event.target.parentElement.classList.add('is-active');
    document.querySelector('#election-data').innerHTML = `
      <div class="container">
      <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="img/symbols/wings.svg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-center">
                    <a href="#" class="vote vote-item-1"><i onclick="addVote()" class="fas fa-hand-pointer fa-2x"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="img/symbols/fire.svg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-center">
                    <a href="#" class="vote vote-item-2"><i onclick="addVote()" class="fas fa-hand-pointer fa-2x"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="img/symbols/favorite.svg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-center">
                    <a href="#" class="vote vote-item-3"><i onclick="addVote()" class="fas fa-hand-pointer fa-2x"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="img/symbols/brightness.svg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-center">
                    <a href="#" class="vote vote-item-4"><i onclick="addVote()" class="fas fa-hand-pointer fa-2x"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

      </div>`;
}

function addVote(){
  event
    console.log(event.target);
    if(event.target.parentElement.classList.contains('vote')){
      //votes done so far
      if(electOne.totalVoters <= electOne.votesDone){
        document.querySelectorAll('.vote').forEach(item => {
          item.disabled = true;
          // item.setAttribute('disabled','disabled');

        })
        // event.stopPropagation();
        alert('Polling Completed')
      }else{
        electOne.votesDone += 1;
        electOneVoteDone += 1;
        console.log(electOneVoteDone,electOne.votesDone);
      }
    }

    if(event.target.parentElement.classList.contains('vote-item-1')){
      electOne.p1 += 1;
    }else if(event.target.parentElement.classList.contains('vote-item-2')){
          electOne.p2 += 1;
    }else if(event.target.parentElement.classList.contains('vote-item-3')){
          electOne.p3 += 1;
    }else if(event.target.parentElement.classList.contains('vote-item-4')){
          electOne.p4 += 1;
    }
    console.log('p1',electOne.p1);
    console.log('p2',electOne.p2);
    console.log('p3',electOne.p3);
    console.log('p4',electOne.p4);

    //Load to LS
    let loadData = [electOne.p1,electOne.p2,electOne.p3,electOne.p4,electOne.totalVoters,electOne.votesDone];
    localStorage.setItem('electOne', JSON.stringify(loadData));

}

function getElectionDataFromLS(){
  let electOne;
  if(localStorage.getItem('electOne') === null){
    electOne = [0,0,0,0,10,0];
  }else{
    electOne = JSON.parse(localStorage.getItem('electOne'));
  }
  return electOne;
}

function setRepoll(electOne){
  console.log('set repoll');
  electOne.setRepoll();
  setElectOne();
}
