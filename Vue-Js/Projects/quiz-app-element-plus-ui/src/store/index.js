
import { createStore } from 'vuex';
const store = createStore({
  state(){
    return{
      aboutSampleText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, suscipit?',
    }
  },
  getters:{
    aboutText(state){
      return state.aboutSampleText;
    }
  }
});


export default store;
