<template>
    <!-- <p @dragstart="paragraphDrag">abcd</p> -->
    <v-stage :config="configKonva">
        <v-layer>
            <!-- <v-circle :config="configCircle"></v-circle> -->
            <!-- <v-rect :config="configRect"></v-rect> -->
            <!--Render every variables and constants as rectangles-->
          
            <!--PROBLEM ELEMENT LHS -->
            <problem-element
                v-for="elem in lhs"
                :key="elem.id"
                :config-obj="elem"
                :type="elem.type"
                @drag-start="operandCmpDragStart"
                @drag-end="operandCmpDragEnd"
            ></problem-element>
            <!--PROBLEM ELEMENT RHS -->
            <problem-element
                v-for="elem in rhs"
                :key="elem.id"
                :config-obj="elem"
                :type="elem.type"
            ></problem-element>
            <!--equan operator - container circle and text -->
            <v-circle :config="equalSign"></v-circle>
            <v-text :config="equalText"></v-text>
        </v-layer>
    </v-stage>
</template>
<script>
import { ref, onMounted, computed } from 'vue';
// import ProblemOperand from '../components/problem-elements/ProblemOperand.vue';
// import ProblemOperator from '../components/problem-elements/ProblemOperator.vue';
import ProblemElement from '../components/problem-elements/ProblemElement.vue';
import ProblemObject from './ProblemObject.js';
export default {
  components:{
    ProblemElement,
    // ProblemOperand,
    // ProblemOperator,
  },
  setup() {
    
    
    //Force to re-render on mounted 
    onMounted(()=>{
        console.log('onMounted');
        // this.$forceUpdate();
        console.log(problemObj.value.lhs);
    });
    //Info of currently dragging operand
    const currentOperandId = ref('');
    const currentOperandSide = ref('');
    //vue-conva main canvas
    const configKonva = {
        width: 1200,
        height: 800
      }
    
    //Global/Main Object for the problem//SAVE this somewhere else
    const problemObj = ref(ProblemObject);
    //operands storing constants and variables
    const operands = ref([
            {
            id:'operand-1',
            type:'const',
            side:'rhs',
            configRect:{
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
        {
            id:'operand-2',
            type:'var',
            side:'lhs',
            configRect:{
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
        }
      ])
    
    //OPERATORS IN PROBLEM 
    const operators = ref([
        {
            circleConfig:{
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
            } 
        }
    ])
    //circle for containing equal sign operator
    const equalSign = ref({
        x: 600,
        y: 250,
        radius: 50,
        // fill: "#50CB93",
        // stroke: "#50CB93",
        fill:"#FDE49C",
        stroke:"#FFB740",
        strokeWidth: 4
    })

    //equal operator text(=)
    const equalText = ref({
        x:580,
        y:230,
        text: '=',
        fontSize: 60
    })

    const equalOperBoundary = computed(()=>{
        return equalSign.value.x + 20;
    });
    //Methods
    function operandCmpDragStart(operandId,side){
        //when start dragging an operand
        console.log('drag starting', operandId);
        //set currently dragging operand id
        currentOperandId.value = operandId;
        console.log('current-operand-side',side);
        currentOperandSide.value = side;
    }
    function operandCmpDragEnd(event){
        //when drag end/drop an operand
        const xVal = event.evt.layerX;
        const yVal = event.evt.layerY;
        console.log('operand-drag-coordinates', xVal,yVal);
        //Check for crossing sides(lhs-rhs)
        if(currentOperandSide.value === 'lhs' && xVal > equalOperBoundary.value){
            //transfering lhs to rhs
            //Change object credentials 
            //Get Operand object 
            // const operandObj = problemObj.value.lhs
            //CHANGING THE SIDE VALUE
            problemObj.value.transferOperand('lhs','rhs', currentOperandId.value, {x:xVal,y:yVal})
                // .then(operandIndex =>{
                // //   problemObj.value.lhs.splice(operandIndex,1); 
                //     console.log('operand index promise',operandIndex); 
                // });
            console.log('change sides');
        }
        //move the current operand text also 
        //filter the current operand object 
        // const currentOperand = operands.value.filter(operand => operand.id === currentOperandId.value);
        // console.log('current-operand',currentOperand);
        //update operand-text coordinates value 
        // currentOperand[0].configValue.x = parseInt(xVal)
        // currentOperand[0].configValue.y = parseInt(yVal)
        // console.log('rect-new-value',currentOperand[0].configRect.x);
    }

    //Methods Old
    // function operandDragStart(operandId){
    //     //when start dragging an operand
    //     console.log('drag starting', operandId);
    //     //set currently dragging operand id
    //     currentOperandId.value = operandId;
    // }
    // function operandDragEnd(event){
    //     //when drag end/drop an operand
    //     const xVal = event.evt.layerX;
    //     const yVal = event.evt.layerY;
    //     console.log('operand-drag-coordinates', xVal,yVal);
    //     //move the current operand text also 
    //     //filter the current operand object 
    //     const currentOperand = operands.value.filter(operand => operand.id === currentOperandId.value);
    //     console.log('current-operand',chttp://localhost:8080/urrentOperand);
    //     //update operand-text coordinates value 
    //     // currentOperand[0].configValue.x = parseInt(xVal)
    //     // currentOperand[0].configValue.y = parseInt(yVal)
    //     console.log('rect-new-value',currentOperand[0].configRect.x);
    // }

    function paragraphDrag(){
        console.log('paragraph-dragging');
    }

    function operatorDragEnd(event){
        //for arranging the x,y values only
        const xVal = event.evt.layerX;
        const yVal = event.evt.layerY;
        console.log('operator-xy',xVal,yVal);
    }
    return{
        configKonva,
        operands,
        equalSign,
        equalText,
        operators,
        lhs:problemObj.value.lhs,
        rhs:problemObj.value.rhs,
        operandCmpDragEnd,
        operandCmpDragStart,
        paragraphDrag,
        operatorDragEnd,
    } 
  }
};
</script>
