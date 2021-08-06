import { createStore } from 'vuex';
import problemElmModels from './OperatorOperandModels.js';
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const store = createStore({
    state(){
        return{
            problems:[
                {
                    id:'101',
                    str:'2x+5=25',
                    status:'not-complete',
                    result:false,//true if result is correct
                },
                {
                    id:'102',
                    str:'x+3=7',
                    status:'not-complete',
                    result:false,//true if result is correct
                }
            ],//fetched from api
            currPrbNo:0,//stores current problem no,
            currPrbStr:'',//current problem string,
            currProbObj:'',//Current problem object generated from currPrbStr
            openPara:false,//a paranthesis is open(used when consturcting problem Object)
            paraNo:0,//Paranthesis Number,
            curSide:'lhs',//store side which now processing(used when consturcting problem Object)

            //Operator and operand object models(for reusing)
            operModel:problemElmModels.oper,
            opdModel:problemElmModels.opd,

        }
    },
    getters:getters,
    mutations:mutations,
    actions:actions,
})

export default store;