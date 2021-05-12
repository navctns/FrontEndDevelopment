export default{
  registerCoach(state, payload){
    console.log('mutation reg coach');
    state.coaches.push(payload);
    console.log(state.coaches);
  },
}
