export default function useRearrangeCoordinates(problemObj, step){
    //REARRANGE ALL COORDINATES ON ALL STEPS
    //set starting x val
    let xValElem = 100;
    //activate when changing step (mainly for setting new = operator)
    // let stepChange = false;
    //set y val offset(changes on every step)
    let yValOffset = 0;//0 for first step, then increment by 100
    let yVal = (step + 1) *220;//since step starts from 0
    //Step
    // let step=0;
    //Filter LHS according to step
    // const currentStepLhs = problemObj.lhs.filter(elem => elem.step === step);
    //Render LHS
    // for(let i=0;i< problemObj.lhs.length;i++){
    // function getAllIndexes(arr, val) {
    // Get LHS indexes of items in the current step
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
        // if(i>0){
        //     if(problemObj.lhs[i-1].step !== problemObj.lhs[i].step){
        //         //ON STEP CHANGED
        //         console.log('CHANGE STEP Coordinates');
        //         //change in step detected
        //         xValElem = 100;
        //         //set step change flag
        //         stepChange = true;
        //         //increment step val
        //         step +=1;
        //         //increment y-val offset
        //         yValOffset += 100;
        //     }
        // }
        // if(problemObj.lhs[i].type === 'oper'){
        if(problemObj.lhs[lhsIndexes[i]].type === 'oper'){
            //since operElem needed a different span
            xValElem += 30;
        }
        problemObj.lhs[lhsIndexes[i]].configShape.x = xValElem;
        //set y val according to current offset
        if(problemObj.lhs[lhsIndexes[i]].type === 'oper'){
            //y value is greater for operators
            problemObj.lhs[lhsIndexes[i]].configShape.y = yVal + 23;
        }else{
            //Y val for operands
            problemObj.lhs[lhsIndexes[i]].configShape.y = yVal;
        }problemObj
        //Increment xValElem
        xValElem += 80;
    }
    //rearrange equalSign
    //set xVal
    xValElem += 60;
    //CREATE NEW EQUAL operator on each step
    // if(stepChange){
    //     console.log('stepChange');
    //     createEqualOperator(step)
    //     //Equal Opers
    //     console.log('equalOPERS',problemObj.equalOpers);
    //     //reset step change
    //     stepChange = false;
    // }
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
        }
        problemObj.rhs[rhsIndexes[i]].configShape.x = xValElem;
        //set yVal according to current offset
        // problemObj.rhs[i].configShape.y += yValOffset;
        if(problemObj.rhs[rhsIndexes[i]].type === 'opd'){
            problemObj.rhs[rhsIndexes[i]].configValue.x = xValElem + 15;
            //set yVal according to current offset
            problemObj.rhs[rhsIndexes[i]].configValue.y += yValOffset;

        }else{
            //operator config text
            problemObj.rhs[rhsIndexes[i]].configValue.x = xValElem - 13;
            //set yVal according to current offset
            problemObj.rhs[rhsIndexes[i]].configValue.y += yValOffset;
        }
        //Increment xValElem
        xValElem += 100;
    }
    return problemObj;
}