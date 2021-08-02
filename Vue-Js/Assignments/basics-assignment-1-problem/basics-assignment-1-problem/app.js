
app = Vue.createApp({
  data(){
    return{
      name:'Naveen',
      age:27,
      favouriteNumber:this.genRandomNum(),
      imgUrl:'https://source.unsplash.com/random/400x300',
    };
  },
  methods:{
    // genRandomNum:() => {this.favouriteNumber = Math.random;},
    genRandomNum:() => Math.random(),

  }
});

app.mount('#assignment');
