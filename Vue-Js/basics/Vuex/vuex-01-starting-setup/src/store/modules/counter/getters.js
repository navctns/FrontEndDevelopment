export default{
  finalCounter(state){
    return state.counter * 2;
  },
  normalizedCounter(_, getters){
    // const finalCounter = state.counter * 3;
    const finalCounter = getters.finalCounter;
    if(finalCounter < 0){
      return 0;
    }
    if(finalCounter > 100){
      return 100;
    }
    return finalCounter;
  },
  testAuth(state){
    return state.isLoggedIn;
  }
}
