const problemObj = {
    //Operators and operands at the left hand side
    lhs:[
            {
                seq:'',
                id:'operand-1',
                type:'opd',
                valType:'var',
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
                    fontSize: 60
                } 
            },
            {
                seq:'',
                id:'oper-1',
                type:'oper',//operator,
                operType:'-',
                configShape:{
                    x: 233,
                    y: 258,
                    radius: 30,
                    fill: "#64C9CF",
                    stroke: "black",
                    strokeWidth:4
                },
                configValue:{
                    x:223,//circleX-10
                    y:228,//circley-30
                    text: '-',
                    fontSize: 60
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
                valType:'const',
                side:'lhs',
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
                fontSize: 60
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
            fontSize: 60
            }
        },
    ],
    pushOperator: function(oper, side){
        //when pushing operator to other side (on effect of dragging)
        if(oper.operType === '+'){
            oper.operType = '-'
            oper.configValue.text = '-'
        }else if(oper.operType === '-'){
            oper.operType = '+'
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
                    this.lhs[operatorIndex].configShape.x = xVal+100;
                    //change TEXT coordinates  too
                    this.lhs[operatorIndex].configValue.x = xVal + 90;//10 less than shapeX

                    //PUSH operator to RHS array
                    //Make copy of operator to modify 
                    // let operatorObj = Object.assign({}, this.lhs[operandIndex]);
                    //Change operator on side change 
                    // if(operatorObj.operType === '+'){
                    //     operatorObj.operType = '-';
                    // }else if(operatorObj.operType === '-'){
                    //     operatorObj.operType = '+';
                    // }
                    await this.pushOperator(this.lhs[operatorIndex], 'rhs');
                    // await this.rhs.push(operatorObj);
                    //Splice/remove operator from lhs 
                    // await this.lhs.splice(operatorIndex,1);
                }
            }
            //PUSH operand to RHS 

            await this.rhs.push(this.lhs[operandIndex]);
            //Remove/splice operand from LHS
            await this.lhs.splice(operandIndex,1);
            console.log('lhs,rhs',this.lhs,this.rhs);
            return operandIndex;
        }else if(sideFrom === 'rhs' && sideTo === 'lhs'){
            const operandIndex = this.lhs.findIndex(oper=>oper.id === operandId);
            console.log('operand-index',operandIndex);
            console.log('transferring-obj',this.lhs[operandIndex]);
            //Change the operand-side 
            this.lhs[operandIndex].side = 'lhs'
        }  
    }
}

export default problemObj;