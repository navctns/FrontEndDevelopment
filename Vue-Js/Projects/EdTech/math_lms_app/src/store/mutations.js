export default{
    setProblemStatus(state){
        //Update status related to current problem
        //set current problem string
        state.currPrbStr = state.problems[state.currPrbNo].str;
    },

    createProblemObject(state){
       //Creating Problem Main object from Problem string(eg:'-(-10-32x)+5=25')
       //adding operand and operator objects to appropriate side(lhs/rhs)
       //creating coeff array
       //setting lhs/rhs border coordinates
        function setCoordinates(elemObj){
            //UPDATING Coordinates of Konva elements in Oper/Opd objects
            let xVal = null;

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

            return elemObj;//Object
        }
        //store the current problem string
        const problem = state.currPrbStr;
        //OPERATORS 
        const operators = ['+', '-', '*', '/', '=', '==', '==='];
        //PARENTHESIS & Special Characters 
        const parenthesis = ['(',')'];
        //Iterate through the problem string
        let i = 0;
        // for(let i=0; i < problem.length; i++){
        while(i< problem.length){
            //INITIALIZE ELEM MODELS
            //OPERATOR MODEL
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
            //OPERAND MODEL
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
            
            //SET Basic Attributes 
            //Set side to operand/Operator
            opdModel.side = state.currSide;
            operModel.side = state.currSide;
            //Check for Open parenthesis
            if(state.openPara){
                //specify the parenthesis number the operand is enclosed by
                opdModel.paraNo = state.paraNo;
                operModel.paraNo = state.paraNo;
            }
            //CHECK FOR ALPHABET
            if(problem[i].match(/[a-z]/i)){
                //The element is an Alphabet(means its a variable)
                //SET GENERAL DETAILS TO OPERAND OBJECT 
                //Set Newly generated operand id
                opdModel.id = `opd-${state.currOpdCount}`;
                //Increment opdCount
                state.currOpdCount += 1;
                //set value to variable
                opdModel.val = problem[i];
                // console.log('configVal Text Bef',opdModel.configValue.text);
                opdModel.configValue.text = problem[i];
                //Update coordinates
                opdModel = setCoordinates(opdModel);
                //change type 
                opdModel.type ='opd';
                //change val type
                opdModel.valType = 'var';
                if(i>0){
                    //an element is present before alphabet
                    const prevEl = problem[i-1]//the element before tha alphabet
                    if(!isNaN(prevEl)){
                        //if the element before is a number
                        //get coeff value
                        const coeffObj = state.currProbObj[state.currSide][state.currProbObj[state.currSide].length -1 ];//last object on the current side(currProbObj.lhs/rhs)
                        //Concatenate with sign string and convert to number
                        const coeffVal = Number(String(coeffObj.sign) + String(coeffObj.val));
                        //set coefficient val to new operand
                        opdModel.coeff = coeffVal;
                        //set coefficient id
                        opdModel.coeffId = coeffObj.id;
                        //Store coefficient id 
                        state.currProbObj.coeffs.push(coeffObj.id);
                        //Push operand to problem object
                        state.currProbObj[state.currSide].push(opdModel);
                        //reset operandObj
                        state.currX += 133;
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
                        //Push operand to problem object
                        state.currProbObj[state.currSide].push(opdModel);
                        i++;//increment
                    }
                }else{
                    //i<=0-probably the first element
                    //its a variable with coeff 1 since there is no elem before
                    opdModel.side = state.currSide;
                    opdModel.coeff = 1;
                    state.currProbObj[state.currSide].push(opdModel);
                    i++;//increment
                }
            }else if(!isNaN(problem[i])){
                //Set Newly generated operand id
                opdModel.id = `opd-${state.currOpdCount}`;
                state.currOpdCount += 1;
                //The element val is a Number
                let j = i;
                let numStr = '';
                while(j < problem.length){
                    //check for numbers with more than one digit and fractoinal numbers
                    if(problem[j].match(/(\d+)/) || problem[j] ==='.'){
                        //convatenating and creating a problem string
                        numStr += problem[j];
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
                state.currProbObj[state.currSide].push(opdModel);
                //Update currX value
                state.currX += 133;
                //Reset Operand Obj
                if(j>i){
                    i = j;//change i value since i traveled far(advanced more)
                }else{
                    //probably i== j
                    i++;
                }
            }else if(operators.includes(problem[i])){
                //Set Newly generated operand id
                opdModel.id = `oper-${state.currOperCount}`;
                state.currOperCount += 1;
                //Check for Operators
                //SET ATTRIBUTES 
                operModel.val = problem[i]
                //set Text
                operModel.configValue.text = problem[i];
                //Update Coordinates
                operModel = setCoordinates(operModel);
                //check for '='
                if(problem[i] === '='){
                    console.log('= found')
                    //Element is '='
                    //change side value
                    state.currSide = 'rhs';
                    //CREATE AN EQUAL OPERATOR OBJECT OUTSIDE RHs & LHS
                    //store on equalOperatory array
                    state.currProbObj.equalOpers.push(operModel);
                    //Set sideBorder(differentiating rhs and lhs)
                    state.currProbObj.sideBorder.x = operModel.configShape.x;
                    state.currProbObj.sideBorder.y = operModel.configShape.y;
                    //Update Curr X value
                    state.currX += 60;
                }else{
                    //Push Object if elem is not 
                    state.currProbObj[state.currSide].push(operModel);
                    //Update currX value
                    state.currX += 60;
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
                //increment iteration index
                i++;
            }else{
                i++;
            }
        }

    }
}