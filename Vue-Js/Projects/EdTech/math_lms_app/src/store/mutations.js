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
        //Create a blank Operand Object 
        let newOpd = Object.assign({}, state.opdModel);
        //create a blank operator Object
        let newOper = Object.assign({}, state.operModel);
        //OPERATORS 
        const operators = ['+', '-', '*', '/', '=', '==', '==='];
        //PARENTHESIS & Special Characters 
        const parenthesis = ['(',')'];
        //Iterate through the problem string
        let i = 0;
        // for(let i=0; i < problem.length; i++){
        while(i< problem.length){
            console.log('prob-str-elem', problem[i])
            //SET Basic Attributes 
            //Set side to operand/Operator
            newOpd.side = state.currSide;
            newOper.side = state.currSide;
            //Check for Open parenthesis
            if(state.openPara){
                //repeating-block
                //specify the parenthesis number the operand is enclosed by
                newOpd.paraNo = state.paraNo;
                newOper.paraNo = state.paraNo;
            }
            //CHECK FOR ALPHABET
            if(problem[i].match(/[a-z]/i)){
                //The element is an Alphabet(means its a variable)
                //SET GENERAL DETAILS TO OPERAND OBJECT 
                //set value to variable
                newOpd.val = problem[i];
                //change type 
                newOpd.type ='opd';
                //change val type
                newOpd.valType = 'var';
                if(i>0){
                    //an element is present before alphabet
                    const prevEl = problem[i-1]//the element before tha alphabet
                    if(!isNaN(prevEl)){
                        //if the element before is a number
                        console.log(`coeffecient for ${problem[i]} is ${problem[i-1]}`);

                        //get coeff value
                        const coeffObj = state.currProbObj[state.currSide][state.currProbObj[state.currSide].length -1 ];//last object on the current side(currProbObj.lhs/rhs)
                        //Concatenate with sign string and convert to number
                        const coeffVal = Number(String(coeffObj.sign) + String(coeffObj.val));
                        //set coefficient val to new operand
                        newOpd.coeff = coeffVal;
                        //set coefficient id
                        newOpd.coeffId = coeffObj.id;
                        console.log('newOpd-var', newOpd);
                        //Push operand to problem object
                        state.currProbObj[state.currSide].push(newOpd);
                        //reset operandObj
                        newOpd = Object.assign({}, state.opdModel);
                        i++;//increment
                    }else{
                        //The element before is not a number
                        if(prevEl === '-'){
                            //If prev el is a '-' operator set coeff as -1
                            newOpd.coeff = -1;
                        }else{
                            //set coeff 1
                            newOpd.coeff = 1;
                        }
                        console.log('newOpd-var', newOpd);

                        //Push operand to problem object
                        state.currProbObj[state.currSide].push(newOpd);
                        //reset operandObj
                        newOpd = Object.assign({}, state.opdModel);
                        i++;//increment
                    }
                }else{
                    //i<=0-probably the first element
                    //its a variable with coeff 1 since there is no elem before
                    newOpd.side = state.currSide;
                    newOpd.coeff = 1;
                    state.currProbObj[state.currSide].push(newOpd);
                    //Reset Operand obj
                    newOpd = Object.assign({}, state.opdModel);
                    i++;//increment
                }
            }else if(!isNaN(problem[i])){
                //The element val is a Number
                console.log(`constant found on ${i}`)
                let j = i;
                let numStr = '';
                while(j < problem.length){
                    //check for numbers with more than one digit and fractoinal numbers
                    console.log('problem[j]', problem[j]);
                    if(problem[j].match(/(\d+)/) || problem[j] ==='.'){
                        //convatenating and creating a problem string
                        console.log('problem[j] - digit found', problem[j]);
                        console.log('numstr-before',numStr);
                        numStr += problem[j];
                        console.log('numstr',numStr);
                    }else{
                        //number check completes/non-num elem found
                        break;
                    }
                    j++;
                }               

                if(i>0 && problem[i-1] ===  '-'){
                    //Set sign if sign is -ve
                    newOpd.sign = '-';
                }
                
                console.log('num-extracted', numStr,Number(numStr));
                //Set Type
                newOpd.type = 'opd';
                //set val Type
                newOpd.valType = 'const';
                //Set Value
                newOpd.val = Number(numStr);
                console.log('newOpd-Const', newOpd);
                state.currProbObj[state.currSide].push(newOpd);
                //Reset Operand Obj
                newOpd = Object.assign({}, state.opdModel);
                if(j>i){
                    i = j;//change i value since i traveled far(advanced more)
                }else{
                    //probably i== j
                    i++;
                }
            }else if(operators.includes(problem[i])){
                //Check for Operators
                console.log('oper found', problem[i]);
                //SET ATTRIBUTES 
                newOper.val = problem[i]
                //check for '='
                if(problem[i] === '='){
                    //Element is '='
                    //change side value
                    state.currSide = 'rhs';
                    //CREATE AN EQUAL OPERATOR OBJECT OUTSIDE RHs & LHS
                }else{
                    //Push Object if elem is not 
                    state.currProbObj[state.currSide].push(newOper);
                    //Reset Operator obj
                    newOper = Object.assign({}, state.operModel);
                }
                i++;
            }else if(parenthesis.includes(problem[i])){
                if(problem[i] === '('){
                    //Open Parenthesis
                    state.openPara = true;
                    //increment paranthesis num
                    state.paraNo += 1;
                }else{
                    //elem is ')'
                    //Close Paranthesis
                    state.openPara = false;
                }
                //Reset Operator obj
                newOper = Object.assign({}, state.operModel);
                //increment iteration index
                i++;
            }else{
                i++;
            }

        }
        //Problem Object 
        console.log('Problem Obj', state.currProbObj);
    }
}