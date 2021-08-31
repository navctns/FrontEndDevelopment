import useRearrangeCoordinates from "./rearrangeCoordinates.js";
// import { useStore } from 'vuex';
// const store = useStore();
export default function useTransfer(problemObj, prev, next, opdId, operCount, currStep){
        const  transferConstant = (opdId, nextFracPos='num')=>{
            //Takes arg opdId because, when transfer var having coeff - coeff transfers first
            //the global var opdId will be of var that time
            //Transfer constant from one side(prev) to another(next)
            //opdId is the id of the dragging operand
            const opdIndex = problemObj[prev].findIndex(opd => opd.id === opdId);//problemObj.rhs/lhs
            let sign = '';
            //Get sign of operand
            console.log('curr-tran-obj', problemObj[prev][opdIndex])
            if(problemObj[prev][opdIndex].fracPos == nextFracPos){
                if(problemObj[prev][opdIndex -1].val === '-'){
                    sign = problemObj[prev][opdIndex].sign === '-'?'-':'+';
                }else{
                    sign = problemObj[prev][opdIndex].sign === '-'?'+':'-';
                }
            }else{
                sign = nextFracPos === 'den'?'/':'*';
            }

            // if(problemObj[prev][opdIndex].sign === '-'){
            //     sign = '+';
            // }else if(problemObj[prev][opdIndex].sign === '+' || problemObj[prev][opdIndex].sign === ''){
            //     //sign - is blank means its a +ve sign
            //     sign = '-';
            // }
            
    
            //create an operator with sign
            //set x,y values
            //Get New coordinate for adding operator from ,last coordinate on next side
            // let {xVal, yVal} = getNextCoordinate(next);
            let {xVal} = getNextCoordinate(problemObj, next);
            //create oper object
            operCount += 1; 
            const operModel = {
                id:`oper${operCount}`,
                val:sign,//+-*
                step:currStep,//1234
                side:next,//lhs/rhs
                type:'oper',
                paraNo:0,//presently open paranthesis(if any)
                configShape:{
                    x: xVal,
                    y: 250,//change later dynamically
                    radius: 30,
                    fill:"#FDE49C",
                    stroke:"#FFB740",
                    strokeWidth: 4,
                    // draggable:true,
                },                
                configValue:{
                    x:xVal - 10,//circleX-10
                    y:243,//circley-30
                    text: sign,
                    fontSize: 40
                },
            }
            //Push operand to next side
            problemObj[next].push(operModel);
            //push operand to next side 
            //Set New Coordinates
            let opdCoord = getNextCoordinate(problemObj,next);
            problemObj[prev][opdIndex].configShape.x = opdCoord.xVal;
            problemObj[prev][opdIndex].configValue.x = opdCoord.xVal + 15
            //set next fraction position
            problemObj[prev][opdIndex].fracPos = nextFracPos;
            //push to operand next
            problemObj[next].push(problemObj[prev][opdIndex]);
            //Remove the operator before the operand from prev
            if(opdIndex > 0){
                //if there exist an element(possible operator) before operand
                if(problemObj[prev][opdIndex - 1].type === 'oper'){
                    //Remove Operator
                    problemObj[prev].splice(opdIndex - 1, 1);
                }
            }
    
            //Remove operand from prev side
            problemObj[prev].splice(opdIndex - 1, 1);//since prev elem is spliced before index reduced to len-1
            //Rearrange problem elements
            console.log('Curr-step', currStep);
            problemObj = useRearrangeCoordinates(problemObj, currStep);
            return problemObj;
        }
        const getNextCoordinate = (problemObj, side)=>{
            //Return Next coordinate for adding item
            const {x,y} = problemObj[side][problemObj[side].length - 1].configShape;
            //Generate new coordinate
            return{
                xVal:x+120,
                yVal:y
            }
        }
        const transferVairable = (nextFractorPos='num', addCoeff=true)=>{
            console.log('transferVairable()', opdId)
            //Transfer Variable
            //nextFactorPos can be (num/denom) num -is set when more than 2 elements on
            // prev side, transferring to num of next 
            //addCoeff - true means transfer coeff along with variable(when elements on side > 2)
            //get  operand object
            //Get operand index
            const opdIndex = problemObj[prev].findIndex(opd => opd.id === opdId) ;//problemObj.rhs/lhs
            //store/track index of variable
            // let varNewIndex = null;
            if(problemObj[prev].length > 2){
                //add var along with coeff
                //Get Coefficient
                const coeffId = problemObj[prev][opdIndex].coeffId;  
                //Transfer the coeffecient object to other side
                if(addCoeff){
                    //TRANSFER COEFFICIENT AND VARIABLE
                    //when addCoeff is true, it is to reuse this function when transferring coeffecient
                    if(coeffId){
                        //IF a coefficient exits transfer coefficient before transferring var
                        problemObj = transferConstant(coeffId);
                        //set Updated var index
                        //since constant and operator is transferred and removed index -> index -2
                        // varNewIndex = opdIndex - 2;
    
                    }else{
                        //Trans Operator before variable if no coefficient found(coeff = 1)
                        //Get previous element
                        const prevElem = problemObj[prev][opdIndex - 1];
                        if(prevElem.type === 'oper'){
                            //Previous element is an operator
                            //Push operator to other side
                            //Change operator value
                            if(prevElem.val == '+'){
                                prevElem.val = '-';
                                prevElem.configValue.text = '-';
                            }else{
                                prevElem.val = '+';
                                prevElem.configValue.text = '+';
                            }
                            // console.log('prev oper', prevElem);
                            problemObj[next].push(prevElem);
                            //Remove operator from prev side
                            problemObj[prev].splice(opdIndex - 1,1);
                            //since operator is transferred and removed var-index -> index -1 
                            // varNewIndex = opdIndex - 1;
    
                        }
                    }
                    //PUSHING VARIABLE
                    //Get New Index of var
                    const opdNewIndex = problemObj[prev].findIndex(opd => opd.id === opdId) ;//problemObj.rhs/lhs
                    if(coeffId){
                        //If an actual coefficient element is there (index -> index -2)
                        // transfer variable to other side
                        // const varObj = problemObj[prev][opdIndex -2];
                        const varObj = problemObj[prev][opdNewIndex];
                        varObj.coeff = varObj.coeff * -1;//Change Sign
                        // console.log('TRANSFERRING VAR OBJ', varObj);
                        //change side 
                        varObj.side = next;
                        problemObj[next].push(varObj);
                        //Remove Variable from prev side
                        // problemObj[prev].splice(opdIndex -2,1)
                        problemObj[prev].splice(opdNewIndex,1)
                    }else{
                        //Coeff = 1 , No actual coefficient element (index -> index -1)
                        //Get Variable Object
                        // const varObj = problemObj[prev][opdNewIndex];
                        const varObj = problemObj[prev][opdNewIndex];
                        varObj.coeff = varObj.coeff * -1;//Change Sign
                        //Push Object
                        //change side value
                        varObj.side = next;
                        problemObj[next].push(varObj);
                        //Remove Variable from prev side
                        problemObj[prev].splice(opdNewIndex,1)
                        // problemObj[prev].splice(opdIndex -1,1)
                    }
    
                }else{
                    //TRANFER ONLY VARIABLE( Mainly used when transferring Coefficient)
                    const varObj = problemObj[prev][opdIndex];
                    varObj.coeff = varObj.coeff * -1;//Change Sign
                    problemObj[next].push(varObj);
                    //Remove Variable from prev side
                    problemObj[prev].splice(opdIndex,1);
                }
    
                problemObj = useRearrangeCoordinates(problemObj, currStep);
                console.log('PROB -OBj - TRANSFERED VAR', problemObj)
            }
            if(nextFractorPos === 'den'){
                console.log('transfer to denomenator of other side');
            }
            //Return Problem object
            return problemObj;
        }
    
        const transferCoefficient = ()=>{
            console.log('transferCoefficient', currStep);
            //transfer coeffecient 
            const coeffIndex = problemObj[prev].findIndex(opd => opd.id === opdId) ;//problemObj.rhs/lhs
            //calculate curr step length
            const currStepLen = problemObj[prev].filter(item=>item.step === currStep).length;
            console.log('curr-step-len', currStepLen, currStep);
            // if(problemObj[prev].length > 3){
            if(currStepLen > 3){
                //element in prev side > 2
                //transfer coeff along with variable
                //transfer coefficient
                //transfer constant
                problemObj = transferConstant(opdId);
                //transfer variable
                //Get Variable Object
                const varIndex = coeffIndex - 1;//Since coeff is removed from side
                //variable object id
                const varId = problemObj[prev][varIndex].id;
                //Set new opdId (overwrite function parameter)
                opdId = varId;//For transferring variable after coeff
                problemObj = transferVairable('num', false);
                //Return Problem object
                return problemObj;
    
            }else{
                console.log('transfer const only');
                //can transfer coeff only eg : - 31 x = +30
                const nextFracPos = problemObj[prev][coeffIndex].fracPos === 'num'?'den':'num';
                problemObj = transferConstant(opdId, nextFracPos);
                //Change coeff of the variable
                const varIndex = coeffIndex - 1;//Since coeff is removed from side
                problemObj[prev][varIndex].coeff = 1;
                //return problemObj
                return problemObj;
            }
        }
        return{
            transferCoefficient,
            transferConstant,
            transferVairable,
        }

    }


    
