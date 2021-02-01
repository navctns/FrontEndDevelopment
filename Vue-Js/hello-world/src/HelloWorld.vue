<template>
  <h1>Hello World</h1>
  <p>
    I am Experimenting {{exp1}} and {{exp2}} {{1 === 1? 'Hello' :'Nop'}}
  </p>
  <h3 v-once>Item 1 :{{exp1}}</h3>
  <h2 v-once>Item 2:{{exp2}}</h2>
</template>

<script>
  export default {

    data(){
      return{
        exp1:"React Js",
        exp2:"Vue Js",
      };
    },

    methods:{
      makeAlert(){
        alert("Sample Alert");
      },
      ChangeTopic(exp1,exp2,topic1,topic2){
        exp1=topic1;
        exp2=topic2;
      },
    },

    mounted(){
      console.log("I am mounted");
      console.log(this.exp1);
      // this.makeAlert();
      const fm1 ='Angular';
      const fm2 = 'jQuery';
      this.ChangeTopic(this.exp1,this.exp2,fm1,fm2);
      this.exp1 = 'Angular';
      this.exp2 = 'jQuery';
    },
    beforeCreate(){
      //first method called
      console.log("beforCreate was called");
      console.log(this.exp1);

    },
    created() {
      console.log('created() was called');
      console.log(this.exp1);

    },
    beforeMount(){
      console.log('beforeMount() is called');
      console.log(this.exp1);
    },


  }


</script>

<style scoped>

</style>
