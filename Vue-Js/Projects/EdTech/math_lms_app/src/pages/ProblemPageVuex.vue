<template>
    <!-- <p @dragstart="paragraphDrag">abcd</p> -->
    <v-stage :config="configKonva">
        <v-layer>
            <!-- <v-circle :config="configCircle"></v-circle> -->
            <!-- <v-rect :config="configRect"></v-rect> -->
            <!--Render every variables and constants as rectangles-->
          
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
        // const opdCount = ref(store.getters.getCurrOpdCount);
        
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
                    transferVairable('lhs', 'rhs', currentOperandId.value, 'num', true);

                }
                // if(currentOperandType.value === 'const' && problemObj.value.coeffs.includes(currentOperandId.value)){
                //     //operand is a coefficient
                //     console.log('transfer coeff - BLOCK');
                //     transferCoefficient('lhs','rhs', currentOperandId.value);                 
                // }
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
            if(problemObj.value[prev][opdIndex - 1].type === 'oper'){
                //Remove Operator
                problemObj.value[prev].splice(opdIndex - 1, 1);
            }
            //Remove operand from prev side
            problemObj.value[prev].splice(opdIndex - 1, 1);//since prev elem is spliced before index reduced to len-1
            console.log('PROB-OBJ - AFTER ADDING Const', problemObj.value);
            //Rearrange problem elements
            rearrangeCoordinates();
        }
        function transferVairable(prev, next, opdId, nextFractorPos='num', addCoeff=true){
            console.log('transferVairable()');
            //Transfer Variable
            //nextFactorPos can be (num/denom) num -is set when more than 2 elements on
            // prev side, transferring to num of next 
            //addCoeff - true means transfer coeff along with variable(when elements on side > 2)
            //get  operand object
            //Get operand index
            const opdIndex = problemObj.value[prev].findIndex(opd => opd.id === opdId) ;//problemObj.value.rhs/lhs
            if(problemObj.value[prev].length > 2){
                //add var along with coeff
                //Get Coefficient
                const coeffId = problemObj.value[prev][opdIndex].coeffId;   
                //Transfer the coeffecient object to other side
                if(addCoeff){
                    //when addCoeff is true, it is to reuse this function when transferring coeffecient
                    transferConstant(prev, next, coeffId);
                }
                //transfer variable to other side
                const varObj = problemObj.value[prev][opdIndex];
                console.log('TRANSFERRING VAR OBJ', varObj);
                problemObj.value[next].push(varObj);
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
            //set starting x val
            let xValElem = 100;
            for(let i=0;i< problemObj.value.lhs.length;i++){
                //Change coordinates in lhs
                if(problemObj.value.lhs[i].type === 'oper'){
                    //since operElem needed a different span
                    xValElem += 30;
                }
                problemObj.value.lhs[i].configShape.x = xValElem;
                if(problemObj.value.lhs[i].type === 'opd'){
                    problemObj.value.lhs[i].configValue.x = xValElem + 15;
                    //set yVal later
                }else{
                    //operator config text
                    problemObj.value.lhs[i].configValue.x = xValElem - 13;
                }
                //Increment xValElem
                xValElem += 80;
            }
            //rearrange equalSign
            //set xVal
            xValElem += 60;
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
                if(problemObj.value.rhs[i].type === 'opd'){
                    problemObj.value.rhs[i].configValue.x = xValElem + 15;
                    //set yVal later
                }else{
                    //operator config text
                    problemObj.value.rhs[i].configValue.x = xValElem - 13;
                }
                //Increment xValElem
                xValElem += 100;
            }
        }
        return{
            configKonva,
            problem:problemObj,
            operandCmpDragStart,
            operandCmpDragEnd,
        }
    }
}
</script>
