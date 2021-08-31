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
import useRearrangeCoordinates from "./rearrangeCoordinates.js";

// import trans from './transferMethods.js';
import { onBeforeMount, ref} from 'vue';
import { useStore } from 'vuex';
import useTransfer from './transferMethods.js';
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
        // const problemObj = computed(()=>{
        //     return store.getters.getProblemObj;
        // });
        const problemObj = ref(store.getters.getProblemObj);
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
        const currentSideBorder = ref(problemObj.value.sideBorder);

        function operandCmpDragStart(operandId,side,valType){
            console.log('operandCmpDragStart')
            //Set Variables of Operand dragging now
            currentOperandId.value = operandId;
            currentOperandSide.value = side;
            currentOperandType.value = valType;
            currentSideBorder.value = problemObj.value.sideBorder;
        }
        function operandCmpDragEnd(event){
            
            //WHEN DROPPING AN ELEMENT
            console.log('operandCmpDragEnd', currentOperandSide.value, problemObj.value.sideBorder)
            //Set Pointer Values from event
            const xVal = event.evt.layerX;
            console.log('drag-end stepval', currStep.value, xVal,problemObj.value.sideBorder.x);

            if(currentOperandSide.value === 'lhs' && xVal > problemObj.value.sideBorder.x){   
                console.log('LHS-RHS-TRANSFER');
                //OPERAND TRANSFERING From LHS to RHS
                //Initial transfer methods hook/composable(contains all transfer methods)
                const { transferCoefficient, transferConstant, transferVairable} = useTransfer(problemObj.value, 
                                'lhs', 'rhs', currentOperandId.value, operCount.value, currStep.value);
                if(currentOperandType.value === 'const'){
                    // console.log('transfer simple Const - non coeff')
                    if(problemObj.value.coeffs.includes(currentOperandId.value)){
                        //operand is a constant and coefficient
                        console.log('transferCoeff');
                        problemObj.value = transferCoefficient(); 
                    }else{
                        //Operand is a constant but not a coefficient
                        // transferConstant('lhs','rhs', currentOperandId.value);
                        problemObj.value = transferConstant(currentOperandId.value);

                        console.log('PROB OBJ after hook constTrans', problemObj.value )
                    }


                }else if(currentOperandType.value === 'var'){
                    //get Variable Object
                    problemObj.value = transferVairable('num', true);
                    
                    // console.log('PROB-OBJ(after VAR+CONTST TRANS', problemObj.value );
                }

            }else if(currentOperandSide.value === 'rhs' && xVal < problemObj.value.sideBorder.x){
                //OPERAND TRANSFERRING FROM RHS to LHS
                 //Initial transfer methods hook/composable(contains all transfer methods)
                const { transferCoefficient, transferConstant, transferVairable} = useTransfer(problemObj.value, 
                                'rhs', 'lhs', currentOperandId.value, operCount.value, currStep.value);
                if(currentOperandType.value === 'const'){
                    // console.log('transfer simple Const - non coeff')
                    if(problemObj.value.coeffs.includes(currentOperandId.value)){
                        //operand is a constant and coefficient
                        console.log('transferCofficient IF BLOCK')
                        // transferCoefficient('rhs','lhs', currentOperandId.value); 
                        problemObj.value = transferCoefficient(); 

                    }else{
                        //Operand is a constant but not a coefficient
                        // transferConstant('rhs','lhs', currentOperandId.value);
                        problemObj.value = transferConstant();

                    }

                }else if(currentOperandType.value === 'var'){
                    // transferVairable('rhs', 'lhs', currentOperandId.value, 'num', true);
                    problemObj.value = transferVairable('num', true);

                    // console.log('PROB-OBJ(after VAR+CONTST TRANS', problemObj.value );
                }

            }


        }
 
        function evaluateCurrentStep(){
            console.log('evaluateCurrentStep()');
            currStep.value += 1;
            console.log('currStep', currStep.value);
            //create new equal oper
            createEqualOperator(currStep.value);
            //Evaluate LHS and create new step elements
            evaluate('lhs');
            //Evaluate RHS and create new step elements
            evaluate('rhs');
            console.log('PROB OBJ AFTER EVAL', problemObj.value)
            //REARRANGE Coordinates after evaluation
            for(let step = 0;step <= currStep.value; step++){
                problemObj.value = useRearrangeCoordinates(problemObj.value, step);
            }
            console.log('problem obj after eval', problemObj.value);
        }
        //EVALUATE SIDES AND CONSTRUCT NEXT STEP
        function evaluate(side){
            //evaluate side
            //Sum variables in a side
            sumVariables(side);
            //Sum constants
            sumConstants(side);
        }
        function sumVariables(side){
            //filter variables
            const variables = problemObj.value[side].filter(elem => {
                return elem.valType === 'var' && elem.step === currStep.value-1;
            });
            //iterate by variable
            problemObj.value.vars.forEach(varStr => {
                const singleVarArr = variables.filter(varObj => varObj.val === varStr);
                let coeffSum = 0;
                for(let i=0;i<singleVarArr.length;i++){
                    //sum coefficients
                    coeffSum += singleVarArr[i].coeff;
                }
                console.log('coeff sum', coeffSum);
                //create a new var obj (with sum of coeffs as coeff)
                //create coeff elem first
                //set coeff sign
                if(coeffSum !== 0){
                    const coeffSumSign = Math.sign(coeffSum) === -1 ? '-':'+';
                    const coeffId = createOperand(side,'const', Math.abs(coeffSum),coeffSumSign,null,null,true, 0);//set paraNo dynamically
                    createOperand(side,'var',varStr, '',coeffSum, coeffId, 0);
                    console.log('coeff sum',coeffSum);
                }


            });

        }
        function sumConstants(side){
            //SUM constants on a side
            //Filter Constants
            const constElems = problemObj.value[side].filter(elem =>{
                //Since step is incremented already
                return elem.valType === 'const' && elem.step === currStep.value - 1 && !problemObj.value.coeffs.includes(elem.id);
            });
            let constSum = 0;
            //Sum all constants
            let numStr = '';
            for(let i=0;i<constElems.length; i++){
                console.log('const Val', constElems[i].val)
                //add sign to const(concatenate sign to number)
                numStr = '';
                numStr += constElems[i].sign + String(constElems[i].val);
                constSum += Number(numStr);
            }
            if(constSum !== 0){
                //Create operand only if val is non-zero
                //get sign of constSum 
                let constSign = '';
                if(Math.sign(constSum) === -1){
                    constSign = '-';
                }else{
                    constSign = '+';
                }
                //Create new const element
                createOperand(side,'const', Math.abs(constSum), constSign, null, null, false, 0);
            }

        }
        function createOperand(side,valType,val,sign, coeff=null,coeffId=null, isCoeff, paraNo=0){
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
                fracPos:'num',
                configShape:{
                    x:700,
                    y:220,//equalToX y-10
                    width:60,
                    height:60,
                    fill:"#FDE49C",
                    stroke:"#FFB740",
                    // draggable:true,
                },
                configValue:{
                x:715,//rectX+15
                y:230,//recty:+10
                text: val,
                fontSize: 25
                }
            }
            //Add to coeffs 
            if(isCoeff){
                console.log('isCoeff push to');
                problemObj.value.coeffs.push(opdModel.id);
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
                    radius: 20,
                    fill:"#FDE49C",
                    stroke:"#FFB740",
                    strokeWidth: 4,
                    // draggable:true,
                },                
                configValue:{
                    x:220,//circleX-10
                    y:243,//circley-30
                    text: val,
                    fontSize: 40
                },
            }
            //push to side
            problemObj.value[side].push(operModel);
            return operModel.id;
        }
        function createEqualOperator(step){
            //CREATE EQUAL OPERATOR ON STEP CHANGE
            //prev equal operator for getting coordinates and id
            const prevOper = problemObj.value.equalOpers[problemObj.value.equalOpers.length - 1]
            const yVal = prevOper.configShape.y;
            const yValText = prevOper.configValue.y;
            const equalOperModel = {
                id:'equalOper',//set id if wanted (else access the last item for dragging)
                val:'=',//+-*
                step:step,//1234
                side:'',//lhs/rhs
                type:'oper',
                paraNo:0,//presently open paranthesis(if any)
                configShape:{
                    x: 600,//this will be overwritted
                    y: yVal + 100,
                    radius: 20,
                    fill:"#FDE49C",
                    stroke:"#FFB740",
                    strokeWidth: 4,
                    // draggable:true,
                },                
                configValue:{
                    x:220,//circleX-10
                    y:yValText + 100,//circley-30
                    text: '=',
                    fontSize: 40
                },
            }
            problemObj.value.equalOpers.push(equalOperModel);
        }
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