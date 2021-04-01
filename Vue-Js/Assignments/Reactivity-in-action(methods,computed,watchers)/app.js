
app = Vue.createApp({
  data(){
    return{
      result:0,
      resultMsg:'',
    }
  },
  watch:{
    //watch for out put message (computed property)
    outputMsg(){
      //set result to 0 after 5 sec on every change
      console.log('watching change');
      setTimeout(()=>{
          this.result = 0;
        },5000);
    }
  },
  computed:{
    outputMsg(){
      if(this.result < 37){
        // this.resultMsg = 'Not there yet...'
        return 'Not there yet...';
      }else if(this.result > 37){
        // this.resultMsg = "Too much";
        return "Too much";
      }else if(this.result === 37){
        // this.resultMsg = 37;
        return this.result;
      }
    }
  },
  methods:{
    addNumber(num){
      this.result += num;
    }
    // addFive(){
    //   this.result += 5;
    //   console.log(this.result);
    // },
    // addOne(){
    //   this.result += 1;
    //   console.log(this.result);
    // }
  }
});

app.mount('#assignment');
