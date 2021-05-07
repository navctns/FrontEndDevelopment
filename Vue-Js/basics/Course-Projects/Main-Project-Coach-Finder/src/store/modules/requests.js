export default{
  namespaced:true,
  state(){
    return{
      requests:[
        {
          id:101,
          coachId:1,
          message:'I like to study Maths',
          email:'student1@mail.com'
        },
        {
          id:102,
          coachId:2,
          message:'I like to study The subject',
          email:'student2@mail.com'
        },
        {
          id:103,
          coachId:1,
          message:'I like to study Things',
          email:'student3@mail.com'
        },
      ]
    }
  },
  getters:{
    getRequestsFromList(state){
      return state.requests;
    }
  }
}
