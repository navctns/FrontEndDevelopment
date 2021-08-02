
const app = Vue.createApp({
  data(){
    return{
      boxASelector:false,
      boxBSelector:false,
      boxCSelector:false,
    }
  },
  methods:{
    boxSelected(box){
      if(box === 'A'){
        this.boxASelector = true;
        this.boxBSelector =false;
        this.boxCSelector = false;

      }else if(box === 'B'){
        this.boxBSelector = true;
        this.boxASelector = false;
        this.boxCSelector = false;
      }else if(box === 'C'){
        this.boxCSelector = true;
        this.boxASelector = false;
        this.boxBSelector =false;
      }
    }
  }
});

app.mount('#styling')
