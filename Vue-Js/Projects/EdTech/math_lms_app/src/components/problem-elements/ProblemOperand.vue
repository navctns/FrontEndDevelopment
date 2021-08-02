<template>
    <!-- <div @dragstart="draggingCmp"> -->
    <v-group :config="{ draggable: true}">    
        <!--Render variable/constant as rectangle-->
        <v-rect
            :config="operandConfig.configRect"
        ></v-rect>
        <!--render value(as text) inside the operands rectangle -->
        <v-text 
            :config="operandConfig.configValue"
        ></v-text>
    </v-group>

</template>
<script>

export default {
    props:['operandConfig'],
    setup(){
        function draggingCmp(){
            console.log('dragging-cmp');
        }
        return{
            draggingCmp
        }
    }
}
</script>
