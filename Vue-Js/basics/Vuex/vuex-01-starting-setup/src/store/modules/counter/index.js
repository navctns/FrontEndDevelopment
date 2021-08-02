
import counterActions from './actions.js';
import counterMutations from './mutations.js';
import counterGetters from './getters.js';

const counterModule = {
  namespaced:true,
  state(){
    return{
      counter:0,
    };
  },
  mutations:counterMutations,
  actions:counterActions,
  getters:counterGetters
}

export default counterModule;
