<template>
    <!-- <div @dragstart="draggingCmp"> -->
    <v-group :config="{ draggable: true}">    
        <!--Render variable/constant as rectangle-->
        <v-circle
            :config="configObj.configShape"
        ></v-circle>
        <!--render value(as text) inside the operands rectangle -->
        <v-text 
            :config="configObj.configValue"
        ></v-text>
    </v-group>

</template>
<script>

export default {
    props:['configObj'],
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
