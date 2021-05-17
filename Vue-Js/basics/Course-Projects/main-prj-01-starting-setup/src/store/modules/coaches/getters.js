export default{
  coaches(state){
    return state.coaches;
  },
  hasCoaches(state){
    return state.coaches && state.coaches.length>0;
  },
  // isCoach(state,getters,rootState,rootGetters){
  isCoach(state,getters,rootState,rootGetters){
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some(coach => coach.id === userId);
  },
  shouldUpdate(state){
    const lastFetch = state.lastFetch;
    if(!lastFetch){
      //ON the first fetch
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch)/1000 > 60;
    //check for duration before last fetch(1min)
  },
}
