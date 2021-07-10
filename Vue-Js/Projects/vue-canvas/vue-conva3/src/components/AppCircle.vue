<template>
  <v-circle :config="config"
    @dragstart="dragStart"
    @dragend="dragEnd($event)"
  ></v-circle>
</template>
<script>
  export default{
    props:{
      config:{
        type:Object,
      }
    },
    emits:['drag-start','drag-end'],
    setup(props,context){
      //On drag start
      function dragStart(){
        context.emit('drag-start',props.config.fill);
      }
      function dragEnd(event){
        //drag end
        console.log(window,event.evt.layerX);
        //pointer positions on dragend
        const pointerX = event.evt.layerX;
        const pointerY = event.evt.layerY;
        context.emit('drag-end',pointerX,pointerY);
      }
      return{
        dragStart,
        dragEnd,
      }
    }
  }
</script>
