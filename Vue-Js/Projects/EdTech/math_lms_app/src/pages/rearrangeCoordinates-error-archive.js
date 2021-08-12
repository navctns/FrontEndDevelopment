function rearrangeCoordinates(){
    //REARRANGE ALL COORDINATES ON ALL STEPS
    //set starting x val
    let xValElem = 100;
    //activate when changing step (mainly for setting new = operator)
    // let stepChange = false;
    //set y val offset(changes on every step)
    // let yValOffset = 0;//0 for first step, then increment by 100
    // let step = 0;
    for(let i=0;i< problemObj.value.lhs.length;i++){
        //Change coordinates in lhs
        // if(i>0){
        //     if(problemObj.value.lhs[i-1].step !== problemObj.value.lhs[i]){
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
        if(problemObj.value.lhs[i].type === 'oper'){
            //since operElem needed a different span
            xValElem += 30;
        }
        problemObj.value.lhs[i].configShape.x = xValElem;
        //set y val according to current offset
        // problemObj.value.lhs[i].configShape.y += yValOffset;
        if(problemObj.value.lhs[i].type === 'opd'){
            problemObj.value.lhs[i].configValue.x = xValElem + 15;
            //set y val according to current offset
            // problemObj.value.lhs[i].configValue.y += yValOffset;
            //set yVal later
        }else{
            //operator config text
            problemObj.value.lhs[i].configValue.x = xValElem - 13;
            //set y val according to current offset
            // problemObj.value.lhs[i].configValue.y += yValOffset;
        }
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
    //     console.log('equalOPERS',problemObj.value.equalOpers);
    //     //reset step change
    //     stepChange = false;
    }
    //SET equal Operators 
    problemObj.value.equalOpers[problemObj.value.equalOpers.length - 1].configShape.x = xValElem;
    problemObj.value.equalOpers[problemObj.value.equalOpers.length - 1].configValue.x = xValElem - 13;
    console.log('REARRANGED', problemObj.value);
    //Increment xValElm for RHS
    xValElem += 60;
    for(let i=0;i< problemObj.value.rhs.length;i++){
        //Change coordinates in RHS
        if(problemObj.value.rhs[i].type === 'oper'){
            //since operElem needed a different span
            xValElem += 30;
        }
        problemObj.value.rhs[i].configShape.x = xValElem;
        //set yVal according to current offset
        // problemObj.value.rhs[i].configShape.y += yValOffset;
        if(problemObj.value.rhs[i].type === 'opd'){
            problemObj.value.rhs[i].configValue.x = xValElem + 15;
            //set yVal according to current offset
            // problemObj.value.rhs[i].configValue.y += yValOffset;

        }else{
            //operator config text
            problemObj.value.rhs[i].configValue.x = xValElem - 13;
            //set yVal according to current offset
            // problemObj.value.rhs[i].configValue.y += yValOffset;
        }
        //Increment xValElem
        xValElem += 100;
    }
}