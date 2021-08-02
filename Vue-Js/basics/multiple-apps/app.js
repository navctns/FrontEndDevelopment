const app = Vue.createApp({
  data(){
    return{
      counter:0,
      name:'',
      confirmedName:'',
      place:'',
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
    },
    setPlace(){
      this.place = this.$refs.yourPlace.value;
      // console.log(this.refs.yourPlace);
    },
  }
})

app.mount('#events');

//Second app
const app2 = Vue.createApp({
  template:`
    <input type="text" v-model="banner">
    <h1>{{banner}}</h1>
  `,
  data(){
    return{
      banner:'',
    }
  }
});

app2.mount('#app2');
