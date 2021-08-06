const operSampleObj ={
    id:1,
    val:'',
    configShape:{
        x: 600,
        y: 250,
        radius: 30,
        // fill: "#50CB93",
        // stroke: "#50CB93",
        fill:"#FDE49C",
        stroke:"#FFB740",
        strokeWidth: 4
    },

    //equal operator text(=)
    configValue:{
        x:587,//shapeX-13
        y:235,//shapeY-15
        text: '=',
        fontSize: 40
    }
}

//OPERAND SAMPLE 
const operandSampleObj = {
    //sample object for using in various places
    seq:'',//sequence/index in equation(to know the initial place)
    id:'operand-3',
    type:'opd',//for operand,
    valType:'const',
    side:'lhs',
    step:1,
    val:'7',
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

const problemObj = {
    //Operators and operands at the left hand side
    lhs:[
            {
                seq:'',
                step:1,
                id:'operand-1',
                type:'opd',
                valType:'var',
                val:'X',
                side:'lhs',
                configShape:{
                    x:100,
                    y:220,
                    width:70,
                    height:70,
                    fill:"#FDE49C",
                    stroke:"#FFB740",
                    // draggable:true,
                },
                configValue:{
                    x:115,//rectX+15
                    y:230,//recty:+10
                    text: 'X',
                    fontSize: 40
                } 
            },
            {
                seq:'',
                id:'oper-1',
                step:1,
                type:'oper',//operator,
                val:'-',
                configShape:{
                    x: 233,
                    y: 258,
                    radius: 30,
                    fill: "#64C9CF",
                    stroke: "#2541B2",
                    strokeWidth:1
                },
                configValue:{
                    x:220,//circleX-10
                    y:243,//circley-30
                    text: '-',
                    fontSize: 40
                },
                changeCoordinates(xVal,yVal){
                    this.configShape.x = xVal;
                    this.configShape.y = yVal;
                    //change text coordinates 
                    this.configValue.x = xVal - 10;
                    this.configValue.y = yVal - 30;
                } 
            },
            {
                seq:'',//sequence/index in equation(to know the initial place)
                id:'operand-2',
                type:'opd',//for operand,
                step:1,
                valType:'const',
                side:'lhs',
                val:'5',
                configShape:{
                    x:300,
                    y:220,//equalToX y-10
                    width:70,
                    height:70,
                    fill:"#FDE49C",
                    stroke:"#FFB740",
                    // draggable:true,
                },
                configValue:{
                x:315,//rectX+15
                y:230,//recty:+10
                text: '5',
                fontSize: 40
                }
            },

    ],
    rhs:[
        {
            seq:'',//sequence/index in equation(to know the initial place)
            id:'operand-3',
            type:'opd',//for operand,
            valType:'const',
            side:'lhs',
            step:1,
            val:'7',
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
        },
    ],
    //EQUAL OPERATORS in various steps
    equalOpers:[
        {
            id:1,
            configShape:{
                x: 600,
                y: 250,
                radius: 30,
                // fill: "#50CB93",
                // stroke: "#50CB93",
                fill:"#FDE49C",
                stroke:"#FFB740",
                strokeWidth: 4
            },
        
            //equal operator text(=)
            configValue:{
                x:587,//shapeX-13
                y:235,//shapeY-15
                text: '=',
                fontSize: 40
            }
        }

    ],
    pushOperator: function(oper, side){
        //when pushing operator to other side (on effect of dragging)
        if(oper.val === '+'){
            oper.val = '-'
            oper.configValue.text = '-'
        }else if(oper.val === '-'){
            oper.val = '+'
            oper.configValue.text = '+'
        }

        if(side === 'rhs'){
            this.rhs.push(oper)
        }else{
            this.lhs.push(oper)
        }
    },
    async transferOperand(sideFrom, sideTo, operandId, newCoordinate){
        //Transferring operand b/w LHS and RHS
        //Get Object Index in Array

                if(sideFrom === 'lhs' && sideTo === 'rhs'){
                    const operandIndex = this.lhs.findIndex(oper=>oper.id === operandId);
                    console.log('operand-index',operandIndex);
                    console.log('transferring-obj',this.lhs[operandIndex]);
                    //Change the operand-side 
                    this.lhs[operandIndex].side = 'rhs'
                    //SET NEW Coordinates 
                    this.lhs[operandIndex].configShape.x = newCoordinate.x;
                    this.lhs[operandIndex].configShape.y = newCoordinate.y;
                    //change coordinates of text 
                    this.lhs[operandIndex].configValue.x = newCoordinate.x+15;
                    this.lhs[operandIndex].configValue.y = newCoordinate.y+10;
                    //CHECK For operand related to operand
                    if(operandIndex === 0){
                        //First element in equation(eg:5+x = 4, 5 is moving)
                        console.log('create an operator circle and set to other side');
                    }else{
                        //get operator object 
                        const operatorIndex = operandIndex -1;
                        if(this.lhs[operatorIndex].type === 'oper'){
                            //Change the coordinates 
                            //get coordinates of last item in  RHS
                            const lastElementIndex = this.rhs.length - 1;
                            const xVal = this.rhs[lastElementIndex].configShape.x;
                            // console.log('last of rhs', x,y);
                            //Change coordinates of operator in lhs
                            // this.lhs[operatorIndex].changeCoordinates(x,y)
                            this.lhs[operatorIndex].configShape.x = xVal+130;
                            //change TEXT coordinates  too
                            this.lhs[operatorIndex].configValue.x = xVal + 120;//10 less than shapeX
    
                            //PUSH operator to RHS array
                            //Make copy of operator to modify 
                            // let operatorObj = Object.assign({}, this.lhs[operandIndex]);
                            //Change operator on side change 
                            // if(operatorObj.val === '+'){
                            //     operatorObj.val = '-';
                            // }else if(operatorObj.val === '-'){
                            //     operatorObj.val = '+';
                            // }
                            this.pushOperator(this.lhs[operatorIndex], 'rhs');
                            this.rhs.push(this.lhs[operandIndex]);
                            console.log('lhs,rhs',this.lhs,this.rhs);

                            // await this.rhs.push(operatorObj);
                            //Splice/remove operator from lhs 
                            // await this.lhs.splice(operatorIndex,1);
                        }
                    }
                    //PUSH operand to RHS 
    
                    // await this.rhs.push(this.lhs[operandIndex]);
                    //Remove/splice operand from LHS
                    await this.lhs.splice(operandIndex,1);
                    // console.log('lhs,rhs',this.lhs,this.rhs);
                    return operandIndex;
                }else if(sideFrom === 'rhs' && sideTo === 'lhs'){
                    const operandIndex = this.lhs.findIndex(oper=>oper.id === operandId);
                    console.log('operand-index',operandIndex);
                    console.log('transferring-obj',this.lhs[operandIndex]);
                    //Change the operand-side 
                    this.lhs[operandIndex].side = 'lhs'
                }
                //Error handling 
                // let error = true;
                // if(!error){
                //     resolve();
                // }else{
                //     reject('Error:something went wrong')
                // } 
    },
    //EVALUATE (Compute calculations)
    evaluateSide(side){
            //Trial 
            //Next step Values
            const stepNo = this[side][this[side].length - 1].step + 1;
            //Add an element as next step item 
            //evaluate the expression on a side 
                let xVal;
                //Set initial X-vals according to side
                if(side === 'lhs'){
                    xVal = 100;
                }else{
                    xVal = 700;
                }
                console.log('next step X-val', xVal);
                //Evaluate RHS/LHS 
                for(let i=1,j=0;i<this[side].length, j<this[side].length; i+=2,j+=2){
                    //look all intermediate index for operators
                    if(this[side][i]){
                        if(this[side][i].type === 'oper'){
                            //If it is an operator, make calculations
                            if(this[side].length >2){
                                //if there is an expression there(items>2..eg:x+2)
                                //construct evalualtion string 
                                console.log('rhs-now', this[side],i);
                                const evalStr = this[side][i-1].val + this[side][i].val + this[side][i+1].val;
                                console.log('evalStr',evalStr);
                                console.log('evaluate-result', eval(evalStr));
                                //Result of evaluation
                                const resultOperand = eval(evalStr);
                                //Result of evaluation
                                this.addNextStepElm(side, stepNo, 'opd', resultOperand, xVal)
                                console.log('added-new-step-elem-after-eval',this[side])
                                xVal +=150;
                            }
    

                            //GENERATE NEW ELEMENTS
                            else{
                                //Only one or two elements
                                if(i==1){
                                    //No need to add operator,add an operand with evaluated result 
                                    console.log('add-next-step-items')
        
                                    if(!this[side][2]){
                                        //Only one element on lhs(expressiont be like 5+ or x+)
                                        if(this[side][0].valType === 'const'){
                                            //if val inside is a constant
                                            //convert the val type to int
                                            this.addNextStepElm(side, stepNo, 'opd', parseInt(this[side][0].val), xVal)
                                            xVal +=150;
    
                                        }else if(this[side][0].valType === 'var'){
                                            
                                            this.addNextStepElm(side, stepNo, 'opd', this[side][0].val, xVal)
                                            xVal +=150;
    
                                        }
                                    }
                                }else{
                                    //Add operator and connecting operand 
                                    console.log('operator and operand');
                                }
                            }

                            this.addNextEqualOper(stepNo);

                        }
                    }

                    //FOR ADDING OPERANDS IN NEXT STEP 
                    // if(this.rhs[j].type === 'opd'){

                    // }
                }
            

    },
    //GENERATE NEXT STEP ELEMENTS 
    addNextStepElm(side, step, elmType, val, xVal){
        //Generate next step elem by evaluating results and rendering new elems 
        console.log('gen-next-step');
        //Step Y Coordinates
        const stepY = step * 220;
        if(elmType === 'opd'){
            //Make a copy of operand object
            const newOpd = Object.assign({}, operandSampleObj);
            //change x-vals
            newOpd.configShape.x = xVal;
            newOpd.configValue.x = xVal + 15;
            // change Y - values
            newOpd.configShape.y = stepY;
            newOpd.configValue.y = stepY+10;
            //Set side
            newOpd.side = side;
            //set Val
            newOpd.val = String(val);
            newOpd.configValue.text = String(val);
            //Generate and set new id (incrementing 1 to last element id)
            newOpd.id = this[side][this[side].length - 1].id + 1;
            this[side].push(newOpd);
        }
    },
    addNextEqualOper(step){
        //Add new '=' operator on new step
        //Calculate Y-val of equal operator using step
        const stepY = step * 250;
        //Make a copy of operator object
        const newOper = Object.assign({}, operSampleObj);
        //change Y vals
        newOper.configShape.y = stepY;
        newOper.configValue.y = stepY - 15;
        //set New id ( by incrementing the last id)
        newOper.id = this.equalOpers[this.equalOpers.length - 1].id + 1;
        this.equalOpers.push(newOper);
        console.log('opers-array',this.equalOpers);
    }
}

export default problemObj;