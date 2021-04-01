const app = Vue.createApp({
  data(){
    return{
      counter:0,
      name:'',
      confirmedName:'',
    }
  },
  computed:{
    fullname(){
      console.log('running again');
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Maxmuller';
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
    }
  }
})

app.mount('#events');
