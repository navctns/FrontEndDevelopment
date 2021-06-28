
import { createStore } from 'vuex';
import contentsData from './contents-data/contents.js';
const store = createStore({
  state(){
    return{
      aboutSampleText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, suscipit?',
      contentsData:contentsData,
    }
  },
  getters:{
    aboutText(state){
      return state.aboutSampleText;
    },
    contentsData(state){
      return function(contentType){
        return state.contentsData[contentType];
      }
    }
  }
});


export default store;
