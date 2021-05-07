
import { createStore } from 'vuex';
import coachesModule from './modules/coaches.js';
import requestsModule from './modules/requests.js';

const store = createStore({
  modules:{
    coaches:coachesModule,
    requests:requestsModule,
  },
  state(){
    return{
      isAdminLoggedIn:false,
      isCoachLoggedIn:false,
      isStudentLoggedIn:false,
    }
  }
});

export default store;
