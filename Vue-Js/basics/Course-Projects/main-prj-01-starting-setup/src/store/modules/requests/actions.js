export default{
  async contactCoach(context, payload){
    const newRequest = {
      // id:new Date().toISOString(),
      userEmail:payload.email,
      message:payload.message,
      // coachId:payload.coachId,
    };
    const userId = context.rootGetters.userId;
    const response = await fetch(`https://coaches-app-2e5a0-default-rtdb.firebaseio.com/requests/${userId}.json`,{
      method:'POST',
      body:JSON.stringify(newRequest),
    });
    const responseData = response.json();
    console.log(response);
    if(!response.ok){
      console.log('error msg');
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    // fetch(https://coaches-app-2e5a0-default-rtdb.firebaseio.com/')
    context.commit('addRequest', newRequest);
  },
  async loadRequests(context){

    const coachId = context.rootGetters.userId;
    console.log('coachid', coachId);
    console.log('rootGetters', context.rootGetters);
    const token = context.rootGetters.token;
    console.log('token',token);
    const response = await fetch(`https://coaches-app-2e5a0-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token);
    const responseData = await response.json();
    if(!response.ok){
      console.log('err');
    }
    console.log(responseData);
    const requestsList = [];
    for (const key in responseData){
      const request = {
        id:key,
        coachId:coachId,
        userEmail:responseData[key].userEmail,
        message:responseData[key].message,
      }
      requestsList.push(request);
    }
    context.commit('setRequests', requestsList);
  }
}
