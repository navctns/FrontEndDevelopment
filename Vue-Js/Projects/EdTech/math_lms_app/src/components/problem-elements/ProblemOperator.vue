<template>
    <!-- <div @dragstart="draggingCmp"> -->
    <v-group :config="{ draggable: true}">    
        <!--Render variable/constant as rectangle-->
        <v-circle
            :config="operatorConfig.circleConfig"
        ></v-circle>
        <!--render value(as text) inside the operands rectangle -->
        <v-text 
            :config="operatorConfig.configValue"
        ></v-text>
    </v-group>

</template>
<script>

export default {
    props:['operatorConfig'],
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
