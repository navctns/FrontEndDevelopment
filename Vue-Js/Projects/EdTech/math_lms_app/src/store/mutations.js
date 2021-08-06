export default{
    setProblemStatus(state){
        console.log('setProblemStatus');
        //Update status related to current problem
        //set current problem string
        state.currPrbStr = state.problems[state.currPrbNo].str;
        console.log('setProblemStatus - currPrbStr', state.currPrbStr);
    },
    createProblemObject(state){
        //store the current problem string
        const problem = state.currPrbStr;
        console.log('createProblemObject - curr-prb',problem,problem.length);
        //Iterate through the problem string
        for(let i=0; i < problem.length; i++){
            console.log('prob-str-elem', problem[i])
            //Check element is an alphabet
            if(problem[i].match(/[a-z]/i)){
                console.log('alphabet found on problem');
            }
        }
    }
}