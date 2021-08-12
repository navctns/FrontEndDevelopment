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
                    str:'(-10-32x)+5+x=25',
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
            currProbObj:{
                lhs:[],
                rhs:[],
                equalOpers:[],//Only for storing equal operators in various steps
                sideBorder:{
                    x:0,
                    y:0
                },//Border coordinate b/w lhs and rhs
                coeffs:[],//store coefficient ids(eg: 2 in 2x)
                vars:[],//store the variable string and id obj
            },//Current problem object generated from currPrbStr
            currOpdCount:0,//Operands count in current problem
            currOperCount:0,//Operator count in current problem
            openPara:false,//a paranthesis is open(used when consturcting problem Object)
            paraNo:0,//Paranthesis Number,
            currSide:'lhs',//store side which now processing(used when consturcting problem Object)
            currX:100,//x value same for opd & oper
            currOpdY:220,// y value for opernad
            currOperY:258,// y value for operator
            //Operator and operand object models(for reusing)
            operModel:Object.assign({}, problemElmModels.oper),//store copy
            opdModel:Object.assign({}, problemElmModels.opd),//store copy

        }
    },
    getters:getters,
    mutations:mutations,
    actions:actions,
})

export default store;