export default{
  contactCoach(context, payload){
    const newRequest = {
      id:new Date().toISOString(),
      userEmail:payload.email,
      message:payload.message,
      coachId:payload.coachId,
    };
    // fetch(https://coaches-app-2e5a0-default-rtdb.firebaseio.com/')
    context.commit('addRequest', newRequest);
  }
}
