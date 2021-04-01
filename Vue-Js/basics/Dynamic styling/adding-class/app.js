
const app = Vue.createApp({
  data(){
    return{
      boxASelector:false,
      boxBSelector:false,
      boxCSelector:false,
    }
  },
  computed:{
    boxAclasses(){
      return {activeA:this.boxASelector};
    }
  },
  methods:{
    boxSelected(box){
      if(box === 'A'){
        this.boxASelector = !this.boxASelector;
        // this.boxASelector = true;
        // this.boxBSelector =false;
        // this.boxCSelector = false;

      }else if(box === 'B'){
        this.boxBSelector = !this.boxBSelector;
        // this.boxBSelector = true;
        // this.boxASelector = false;
        // this.boxCSelector = false;
      }else if(box === 'C'){
        this.boxCSelector = !this.boxCSelector;
        // this.boxCSelector = true;
        // this.boxASelector = false;
        // this.boxBSelector =false;
      }
    }
  }
});

app.mount('#styling')
