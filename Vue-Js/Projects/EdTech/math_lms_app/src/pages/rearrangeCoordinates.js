export default function useRearrangeCoordinates(problemObj, step){
    //REARRANGE ALL COORDINATES ON ALL STEPS
    //set starting x val
    let xValElem = 100;
    let yVal = (step + 1) *220;//since step starts from 0

    const lhsIndexes = [];
    const rhsIndexes = [];//stores RHS items indexes in the current step
    for(let i = 0; i < problemObj.lhs.length; i++){
            if (problemObj.lhs[i].step === step)
                lhsIndexes.push(i);
        // return indexes;
    }
    // Get LHS indexes of items in the current step
    for(let i = 0; i < problemObj.rhs.length; i++){
            if (problemObj.rhs[i].step === step)
                rhsIndexes.push(i);
        // return indexes;
    }
    for(let i=0;i< lhsIndexes.length;i++){

        // if(problemObj.lhs[i].type === 'oper'){
            if(problemObj.lhs[lhsIndexes[i]].type === 'oper'){
                //since operElem needed a different span
                xValElem += 30;
                //Set Coordinates for Opertor circle
                problemObj.lhs[lhsIndexes[i]].configShape.x = xValElem;
                problemObj.lhs[lhsIndexes[i]].configShape.y = yVal + 23;
                //Set Coordinates foroperator config text
                problemObj.lhs[lhsIndexes[i]].configValue.x = xValElem - 13;
                problemObj.lhs[lhsIndexes[i]].configValue.y = yVal + 10;// yval + 23 -7
    
            }else{
                //Set Coordinates for Operand circle
                problemObj.lhs[lhsIndexes[i]].configShape.x = xValElem;
                problemObj.lhs[lhsIndexes[i]].configShape.y = yVal;
                //Set Coordinates for Operand Text
                problemObj.lhs[lhsIndexes[i]].configValue.x = xValElem + 15;
                problemObj.lhs[lhsIndexes[i]].configValue.y = yVal + 10;
            }
        //Increment xValElem
        //set y val o f config value
        xValElem += 80;
    }
    //rearrange equalSign
    //set xVal
    xValElem += 60;

    //SET equal Operators 
    problemObj.equalOpers[problemObj.equalOpers.length - 1].configShape.x = xValElem;
    problemObj.equalOpers[problemObj.equalOpers.length - 1].configValue.x = xValElem - 13;
    //set Y vals
    problemObj.equalOpers[problemObj.equalOpers.length - 1].configShape.y = yVal + 20;
    problemObj.equalOpers[problemObj.equalOpers.length - 1].configValue.y = yVal + 5;//shapeX + 20 - 15
    console.log('REARRANGED', problemObj);
    //Increment xValElm for RHS
    xValElem += 60;
    for(let i=0;i< rhsIndexes.length;i++){
        //Change coordinates in RHS
        if(problemObj.rhs[rhsIndexes[i]].type === 'oper'){
            //since operElem needed a different span
            xValElem += 30;
            //Set Coordinates for Opertor circle
            problemObj.rhs[rhsIndexes[i]].configShape.x = xValElem;
            problemObj.rhs[rhsIndexes[i]].configShape.y = yVal + 23;
            //Set Coordinates foroperator config text
            problemObj.rhs[rhsIndexes[i]].configValue.x = xValElem - 13;
            problemObj.rhs[rhsIndexes[i]].configValue.y = yVal + 10;// yval + 23 -7

        }else{
            //Set Coordinates for Operand circle
            problemObj.rhs[rhsIndexes[i]].configShape.x = xValElem;
            problemObj.rhs[rhsIndexes[i]].configShape.y = yVal;
            //Set Coordinates for Operand Text
            problemObj.rhs[rhsIndexes[i]].configValue.x = xValElem + 15;
            problemObj.rhs[rhsIndexes[i]].configValue.y = yVal + 10;
        }
        
        //Increment xValElem
        xValElem += 100;
    }
    return problemObj;
}