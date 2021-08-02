export default{
  namespaced:true,
  state(){
    return{
      requests:[
        {
          id:101,
          coachId:1,
          name:'',
          message:'I like to study Maths',
          email:'student1@mail.com'
        },
        {
          id:102,
          coachId:2,
          name:'',
          message:'I like to study The subject',
          email:'student2@mail.com'
        },
        {
          id:103,
          coachId:1,
          name:'',
          message:'I like to study Things',
          email:'student3@mail.com'
        },
      ]
    }
  },
  mutations:{
    addRequestToList(state,payload){
      state.requests.unshift(payload);
    },
    deleteRequestFromList(state,payload){
      const idx = state.requests.findIndex(request => request.id === payload);
      state.requests.splice(idx,1);
    }
  },

  getters:{
    getRequestsFromList(state){
      return state.requests;
    }
  },

  actions:{
    addRequest(context, payload){
      context.commit('addRequestToList', payload);
    },
    deleteRequest(context, payload){
      context.commit('deleteRequestFromList', payload);
    }
  }
}
