<template>
    <!-- <p @dragstart="paragraphDrag">abcd</p> -->
    <button class="eval-btn" @click="evaluateCurrentStep">Evaluate Step</button>
    <v-stage :config="configKonva">
        <v-layer>
            <!-- <v-circle :config="configCircle"></v-circle> -->
            <!-- <v-rect :config="configRect"></v-rect> -->
            <!--Render every variables and constants as rectangles-->
            <!--EVALUATE BUTTON -->
            <!-- <v-rect :config="configButton" class="eval-btn"></v-rect>
            <v-text :config="buttonText"></v-text> -->
            <!--PROBLEM ELEMENT LHS -->
            <problem-element
                v-for="elem in problem.lhs"
                :key="elem.id"
                :config-obj="elem"
                :type="elem.type"
                @drag-start="operandCmpDragStart"
                @drag-end="operandCmpDragEnd"
            ></problem-element>
            <!--PROBLEM ELEMENT RHS -->
            <problem-element
                v-for="elem in problem.rhs"
                :key="elem.id"
                :config-obj="elem"
                :type="elem.type"
                @drag-start="operandCmpDragStart"
                @drag-end="operandCmpDragEnd"
            ></problem-element>
            <!--EQUAL OPERATORS - container circle and text(For various steps) -->
            <problem-operator
                v-for="elem in problem.equalOpers"
                :key="elem.id"
                :config-obj="elem"
                :type="elem.type"
            ></problem-operator>
            <!-- <v-circle :config="equalSign"></v-circle>
            <v-text :config="equalText"></v-text> -->
        </v-layer>
    </v-stage>
</template>
<script>
import konvaConf from './konvaConfig.js';
import ProblemOperator from '../components/problem-elements/ProblemOperator.vue';
import ProblemElement from '../components/problem-elements/ProblemElement.vue';
import { onBeforeMount, computed, ref} from 'vue';
import { useStore } from 'vuex';
export default{
    components:{
        ProblemOperator,
        ProblemElement,
    },
    setup(){
        //konva basic configurations
        const configKonva = konvaConf.canvas;
        //Evaluation button config
        const configButton = {
            x:500,
            y:50,//equalToX y-10
            width:150,
            height:50,
            fill:"#7FC8A9",
            // stroke:"#FFB740",
            // draggable:true,
        };
        const buttonText = {
            x:515,//rectX+15
            y:60,//recty:+10
            text: 'Evaluate',
            fontSize: 30
        }
        //Initialize store 
        const store = useStore();
        onBeforeMount(()=>{
            store.dispatch('setCurrentProblem');
        });
        //GET PROBLEM OBJECT
        const problemObj = computed(()=>{
            return store.getters.getProblemObj;
        });
        //Oper count
        const operCount = ref(store.getters.getCurrOperCount);
        //Opd count 
        const opdCount = ref(store.getters.getCurrOpdCount);
        //Current step
        const currStep = ref(0);
        
        console.log('PROBLEM-OBJ', problemObj.value.sideBorder, problemObj.value);
        //STATUS VARIABLES OR CURRENTLY DRAGGING ELEMENT
        const currentOperandId = ref('');
        const currentOperandSide = ref('');
        const currentOperandType = ref('');
        // const currentStep = 0;
        const currentSideBorder = problemObj.value.sideBorder;

        function operandCmpDragStart(operandId,side,valType){
            console.log('operandCmpDragStart')
            //Set Variables of Operand dragging now
            currentOperandId.value = operandId;
            currentOperandSide.value = side;
            currentOperandType.value = valType;
        }
        function operandCmpDragEnd(event){
            //WHEN DROPPING AN ELEMENT
            console.log('operandCmpDragEnd')
            //Set Pointer Values from event
            const xVal = event.evt.layerX;
            console.log('coffs',problemObj.value.coeffs);
            console.log('OPERAND valType',currentOperandType.value);
            console.log('OPERAND ID',currentOperandId.value);
            // const yVal = event.evt.layerY;
            if(currentOperandSide.value === 'lhs' && xVal > currentSideBorder.x){
                //OPERAND TRANSFERING From LHS to RHS
                if(currentOperandType.value === 'const'){
                    console.log('transfer simple Const - non coeff')
                    if(problemObj.value.coeffs.includes(currentOperandId.value)){
                        //operand is a constant and coefficient
                        console.log('transferCofficient IF BLOCK')
                        transferCoefficient('lhs','rhs', currentOperandId.value); 
                    }else{
                        //Operand is a constant but not a coefficient
                        transferConstant('lhs','rhs', currentOperandId.value);
                    }

                }else if(currentOperandType.value === 'var'){
                    //get Variable Object
                    const varObj = problemObj.value.lhs.find(opd => opd.id === currentOperandId.value);
                    console.log('varOjb',varObj, varObj.coeff);
                    // transferVairable('lhs', 'rhs', currentOperandId.value, 'num', varObj.coeff>1 || varObj.coeff < 0);
                    // console.log('Operand Id when TRANSFERRING Variable', currentOperandId.value);
                    transferVairable('lhs', 'rhs', currentOperandId.value, 'num', true);
                    
                    console.log('PROB-OBJ(after VAR+CONTST TRANS', problemObj.value );
                }
                // if(currentOperandType.value === 'const' && problemObj.value.coeffs.includes(currentOperandId.value)){
                //     //operand is a coefficient
                //     console.log('transfer coeff - BLOCK');
                //     transferCoefficient('lhs','rhs', currentOperandId.value);                 
                // }
            }else if(currentOperandSide.value === 'rhs' && xVal < currentSideBorder.x){
                //OPERAND TRANSFERRING FROM RHS to LHS
                if(currentOperandType.value === 'const'){
                    console.log('transfer simple Const - non coeff')
                    if(problemObj.value.coeffs.includes(currentOperandId.value)){
                        //operand is a constant and coefficient
                        console.log('transferCofficient IF BLOCK')
                        transferCoefficient('rhs','lhs', currentOperandId.value); 
                    }else{
                        //Operand is a constant but not a coefficient
                        transferConstant('rhs','lhs', currentOperandId.value);
                    }

                }else if(currentOperandType.value === 'var'){
                    transferVairable('rhs', 'lhs', currentOperandId.value, 'num', true);
                    console.log('PROB-OBJ(after VAR+CONTST TRANS', problemObj.value );
                }

            }


        }
        function transferConstant(prev, next, opdId){
            //Transfer constant from one side(prev) to another(next)
            //opdId is the id of the dragging operand
            const opdIndex = problemObj.value[prev].findIndex(opd => opd.id === opdId) ;//problemObj.value.rhs/lhs
            console.log('transferConst index', opdIndex)
            let sign = '';
            //Get sign of operand
            if(problemObj.value[prev][opdIndex].sign === '-'){
                sign = '+';
            }else if(problemObj.value[prev][opdIndex].sign === ''){
                //sign - is blank means its a +ve sign
                sign = '-';
            }
            
            console.log('sign',sign);

            //create an operator with sign
            //set x,y values
            //Get New coordinate for adding operator from ,last coordinate on next side
            let {xVal, yVal} = getNextCoordinate(next);
            // const opdObj = problemObj.value[prev][opdIndex];
            //create oper object
            console.log('OPER count', operCount.value);
            operCount.value += 1; 
            const operModel = {
                id:`oper${operCount.value}`,
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
            problemObj.value[next].push(operModel);
            //push operand to next side 
            //Set New Coordinates
            let opdCoord = getNextCoordinate(next);
            problemObj.value[prev][opdIndex].configShape.x = opdCoord.xVal;
            problemObj.value[prev][opdIndex].configValue.x = opdCoord.xVal + 15
            console.log('yval', yVal);
            //push to operand next
            problemObj.value[next].push(problemObj.value[prev][opdIndex]);
            console.log('Coord for adding Oper',xVal,yVal);
            // console.log('current operand index ',opdIndex);
            //Remove the operator before the operand from prev
            if(opdIndex > 0){
                //if there exist an element(possible operator) before operand
                if(problemObj.value[prev][opdIndex - 1].type === 'oper'){
                    //Remove Operator
                    console.log('Removing Operator before Const',problemObj.value[prev][opdIndex -1]);
                    problemObj.value[prev].splice(opdIndex - 1, 1);
                    console.log('Removing Oper before CONST', problemObj.value);
                }
            }

            //Remove operand from prev side
            console.log('OPD Now',problemObj.value[prev][opdIndex -1]);
            problemObj.value[prev].splice(opdIndex - 1, 1);//since prev elem is spliced before index reduced to len-1
            console.log('PROB-OBJ - AFTER ADDING Const', problemObj.value);
            //Rearrange problem elements
            rearrangeCoordinates();
        }
        function transferVairable(prev, next, opdId, nextFractorPos='num', addCoeff=true){
            console.log('transferVairable()', opdId);
            console.log('TRANSFER VAR PROB OBJ BEFORE ADDING', problemObj.value);
            //Transfer Variable
            //nextFactorPos can be (num/denom) num -is set when more than 2 elements on
            // prev side, transferring to num of next 
            //addCoeff - true means transfer coeff along with variable(when elements on side > 2)
            //get  operand object
            //Get operand index
            const opdIndex = problemObj.value[prev].findIndex(opd => opd.id === opdId) ;//problemObj.value.rhs/lhs
            console.log('problem Obj ON TRANSFER VAR ', problemObj.value);
            //store/track index of variable
            // let varNewIndex = null;
            if(problemObj.value[prev].length > 2){
                //add var along with coeff
                //Get Coefficient
                const coeffId = problemObj.value[prev][opdIndex].coeffId;  
                console.log('coeffID', coeffId); 
                //Transfer the coeffecient object to other side
                if(addCoeff){
                    //TRANSFER COEFFICIENT AND VARIABLE
                    //when addCoeff is true, it is to reuse this function when transferring coeffecient
                    console.log('TRANSFERRING Coeff when trnasfering VAR')
                    if(coeffId){
                        //IF a coefficient exits transfer coefficient before transferring var
                        transferConstant(prev, next, coeffId);
                        //set Updated var index
                        //since constant and operator is transferred and removed index -> index -2
                        // varNewIndex = opdIndex - 2;

                    }else{
                        //Trans Operator before variable if no coefficient found(coeff = 1)
                        //Get previous element
                        const prevElem = problemObj.value[prev][opdIndex - 1];
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
                            console.log('prev oper', prevElem);
                            problemObj.value[next].push(prevElem);
                            //Remove operator from prev side
                            problemObj.value[prev].splice(opdIndex - 1,1);
                            //since operator is transferred and removed var-index -> index -1 
                            // varNewIndex = opdIndex - 1;

                        }
                    }
                    //PUSHING VARIABLE
                    //Get New Index of var
                    const opdNewIndex = problemObj.value[prev].findIndex(opd => opd.id === opdId) ;//problemObj.value.rhs/lhs
                    console.log('var NEW Index',opdNewIndex, problemObj.value[prev]);
                    if(coeffId){
                        //If an actual coefficient element is there (index -> index -2)
                        // transfer variable to other side
                        // const varObj = problemObj.value[prev][opdIndex -2];
                        const varObj = problemObj.value[prev][opdNewIndex];
                        console.log('TRANSFERRING VAR OBJ', varObj);
                        //change side 
                        varObj.side = next;
                        problemObj.value[next].push(varObj);
                        //Remove Variable from prev side
                        // problemObj.value[prev].splice(opdIndex -2,1)
                        problemObj.value[prev].splice(opdNewIndex,1)
                    }else{
                        //Coeff = 1 , No actual coefficient element (index -> index -1)
                        //Get Variable Object
                        // const varObj = problemObj.value[prev][opdNewIndex];
                        console.log('PROB OBJ - PUSHING SINGLE VAR', problemObj.value);
                        const varObj = problemObj.value[prev][opdNewIndex];
                        //Push Object
                        //change side value
                        varObj.side = next;
                        problemObj.value[next].push(varObj);
                        //Remove Variable from prev side
                        // problemObj.value[prev].splice(opdIndex -1,1)
                        // problemObj.value[prev].splice(opdIndex -1,1)
                    }

                }else{
                    //TRANFER ONLY VARIABLE( Mainly used when transferring Coefficient)
                    const varObj = problemObj.value[prev][opdIndex];
                    console.log('TRANSFERRING VAR OBJ', varObj);
                    problemObj.value[next].push(varObj);
                    //Remove Variable from prev side
                    problemObj.value[prev].splice(opdIndex,1);
                }

                console.log('PROB OBJ AFTER PUSHING VAR', problemObj.value);
                rearrangeCoordinates();
            }
            if(nextFractorPos === 'den'){
                console.log('transfer to denomenator of other side');
            }
        }
        function transferCoefficient(prev, next, opdId){
            console.log('transferCoefficient');
            //transfer coeffecient 
            if(problemObj.value[prev].length > 2){
                console.log('No of Elements on side > 2 (Coeff TRANSFER)')
                //element in prev side > 2
                //transfer coeff along with variable
                //transfer coefficient
                const coeffIndex = problemObj.value[prev].findIndex(opd => opd.id === opdId) ;//problemObj.value.rhs/lhs
                //transfer constant
                transferConstant(prev, next, opdId);
                console.log('after TRANSFERRING CONST',problemObj.value[prev]);
                //transfer variable
                //Get Variable Object
                console.log('coeffIndex',coeffIndex);
                const varIndex = coeffIndex - 1;
                console.log('varIndex',varIndex);
                console.log(' CONST + VAR AFTER TRANSFER PROB OBJ', problemObj.value);
                //variable object id
                const varId = problemObj.value[prev][varIndex].id;
                console.log('(CONST + VAR - TRANSFERRING) varId', varId);
                console.log('AFTER adding COEFF Const', problemObj.value);
                transferVairable(prev, next, varId,'num', false);

            }
        }
        function getNextCoordinate(side){
            //Return Next coordinate for adding item
            const {x,y} = problemObj.value[side][problemObj.value[side].length - 1].configShape;
            // console.log('last coord',x,y);
            //Generate new coordinate
            return{
                xVal:x+120,
                yVal:y
            }
        }
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
            // }
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
        function evaluateCurrentStep(){
            currStep.value += 1;
            evaluate('lhs');
            //REARRANGE Coordinates after evaluation
            rearrangeCoordinates();
        }
        //EVALUATE SIDES AND CONSTRUCT NEXT STEP
        function evaluate(side){
            //evaluate side
            //on the present step
            let sideProblemStr = '';//the string to be evaluated at last

            for(let i=0; i<problemObj.value[side].length; i++){
                //iterate through elements on a side
                sideProblemStr =  sideProblemStr + problemObj.value[side][i].val;
                //Add Variables by adding its coefficients
            }
            console.log(`problem String on ${side}`, sideProblemStr);
            //Sum variables in a side
            sumVariables(side)
        }
        function sumVariables(side){
            //filter variables
            const variables = problemObj.value[side].filter(elem => elem.valType === 'var');
            //iterate by variable
            problemObj.value.vars.forEach(varStr => {
                const singleVarArr = variables.filter(varObj => varObj.val === varStr);
                let coeffSum = 0;
                for(let i=0;i<singleVarArr.length;i++){
                    //sum coefficients
                    coeffSum += singleVarArr[i].coeff;
                }
                //create a new var obj (with sum of coeffs as coeff)
                //create coeff elem first
                //set coeff sign
                const coeffSumSign = Math.sign(coeffSum) === -1 ? '-':'+';
                const coeffId = createOperand(side,'const',coeffSum,coeffSumSign,null,null,0);//set paraNo dynamically
                createOperand(side,'var',varStr,'',coeffSum, coeffId, 0);

            });
            //Sum up variables by adding its coefficients
            // for(let i=0; i<variables.length; i++){

            // }
        }
        function createOperand(side,valType,val,sign, coeff=null,coeffId=null,paraNo=0){
            //increment operand count
            opdCount.value += 1;
            if(valType === 'const'){
                //create operator if operator is -ve
                createOperator(side,sign,paraNo)
            }
            let opdModel = {
                //sample object for using in various places
                seq:'',//sequence/index in equation(to know the initial place)
                id:`operand-${opdCount.value}`,
                type:'opd',//for operand,
                valType:valType,//var/const
                side:side,
                step:currStep.value,
                val:val,
                coeff:coeff,//coeff val
                paraNo:paraNo,
                sign:'',
                coeffId:coeffId,
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
            //push to side
            problemObj.value[side].push(opdModel);
            return opdModel.id;
        }
        function createOperator(side,val,paraNo){
            //increment operator count
            operCount.value += 1;
            let operModel = {
                id:`oper-${operCount.value}`,
                val:val,//+-*
                step:currStep.value,//1234
                side:side,//lhs/rhs
                type:'oper',
                paraNo:paraNo,//presently open paranthesis(if any)
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
            //push to side
            problemObj.value[side].push(operModel);
            return operModel.id;
        }
        // function createEqualOperator(step){
        //     //CREATE EQUAL OPERATOR ON STEP CHANGE
        //     //prev equal operator for getting coordinates and id
        //     const prevOper = problemObj.value.equalOpers[problemObj.value.equalOpers.length - 1]
        //     const yVal = prevOper.configShape.y;
        //     const yValText = prevOper.configValue.y;
        //     const equalOperModel = {
        //         id:'equalOper',//set id if wanted (else access the last item for dragging)
        //         val:'=',//+-*
        //         step:step,//1234
        //         side:'',//lhs/rhs
        //         type:'oper',
        //         paraNo:0,//presently open paranthesis(if any)
        //         configShape:{
        //             x: 600,//this will be overwritted
        //             y: yVal + 100,
        //             radius: 30,
        //             fill:"#FDE49C",
        //             stroke:"#FFB740",
        //             strokeWidth: 4,
        //             // draggable:true,
        //         },                
        //         configValue:{
        //             x:220,//circleX-10
        //             y:yValText + 100,//circley-30
        //             text: '-',
        //             fontSize: 40
        //         },
        //     }
        //     problemObj.value.equalOpers.push(equalOperModel);
        // }
        return{
            configKonva,
            problem:problemObj,
            operandCmpDragStart,
            operandCmpDragEnd,
            configButton,
            buttonText,
            evaluateCurrentStep,
        }
    }
}
</script>
<style scoped>
.eval-btn{
    top:10%;
    right:10%;
    position:fixed;
    padding:1em;
    font-size: 1em;
    border-radius: 0.5em;
    background: #7FC8A9;
    z-index:10;
}
.eval-btn:focus,
.eval-btn:hover{
    cursor:pointer;
    opacity:0.9;
}
</style>