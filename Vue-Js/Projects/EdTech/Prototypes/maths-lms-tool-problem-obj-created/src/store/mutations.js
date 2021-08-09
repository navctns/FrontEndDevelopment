import elementModels from './OperatorOperandModels.js';
export default{
    setProblemStatus(state){
        // console.log('setProblemStatus');
        //Update status related to current problem
        //set current problem string
        state.currPrbStr = state.problems[state.currPrbNo].str;
        // console.log('setProblemStatus - currPrbStr', state.currPrbStr);
    },

    // setCoordinates(state){

    //     for (i=0; i<state.currProbObj.lhs.length; i++){
    //         //Set Coordinates
    //         //Set Initial Conditions
    //         if(i === 0){
    //             state.currProbObj.lhs[i].x = 100;
    //             state.currProbObj.lhs[i].y = 220;
    //         }else{
                
    //         }

    //     }
    //     //UPDATING Coordinates of Konva elements in Oper/Opd objects
    //     //Sample function inside a function
    //     let xVal = null;
    //     if(state.currX === 100){
    //         //initial condition
    //         xVal = state.currX;
    //     }else{
    //         //other conditions
    //         state.currX += 133;
    //         xVal = state.currX;
    //     }
    //     //Set Y Val
    //     const yVal = elType === 'opd' ? state.currOpdY : state.currOperY;
    //     //set Object values
    //     elObj.configShape.x = xVal;
    //     elObj.configShape.y = yVal;
    //     //Set Text coord vals
    //     if(elType === 'oper'){
    //         elObj.configValue.x = xVal -13;
    //         elObj.configValue.y = yVal - 15;
    //     }else{
    //         //Operand Text coord vals
    //         elObj.configValue.x = xVal + 15;
    //         elObj.configValue.y = yVal + 10;
    //     }
    //     //Set Text value 
    //     elObj.configValue.text = elObj.val;
    //     console.log('elObj val',elObj.configValue.text, elObj.val, elObj.configValue);
    //     return elObj;//Object
    // },

    createProblemObject(state){
        //Element models(for resetting)
       
        function setCoordinates(elemObj){
            //UPDATING Coordinates of Konva elements in Oper/Opd objects
            //Sample function inside a function
            let xVal = null;
            // if(state.currX === 100){
            //     //initial condition
            //     xVal = state.currX;
            // }else{
            //     //other conditions
            //     state.currX += 133;
            //     xVal = state.currX;
            // }
            console.log('X-global', state.currX);
            //Set X val
            xVal = state.currX;
            //Set Y Val
            const yVal = elemObj.type === 'opd' ? state.currOpdY : state.currOperY;
            //set Object values
            elemObj.configShape.x = xVal;
            elemObj.configShape.y = yVal;
            //Set Text coord vals
            //Operand Text coord vals
            if(elemObj.type === 'opd'){
                elemObj.configValue.x = xVal + 15;
                elemObj.configValue.y = yVal + 10;
            }else{
                elemObj.configValue.x = xVal -13;
                elemObj.configValue.y = yVal - 15;
            }

            
            //Set Text value 
            // opdModel.configValue.text = opdModel.val;
            // console.log('opdModel val',opdModel.configValue.text, opdModel.val, opdModel.configValue);
            return elemObj;//Object
        }
        //store the current problem string
        const problem = state.currPrbStr;
        //Create a blank Operand Object 
        // let opdModel = Object.assign({}, opdModel);
        //create a blank operator Object
        // let operModel = Object.assign({}, operModel);
        //OPERATORS 
        const operators = ['+', '-', '*', '/', '=', '==', '==='];
        //PARENTHESIS & Special Characters 
        const parenthesis = ['(',')'];
        //Iterate through the problem string
        let i = 0;
        // for(let i=0; i < problem.length; i++){
        while(i< problem.length){
            //INITIALIZE ELEM MODELS
            // let opdModel = Object.assign({}, elementModels.opd);
            // let operModel = Object.assign({}, elementModels.oper);
            let operModel = {
                id:'',
                val:'',//+-*
                step:0,//1234
                side:'',//lhs/rhs
                type:'oper',
                paraNo:0,//presently open paranthesis(if any)
                configShape:{
                    x: 600,
                    y: 250,
                    radius: 30,
                    // fill: "#50CB93",
                    // stroke: "#50CB93",
                    fill:"#FDE49C",
                    stroke:"#FFB740",
                    strokeWidth: 4,
                    // draggable:true,
                },                
                configValue:{
                    x:220,//circleX-10
                    y:243,//circley-30
                    text: '-',
                    fontSize: 40
                },
            }

            let opdModel = {
                //sample object for using in various places
                seq:'',//sequence/index in equation(to know the initial place)
                id:'operand-3',
                type:'opd',//for operand,
                valType:'const',//var/const
                side:'lhs',
                step:0,
                val:'',
                coeff:null,//coeff val
                paraNo:0,
                sign:'',
                coeffId:null,
                configShape:{
                    x:700,
                    y:220,//equalToX y-10
                    width:70,
                    height:70,
                    fill:"#FDE49C",
                    stroke:"#FFB740",
                    // draggable:true,
                },
                configValue:{
                x:715,//rectX+15
                y:230,//recty:+10
                text: '7',
                fontSize: 40
                }
            }
            
            console.log('elem models',opdModel,operModel);

            // console.log('prob-str-elem', problem[i])
            //SET Basic Attributes 
            //Set side to operand/Operator
            opdModel.side = state.currSide;
            operModel.side = state.currSide;
            //Check for Open parenthesis
            if(state.openPara){
                //repeating-block
                //specify the parenthesis number the operand is enclosed by
                opdModel.paraNo = state.paraNo;
                operModel.paraNo = state.paraNo;
            }
            //CHECK FOR ALPHABET
            if(problem[i].match(/[a-z]/i)){
                //The element is an Alphabet(means its a variable)
                //SET GENERAL DETAILS TO OPERAND OBJECT 

                //set value to variable
                opdModel.val = problem[i];
                // console.log('configVal Text Bef',opdModel.configValue.text);
                opdModel.configValue.text = problem[i];

                opdModel = setCoordinates(opdModel);

                console.log('VARIABLE value set on base obj', opdModel);
                //change type 
                opdModel.type ='opd';
                //change val type
                opdModel.valType = 'var';
                //Update coordinates
                // setCoordinates(state);
                // opdModel.configValue.text = opdModel.val;
                // console.log('opdModel-UPDATED', opdModel);
                if(i>0){
                    //an element is present before alphabet
                    const prevEl = problem[i-1]//the element before tha alphabet
                    if(!isNaN(prevEl)){
                        //if the element before is a number
                        // console.log(`coeffecient for ${problem[i]} is ${problem[i-1]}`);

                        //get coeff value
                        const coeffObj = state.currProbObj[state.currSide][state.currProbObj[state.currSide].length -1 ];//last object on the current side(currProbObj.lhs/rhs)
                        //Concatenate with sign string and convert to number
                        const coeffVal = Number(String(coeffObj.sign) + String(coeffObj.val));
                        //set coefficient val to new operand
                        opdModel.coeff = coeffVal;
                        // baseOpd.coeff = coeffVal;
                        //set coefficient id
                        opdModel.coeffId = coeffObj.id;
                        // baseOpd.coeffId = coeffObj.id;
                        // console.log('opdModel-var', opdModel);
                        //Push operand to problem object
                        state.currProbObj[state.currSide].push(opdModel);
                        //reset operandObj
                        state.currX += 133;
                        // opdModel = Object.assign({}, opdModel);
                        i++;//increment
                    }else{
                        //The element before is not a number
                        if(prevEl === '-'){
                            //If prev el is a '-' operator set coeff as -1
                            opdModel.coeff = -1;
                        }else{
                            //set coeff 1
                            opdModel.coeff = 1;
                        }
                        // console.log('opdModel-var', opdModel);

                        //Push operand to problem object
                        state.currProbObj[state.currSide].push(opdModel);
                        //reset operandObj
                        // opdModel = Object.assign({}, opdModel);
                        i++;//increment
                    }
                }else{
                    //i<=0-probably the first element
                    //its a variable with coeff 1 since there is no elem before
                    opdModel.side = state.currSide;
                    opdModel.coeff = 1;
                    state.currProbObj[state.currSide].push(opdModel);
                    //Reset Operand obj
                    // opdModel = Object.assign({}, opdModel);
                    i++;//increment
                }
            }else if(!isNaN(problem[i])){
                //The element val is a Number
                // console.log(`constant found on ${i}`)
                let j = i;
                let numStr = '';
                while(j < problem.length){
                    //check for numbers with more than one digit and fractoinal numbers
                    // console.log('problem[j]', problem[j]);
                    if(problem[j].match(/(\d+)/) || problem[j] ==='.'){
                        //convatenating and creating a problem string
                        // console.log('problem[j] - digit found', problem[j]);
                        // console.log('numstr-before',numStr);
                        numStr += problem[j];
                        // console.log('numstr',numStr);
                    }else{
                        //number check completes/non-num elem found
                        break;
                    }
                    j++;
                }               

                if(i>0 && problem[i-1] ===  '-'){
                    //Set sign if sign is -ve
                    opdModel.sign = '-';
                }
                
                // console.log('num-extracted', numStr,Number(numStr));
                //Set Type
                opdModel.type = 'opd';
                //set val Type
                opdModel.valType = 'const';
                //Set Value
                opdModel.val = Number(numStr);
                //SET text 
                opdModel.configValue.text = Number(numStr);
                
                //Update Coordinates
                opdModel = setCoordinates(opdModel);

                // opdModel = setCoordinates('opd', opdModel); 
                // setCoordinates(state);
                // console.log('opdModel-Const', opdModel);
                state.currProbObj[state.currSide].push(opdModel);
                //Update currX value
                state.currX += 133;
                //Reset Operand Obj
                // opdModel = Object.assign({}, opdModel);
                if(j>i){
                    i = j;//change i value since i traveled far(advanced more)
                }else{
                    //probably i== j
                    i++;
                }
            }else if(operators.includes(problem[i])){
                //Check for Operators
                // console.log('oper found', problem[i]);
                //SET ATTRIBUTES 
                operModel.val = problem[i]
                //set Text
                operModel.configValue.text = problem[i];
                //Update Coordinates
                operModel = setCoordinates(operModel);
                // operModel = setCoordinates('oper', operModel); 
                // console.log('Coordinates set on Operator obj', operModel);
                //check for '='
                if(problem[i] === '='){
                    //Element is '='
                    //change side value
                    state.currSide = 'rhs';
                    //CREATE AN EQUAL OPERATOR OBJECT OUTSIDE RHs & LHS
                    //store on equalOperatory array
                    state.currProbObj.equalOpers.push(operModel);
                    //Set sideBorder(differentiating rhs and lhs)
                    state.currProbObj.sideBorder = {
                        x:operModel.configShape.x,
                        y:operModel.configShape.y,
                    }
                    //Update Curr X value
                    state.currX += 60;
                }else{
                    //Push Object if elem is not 
                    state.currProbObj[state.currSide].push(operModel);
                    //Update currX value
                    state.currX += 60;
                    //Reset Operator obj
                    // operModel = Object.assign({}, operModel);
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
                // operModel = Object.assign({}, operModel);
                //increment iteration index
                i++;
            }else{
                i++;
            }
            //Resetted vals
            console.log('Resetted', opdModel,operModel);
            console.log('Element models',elementModels);
        }
        //Problem Object 
        console.log('Problem Obj', state.currProbObj);

    }
}