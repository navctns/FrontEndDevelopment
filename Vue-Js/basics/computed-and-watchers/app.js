const app = Vue.createApp({
  data(){
    return{
      counter:0,
      name:'',
      lastName:'',
      fullname:'',
      confirmedName:'',
    }
  },
  watch:{
    //Dynamically calculating property using watch
    //Is not simple and need to write more code than computed
    // name(value){
    //   //value contains the latest value of the property
    //   // this.fullname = value + ' ' + 'Schawrtsmuller';
    //   this.fullname = value + ' ' + this.lastName;
    // },
    // lastName(value,oldValue){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
    //Watch is suitable for changing certain property on certain intent or context
    //set counter, timeout stuff..etc
    counter(value){
      if(value >50){
        const that = this;
        setTimeout(()=>{
          this.counter = 0;
        },2000);
      }
    }
  },
  computed:{
    compFullname(){
      console.log('running again');
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods:{
    outputFullname(){
      console.log('running again');
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Maxmuller';

    },
    confirmNameInput(){
      this.confirmedName = this.name;
    },
    setName(status){
      this.name = event.target.value + ' ' + status;
    },
    add(num){
      this.counter = this.counter + num
    },
    reduce(num){
      this.counter -= num;
    },
    submitForm(){
      // event.preventDefault();
      alert('Submitted!');
    },
    resetInput(){
      this.name = '';
      this.lastName = '';
    }
  }
})

app.mount('#events');
