
app = Vue.createApp({
  data(){
    return{
      tasks:[],
      inputedValue:'',
      listVisibility:true,
    }
  },
  computed:{
    showHide(){
      console.log('button show/hide');
      if(this.tasks.length === 0){
        return 'Show/Hide List'
      }else {
        return this.listVisibility ? 'Hide List':'Show List';
      }
    }
  },
  methods:{
    addTask(){
      this.tasks.push(this.inputedValue);
      this.inputedValue = '';
    },
    showHideList(){
      this.listVisibility = !this.listVisibility;
    },
  }
});

app.mount('#assignment');
