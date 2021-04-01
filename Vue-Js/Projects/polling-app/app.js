

const app = Vue.createApp({
  data(){
    return{
      votesDone:0,
      candidateOne:0,
      candidateTwo:0,
      candidateThree:0,
      candidateFour:0,
      winner:'',
    }
  },
  methods:{
    getResults(){
      const resultVotes = [{id:'c1',votes:this.candidateOne},{id:'c2',votes:this.candidateTwo},{id:'c3',votes:this.candidateThree},{id:'c4',votes:this.candidateFour}];
      let maxObj = resultVotes.reduce((max, obj) => (max.votes > obj.votes) ? max : obj);
      this.winner = maxObj.id;
    },
    setRepoll(){
      this.candidateOne = 0;
      this.candidateTwo = 0;
      this.candidateThree = 0;
      this.candidateFour = 0;
    }
  }
  // methods:{
  //   addVote(item){
  //     if(item === 'item-1'){
  //       candi
  //     }
  //   }
  // }

})

app.mount('#election');
