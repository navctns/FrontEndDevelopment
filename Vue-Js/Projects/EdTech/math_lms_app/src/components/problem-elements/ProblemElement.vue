<template>
    <!--FOR OPERATORS -->
    <v-group :config="{ draggable: false}" v-if="type=='oper'">    
        <!--Render variable/constant as rectangle-->
        <v-circle
            :config="configObj.configShape"
        ></v-circle>
        <!--render value(as text) inside the operands rectangle -->
        <v-text 
            :config="configObj.configValue"
        ></v-text>
    </v-group>
    <!--FOR OPERANDS -->
    <v-group :config="{ draggable: true}" v-else 
        @dragstart="$emit('drag-start',configObj.id,configObj.side, configObj.valType)"
        @dragend="$emit('drag-end',$event)"
    >    
        <!--Render variable/constant as rectangle-->
        <v-rect
            :config="configObj.configShape"
        ></v-rect>
        <!--render value(as text) inside the operands rectangle -->
        <v-text 
            :config="configObj.configValue"
        ></v-text>
    </v-group>

</template>
<script>

export default {
    props:['configObj','type'],
    emits:['drag-start','drag-end'],
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
