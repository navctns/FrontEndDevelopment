export default{
  namespaced:true,
  state(){
    return{
      coaches:[
        {
          id:1,
          name:'Hari',
          topic:'Maths',
          rating:'5',
        },
        {
          id:2,
          name:'Ben',
          topic:'Architecture',
          rating:'4',
        },
        {
          id:3,
          name:'Naveen',
          topic:'Python',
          rating:'4',
        },
        {
          id:3,
          name:'Naveen',
          topic:'Python',
          rating:'4',
        },
      ]
    }
  },
  getters:{
    getAllCoaches(state){
      console.log('get coaches');
      console.log('getAllCoaches from coaches module');
      return state.coaches;
    },
    // getCoachById(state){
    //   return state.coaches;
    // }
    // getCoachById:(state) =>(id)=>{
    //   console.log('something');
    //   return state.coaches.find((coach) => coach.id === id);
    //
    // }
    getCoachById(state){
      return coachId =>{
        console.log('something');
        return state.coaches.find((coach) => coach.id === parseInt(coachId));
      }

    }
  // })
    // getCoachById(state,payload){
    //   // console.log(context.state.coaches,payload, typeof payload);
    //   const coach = state.coaches.find(coach => coach.id === payload);
    //   console.log(coach);
    //   return coach;
    // },

  },
  actions:{
    getCoachById(context,payload){
      console.log(context.getters, typeof payload);
      // context.getters['getCoachById'](payload);
      // const coach = context.state.coaches.find(coach => coach.id === parseInt(payload));
      const coach = context.state.coaches.find(coach => coach.id === parseInt(payload));
      // .then(coach=>{
      //   return coach;
      // });

      console.log(coach);
      return coach;
    },

  },
}
