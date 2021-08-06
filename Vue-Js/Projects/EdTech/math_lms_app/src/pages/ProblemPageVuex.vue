<template>
    <!-- <p @dragstart="paragraphDrag">abcd</p> -->
    <v-stage :config="configKonva">
        <v-layer>
            <!-- <v-circle :config="configCircle"></v-circle> -->
            <!-- <v-rect :config="configRect"></v-rect> -->
            <!--Render every variables and constants as rectangles-->
          
            <!--PROBLEM ELEMENT LHS -->
            <!-- <problem-element
                v-for="elem in lhs"
                :key="elem.id"
                :config-obj="elem"
                :type="elem.type"
                @drag-start="operandCmpDragStart"
                @drag-end="operandCmpDragEnd"
            ></problem-element> -->
            <!--PROBLEM ELEMENT RHS -->
            <!-- <problem-element
                v-for="elem in rhs"
                :key="elem.id"
                :config-obj="elem"
                :type="elem.type"
            ></problem-element> -->
            <!--EQUAL OPERATORS - container circle and text(For various steps) -->
            <!-- <problem-operator
                v-for="elem in equalOpers"
                :key="elem.id"
                :config-obj="elem"
                :type="elem.type"
            ></problem-operator> -->
            <!-- <v-circle :config="equalSign"></v-circle>
            <v-text :config="equalText"></v-text> -->
        </v-layer>
    </v-stage>
</template>
<script>
import konvaConf from './konvaConfig.js';
// import ProblemOperator from '../components/problem-elements/ProblemOperator.vue';
// import ProblemElement from '../components/problem-elements/ProblemElement.vue';
import { onMounted } from 'vue';
import { useStore } from 'vuex';
export default{
    components:{
        // ProblemOperator,
        // ProblemElement,
    },
    setup(){
        //konva basic configurations
        const configKonva = konvaConf.canvas;
        //Initialize store 
        const store = useStore();
        onMounted(()=>{
            store.dispatch('setCurrentProblem');
        })

        return{
            configKonva,
        }
    }
}
</script>
