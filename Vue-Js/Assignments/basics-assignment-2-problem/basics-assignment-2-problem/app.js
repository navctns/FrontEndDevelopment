
app = Vue.createApp({
  data(){
    return{
      userInput:'',
      userInputOne:'',
      userInputOneEnter:'',
    }
  },
  methods:{
    showAlert(message){
      alert(message);
    },
    showOutputOnKeydown(){
      this.userInput = event.target.value;
    },
    setInputOne(){
      this.userInputOne = event.target.value
    },
    showOutputOnEnter(){
      this.userInputOneEnter = this.userInputOne;
    }
  }
});

app.mount('#assignment');
