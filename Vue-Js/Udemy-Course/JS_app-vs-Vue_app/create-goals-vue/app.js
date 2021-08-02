Vue.createApp({
  data(){
    return{
      goals:[],
      enteredValue:'',
    };
  },

  methods:{
        addGoal: function(){
          this.goals.push(this.enteredValue);
          console.log(this.goals);
          this.enteredValue = '';
        }
      }

}).mount('#app');

// var app = new Vue({
//   el:'#app',
//   data:{
//     goal_list:[],
//     enteredValue:'',
//   },
//   methods:{
//       addGoal: ()=> {
//         this.goal_list.push(this.enteredValue);
//         console.log(this.goals);
//         this.enteredValue = '';
//       }
//     }
// })
