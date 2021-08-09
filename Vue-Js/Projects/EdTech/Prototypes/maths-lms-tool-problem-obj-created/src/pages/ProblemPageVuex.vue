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
import { onBeforeMount, computed } from 'vue';
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
        const problemObj = computed(()=>{
            return store.getters.getProblemObj;
        })
        console.log('PROBLEM OBJ', problemObj.value);
        const equalOpers =[ 
            {
                id:1,
                configShape:{
                    x: 600,
                    y: 250,
                    radius: 30,
                    // fill: "#50CB93",
                    // stroke: "#50CB93",
                    fill:"#FDE49C",
                    stroke:"#FFB740",
                    strokeWidth: 4
                },
            
                //equal operator text(=)
                configValue:{
                    x:587,//shapeX-13
                    y:235,//shapeY-15
                    text: '=',
                    fontSize: 40
                }
            }

        ]
        function operandCmpDragStart(){
            console.log('operandCmpDragStart')
        }
        function operandCmpDragEnd(){
            console.log('operandCmpDragEnd')
        }
        return{
            configKonva,
            equalOpers,
            problem:problemObj,
            operandCmpDragStart,
            operandCmpDragEnd,
        }
    }
}
</script>
