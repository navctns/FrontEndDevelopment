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
    const response = await fetch(`https://coaches-app-2e5a0-default-rtdb.firebaseio.com/${userId}.json`, {
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
  }
}
