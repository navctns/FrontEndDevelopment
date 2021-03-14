
class Election {

  constructor(p1,p2,p3,p4,totalVoters,votesDone){
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
    this.totalVoters = totalVoters;
    this.votesDone = votesDone;
  }

  setRepoll(){
    localStorage.setItem('electOne', JSON.stringify([0,0,0,0,10,0]));
  }
}
