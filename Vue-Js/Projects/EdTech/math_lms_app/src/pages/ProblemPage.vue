<template>
    <p @dragstart="paragraphDrag">abcd</p>
    <v-stage :config="configKonva">
        <v-layer>
            <!-- <v-circle :config="configCircle"></v-circle> -->
            <!-- <v-rect :config="configRect"></v-rect> -->
            <!--Render every variables and constants as rectangles-->
            <problem-operand
                v-for="oper in operands" 
                :key="oper.id"
                :operand-config="oper"
                @dragend="operandCmpDragEnd($event)"
                @dragstart="operandCmpDragStart(oper.id)"
            ></problem-operand>
            
            <!--equan operator - container circle and text -->
            <v-circle :config="equalSign"></v-circle>
            <v-text :config="equalText"></v-text>
        </v-layer>
    </v-stage>
</template>
<script>
import { ref, onMounted } from 'vue';
import ProblemOperand from '../components/problem-elements/ProblemOperand.vue';
export default {
  components:{
    ProblemOperand
  },
  setup() {
    
    
    ProblemOperand//Force to re-render on mounted 
    onMounted(()=>{
        console.log('onMounted');
        // this.$forceUpdate();
    });
    const currentOperandId = ref('');
    //vue-conva main canvas
    const configKonva = {
        width: 1200,
        height: 500
      }
    //sample circle
    const configCircle = {
        x: 100,
        y: 100,
        radius: 70,
        fill: "#FDE49C",
        stroke: "black",
        strokeWidth:4
      }
    //operands storing constants and variables
    const operands = ref([
            {
            id:'operand-1',
            type:'const',
            side:'lhs',
            configRect:{
                x:200,
                y:100,
                width:70,
                height:70,
                fill:"#FDE49C",
                stroke:"#FFB740",
                // draggable:true,
            },
            configValue:{
                x:215,//rectX+15
                y:110,//recty:+10
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
                y:100,
                width:70,
                height:70,
                fill:"#FDE49C",
                stroke:"#FFB740",
                // draggable:true,
            },
            configValue:{
                x:115,//rectX+15
                y:110,//recty:+10
                text: 'X',
                fontSize: 60
            } 
        }
      ])
    
    //circle for containing equal sign operator
    const equalSign = {
        x: 600,
        y: 100,
        radius: 50,
        // fill: "#50CB93",
        // stroke: "#50CB93",
        fill:"#FDE49C",
        stroke:"#FFB740",
        strokeWidth: 4
    }

    //equal operator text(=)
    const equalText = {
        x:580,
        y:80,
        text: '=',
        fontSize: 60
    }

    //Methods
    function operandCmpDragStart(operandId){
        //when start dragging an operand
        console.log('drag starting', operandId);
        //set currently dragging operand id
        currentOperandId.value = operandId;
    }
    function operandCmpDragEnd(event){
        //when drag end/drop an operand
        const xVal = event.evt.layerX;
        const yVal = event.evt.layerY;
        console.log('operand-drag-coordinates', xVal,yVal);
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
    //     console.log('current-operand',currentOperand);
    //     //update operand-text coordinates value 
    //     // currentOperand[0].configValue.x = parseInt(xVal)
    //     // currentOperand[0].configValue.y = parseInt(yVal)
    //     console.log('rect-new-value',currentOperand[0].configRect.x);
    // }

    function paragraphDrag(){
        console.log('paragraph-dragging');
    }
    return{
        configKonva,
        configCircle,
        operands,
        equalSign,
        equalText,
        operandCmpDragEnd,
        operandCmpDragStart,
        paragraphDrag,

    } 
  }
};
</script>
