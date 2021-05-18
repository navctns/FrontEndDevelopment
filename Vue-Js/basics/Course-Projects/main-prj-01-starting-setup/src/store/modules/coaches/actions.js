export default{
  async registerCoach(context, data){
    console.log('action reg coach');
    const userId = context.rootGetters.userId;
    const coachData = {
      // id:new Date().toISOString(),
      // id:context.rootGetters.userId,
      firstName:data.first,
      lastName:data.last,
      description:data.desc,
      hourlyRate:data.rate,
      areas:data.areas,
    }
    const token = context.rootGetters.token;
    const response = await fetch(`https://coaches-app-2e5a0-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token, {
      method:'PUT',
      body:JSON.stringify(coachData),
    });
    // const responseData = await response.json();

    if(!response.ok){
      //Error handling;
      console.log('Error handling');
    }
    context.commit('registerCoach', {
      ...coachData,
      id:userId,
    });
  },
  async loadCoaches(context, payload){
    if(!payload.forceRefresh && !context.getters.shouldUpdate){
      return;
    }
    const response = await fetch('https://coaches-app-2e5a0-default-rtdb.firebaseio.com/coaches.json');
    console.log('res', response);
    const responseData = await response.json();
    console.log(responseData);
    if(!response.ok){
      // console.log('error handling');
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }
    const coaches = [];
    for(const key in responseData){

      const coach = {
        firstName:responseData[key].firstName,
        lastName:responseData[key].lastName,
        description:responseData[key].description,
        hourlyRate:responseData[key].hourlyRate,
        areas:responseData[key].areas,
        id:key
      }
      coaches.push(coach);
    }
    console.log('set coaches');
    console.log(coaches);
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
}
