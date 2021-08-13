import useRearrangeCoordinates from "./rearrangeCoordinates.js";
// import { useStore } from 'vuex';
// const store = useStore();
export default function useTransfer(){
        const  transferConstant = (problemObj, prev, next, opdId, operCount, currStep)=>{
            //Transfer constant from one side(prev) to another(next)
            //opdId is the id of the dragging operand
            const opdIndex = problemObj[prev].findIndex(opd => opd.id === opdId);//problemObj.rhs/lhs
            // console.log('transferConst index', opdIndex)
            let sign = '';
            //Get sign of operand
            if(problemObj[prev][opdIndex].sign === '-'){
                sign = '+';
            }else if(problemObj[prev][opdIndex].sign === ''){
                //sign - is blank means its a +ve sign
                sign = '-';
            }
            
            // console.log('sign',sign);
    
            //create an operator with sign
            //set x,y values
            //Get New coordinate for adding operator from ,last coordinate on next side
            // let {xVal, yVal} = getNextCoordinate(next);
            let {xVal} = getNextCoordinate(problemObj, next);
            // const opdObj = problemObj[prev][opdIndex];
            //create oper object
            // console.log('OPER count', operCount);
            operCount += 1; 
            const operModel = {
                id:`oper${operCount}`,
                val:sign,//+-*
                step:0,//1234
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
            // console.log('yval', yVal);
            //push to operand next
            problemObj[next].push(problemObj[prev][opdIndex]);
            // console.log('Coord for adding Oper',xVal,yVal);
            // console.log('current operand index ',opdIndex);
            //Remove the operator before the operand from prev
            if(opdIndex > 0){
                //if there exist an element(possible operator) before operand
                if(problemObj[prev][opdIndex - 1].type === 'oper'){
                    //Remove Operator
                    // console.log('Removing Operator before Const',problemObj[prev][opdIndex -1]);
                    problemObj[prev].splice(opdIndex - 1, 1);
                    // console.log('Removing Oper before CONST', problemObj);
                }
            }
    
            //Remove operand from prev side
            // console.log('OPD Now',problemObj[prev][opdIndex -1]);
            problemObj[prev].splice(opdIndex - 1, 1);//since prev elem is spliced before index reduced to len-1
            // console.log('PROB-OBJ - AFTER ADDING Const', problemObj);
            //Rearrange problem elements
            problemObj = useRearrangeCoordinates(problemObj, currStep);
            return problemObj;
        }
        const getNextCoordinate = (problemObj, side)=>{
            //Return Next coordinate for adding item
            const {x,y} = problemObj[side][problemObj[side].length - 1].configShape;
            // console.log('last coord',x,y);
            //Generate new coordinate
            return{
                xVal:x+120,
                yVal:y
            }
        }
        const transferVairable = (prev, next, opdId, nextFractorPos='num', addCoeff=true, problemObj, currStep)=>{
            console.log('transferVairable()', opdId);
            // console.log('TRANSFER VAR PROB OBJ BEFORE ADDING', problemObj);
            //Transfer Variable
            //nextFactorPos can be (num/denom) num -is set when more than 2 elements on
            // prev side, transferring to num of next 
            //addCoeff - true means transfer coeff along with variable(when elements on side > 2)
            //get  operand object
            //Get operand index
            const opdIndex = problemObj[prev].findIndex(opd => opd.id === opdId) ;//problemObj.rhs/lhs
            // console.log('problem Obj ON TRANSFER VAR ', problemObj);
            //store/track index of variable
            // let varNewIndex = null;
            if(problemObj[prev].length > 2){
                //add var along with coeff
                //Get Coefficient
                const coeffId = problemObj[prev][opdIndex].coeffId;  
                // console.log('coeffID', coeffId); 
                //Transfer the coeffecient object to other side
                if(addCoeff){
                    //TRANSFER COEFFICIENT AND VARIABLE
                    //when addCoeff is true, it is to reuse this function when transferring coeffecient
                    // console.log('TRANSFERRING Coeff when trnasfering VAR')
                    if(coeffId){
                        //IF a coefficient exits transfer coefficient before transferring var
                        transferConstant(prev, next, coeffId, problemObj);
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
                    // console.log('var NEW Index',opdNewIndex, problemObj[prev]);
                    if(coeffId){
                        //If an actual coefficient element is there (index -> index -2)
                        // transfer variable to other side
                        // const varObj = problemObj[prev][opdIndex -2];
                        const varObj = problemObj[prev][opdNewIndex];
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
                        // console.log('PROB OBJ - PUSHING SINGLE VAR', problemObj);
                        const varObj = problemObj[prev][opdNewIndex];
                        //Push Object
                        //change side value
                        varObj.side = next;
                        problemObj[next].push(varObj);
                        //Remove Variable from prev side
                        problemObj[prev].splice(opdNewIndex,1)
                        // problemObj[prev].splice(opdIndex -1,1)
                        // problemObj[prev].splice(opdIndex -1,1)
                    }
    
                }else{
                    //TRANFER ONLY VARIABLE( Mainly used when transferring Coefficient)
                    const varObj = problemObj[prev][opdIndex];
                    // console.log('TRANSFERRING VAR OBJ', varObj);
                    problemObj[next].push(varObj);
                    //Remove Variable from prev side
                    problemObj[prev].splice(opdIndex,1);
                }
    
                // console.log('PROB OBJ AFTER PUSHING VAR', problemObj);
                useRearrangeCoordinates(problemObj, currStep);
            }
            if(nextFractorPos === 'den'){
                console.log('transfer to denomenator of other side');
            }
            //Return Problem object
            return problemObj;
        }
    
        const transferCoefficient = (problemObj, prev, next, opdId)=>{
            console.log('transferCoefficient');
            //transfer coeffecient 
            if(problemObj[prev].length > 2){
                // console.log('No of Elements on side > 2 (Coeff TRANSFER)')
                //element in prev side > 2
                //transfer coeff along with variable
                //transfer coefficient
                const coeffIndex = problemObj[prev].findIndex(opd => opd.id === opdId) ;//problemObj.rhs/lhs
                //transfer constant
                transferConstant(problemObj, prev, next, opdId);
                // console.log('after TRANSFERRING CONST',problemObj[prev]);
                //transfer variable
                //Get Variable Object
                // console.log('coeffIndex',coeffIndex);
                const varIndex = coeffIndex - 1;
                // console.log('varIndex',varIndex);
                // console.log(' CONST + VAR AFTER TRANSFER PROB OBJ', problemObj);
                //variable object id
                const varId = problemObj[prev][varIndex].id;
                // console.log('(CONST + VAR - TRANSFERRING) varId', varId);
                // console.log('AFTER adding COEFF Const', problemObj);
                transferVairable(prev, next, varId,'num', false);
    
            }
        }
        return{
            transferCoefficient,
            transferConstant,
            transferVairable,
        }

    }


    
