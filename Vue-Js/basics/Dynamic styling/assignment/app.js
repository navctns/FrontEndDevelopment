
app = Vue.createApp({
  data(){
    return{
      inputClass:'',
      toggleParagraph:true,
      inlineBgColor:'',
    }
  },
  methods:{
    showHideParagraph(){
      this.toggleParagraph = !this.toggleParagraph;
    }
  }

});

app.mount('#assignment');
