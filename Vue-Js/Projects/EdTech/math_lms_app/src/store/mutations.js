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
            //CHECK FOR ALPHABET
            if(problem[i].match(/[a-z]/i)){
                //The element is an Alphabet(means its a variable)
                //Create a blank Operand Object 
                const newOpd = Object.assign({}, state.opdModel);
                if(i>0){
                    //an element is present before alphabet
                    const prevEl = problem[i-1]//the element before tha alphabet
                    if(!isNaN(prevEl)){
                        //if the element before is a number
                        console.log(`coeffecient for ${problem[i]} is ${problem[i-1]}`);
                        if(state.openPara){
                            //repeating-block
                            //specify the parenthesis number the operand is enclosed by
                            newOpd.paraNo = state.paraNo;
                        }
                        //get coeff value
                        const coeffObj = state.currProbObj[state.currSide][state.currProbObj[state.currSide].length -1 ];//last object on the current side(currProbObj.lhs/rhs)
                        //Concatenate with sign string and convert to number
                        const coeffVal = Number(String(coeffObj.sign) + String(coeffObj.val));
                        //set coefficient val to new operand
                        newOpd.coeff = coeffVal;
                        //set coefficient id
                        newOpd.coeffId = coeffObj.id;
                        //set side
                        newOpd.side = state.currSide;

                    }else{
                        //The element before is not a number
                        if(prevEl === '-'){
                            //If prev el is a '-' operator set coeff as -1
                            newOpd.coeff = -1;
                        }else{
                            //set coeff 1
                            newOpd.coeff = 1;
                        }
                        if(state.openPara){
                            //repeating-block
                            //specify the parenthesis number the operand is enclosed by
                            newOpd.paraNo = state.paraNo;
                        }
                        newOpd.side = state.currSide;
                    }
                }
            }
        }
    }
}