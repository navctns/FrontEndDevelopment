<template>
  <!--CIRCLE -->
  <v-circle v-if="shape === 'circle'" :config="config"
    @dragstart="dragStart"
    @dragend="dragEnd($event)"
  ></v-circle>
  <!--ELLIPSE-->
  <v-ellipse v-else-if="shape === 'ellipse'" :config="config"
    @dragstart="dragStart"
    @dragend="dragEnd($event)"
  ></v-ellipse>
  <!--RECTANGLE-->
  <v-rect v-else-if="shape === 'rect'" :config="config"
    @dragstart="dragStart"
    @dragend="dragEnd($event)"
  ></v-rect>
  <!--TRIANGLE-->
  <v-line v-else-if="shape === 'triangle'" :config="config"
    @dragstart="dragStart"
    @dragend="dragEnd($event)"
  ></v-line>
  <!--REGULAR POLYGON-->
  <v-regular-polygon :config="config" v-else-if="shape === 'polygon'"
    @dragstart="dragStart"
    @dragend="dragEnd($event)"
  ></v-regular-polygon>

</template>
<script>
  export default{
    props:{
      config:{
        type:Object,
      },
      shape:{
        type:String,
        default:null,
      }
    },
    emits:['drag-start','drag-end'],
    setup(props,context){
      //On drag start
      function dragStart(){
        context.emit('drag-start',
          {
            color:props.config.fill,
            shape:props.shape
          }
        );
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
