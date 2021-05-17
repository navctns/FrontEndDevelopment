export default{
  registerCoach(state, payload){
    console.log('mutation reg coach');
    state.coaches.push(payload);
    console.log(state.coaches);
  },
  setCoaches(state, payload){
    //set fetched data
    console.log('set coaches mutation');
    state.coaches = payload;
  },
  setFetchTimestamp(state){
    state.lastFetch = new Date().getTime();
  }

}
