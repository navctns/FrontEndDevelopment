<template>
  <h1>Hello World</h1>
  <p>
    I am Experimenting {{exp1}} and {{exp2}} {{1 === 1? 'Hello' :'Nop'}}
  </p>
  <h3 v-once>Item 1 :{{exp1}}</h3>
  <h2 v-once>Item 2:{{exp2}}</h2>
  <p v-html="rawHTML"></p>
  <h3>Languages</h3>
  <ul>
    <li v-for="lang in Languages" v-bind:key="lang">{{lang}}</li>
  </ul>
  <h3>Languages Objects</h3>

  <ul>
    <li v-for="(lang,index) in LanguageObjs" v-bind:key="lang.name">{{index+1}}-{{lang.name}}</li>
  </ul>
  <h3>Languages in One Obj key-val pairs</h3>
  <ul>
    <li v-for="lang in LanguagesObj" v-bind:key="lang">{{lang}}</li>
  </ul>

  <h3>Event Handling</h3>
  <p>Number:{{randNumber}}</p>
  <button v-on:click="aMethod">Click Me</button>
  <h3>v-bind for binding expressions</h3>
  <p>Number:{{randNumber}}</p>
  <!-- <input :value="randNumber" @input="changeFunc($event)"/> -->
  <input v-model="randNumber"/>
  <button v-on:click="changeNum">Chane Number</button>

  <h3>Event Modifiers</h3>
  <p>{{keywords.join(' | ')}}</p>
  <!-- <input :value="inputValue" @keyup.space="processInput($event)"/> -->
  <input :value="inputValue" @keyup.alt.enter="processInput($event)"/>

</template>

<script>
  export default {

    data(){
      return{
        index:0,
        keywords:[],
        inputValue:'',
        randNumber: 1000001,
        exp1:"React Js",
        exp2:"Vue Js",
        rawHTML:"<b><i>Raw HTML as Obj</i></b>",
        Languages:['Malayalam','English','Tamil','French','German','Croatian','Spanish'],
        LanguageObjs:[
          {
            name:'Malayalam',
          },
          {
            name:'English',
          },
          {
            name:'Tamil',
          },
          {
            name:'French',
          },
          {
            name:'German',
          },
          {
            name:'Croatian',
          },
          {
            name:'Spanish',
          },


        ],

        LanguagesObj :{
          ln1:'Malayalam',
          ln2:'English',
          ln3:'Tamil',
          ln4:'French',
          ln5:'German',
          ln6:'Croatian',
          ln7:'Spanish',

        }
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

      aMethod(){
        this.randNumber = Math.random();
      },

      changeNum(){
        this.randNumber = 12999;
      },
      changeFunc(e){
        console.log(e.target.value);
        this.randNumber = e.target.value;
      },
      processInput(event){

        const Tagvalue = event.target.value;
        this.keywords[this.index] = Tagvalue;
        this.inputValue= '';
        this.index++;
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
