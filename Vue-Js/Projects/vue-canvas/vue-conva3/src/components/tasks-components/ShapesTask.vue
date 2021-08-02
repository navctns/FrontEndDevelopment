<template>
  <v-stage :config="configKonva">
    <v-layer>
      <!--DRAGGABLE ITEMS -->
      <app-shape shape="circle" :config="circleConfig"
        @drag-start="shapeDragStart"
        @drag-end="shapeDragEnd"
      ></app-shape>
      <app-shape shape="triangle" :config="triangleConfig"
        @drag-start="shapeDragStart"
        @drag-end="shapeDragEnd"
      ></app-shape>
      <app-shape shape="ellipse" :config="ellipseConfig"
        @drag-start="shapeDragStart"
        @drag-end="shapeDragEnd"
      ></app-shape>
      <app-shape shape="rect" :config="squareConfig"
        @drag-start="shapeDragStart"
        @drag-end="shapeDragEnd"
      ></app-shape>
      <app-shape shape="polygon" :config="hexagonConfig"
        @drag-start="shapeDragStart"
        @drag-end="shapeDragEnd"
      ></app-shape>

      <!-- <v-line :config="triangleConfig"/>
      <v-ellipse :config="ellipseConfig"/>
      <v-rect :config="squareConfig"/>
      <v-regular-polygon :config="hexagonConfig"/> -->
      <!--NON DRAGGABLE DRAG TO PLACE -->
      <v-rect :config="squareContainer"/>
      <v-rect :config="ellipseContainer"/>
      <v-rect :config="triangleContainer"/>
      <v-rect :config="circleContainer"/>
      <v-rect :config="hexagonContainer"/>
      <!-- LABELS -->
      <v-text v-if="!hexagonMatched" :config="labelHexagonContainer"/>
      <v-text v-if="!circleMatched" :config="labelCircleContainer"/>
      <v-text v-if="!triangleMatched" :config="labelTriangleContainer"/>
      <v-text v-if="!ellipseMatched" :config="labelEllipseContainer"/>
      <v-text v-if="!squareMatched" :config="labelSquareContainer"/>
    </v-layer>
  </v-stage>
</template>
<script>
  import { ref, computed, watch } from 'vue';
  export default{
    emits:['task-success'],
    setup(_,context){
      //CANVAS PARAMETERS
       const configKonva = {
         width: 1500,
         height: 600
       };
       const circleConfig ={
         x: 200,
         y: 50,
        radius: 50,
        fill: 'green',
        draggable: true
       }
       const triangleConfig = {
         x:200,
         y:150,
         points: [0, 0, 100, 0, 100, 100],
         closed: true,
         stroke: 'black',
         fill:'red',
         draggable: true
       }

       const ellipseConfig = {
         x:200,
         y:300,
         radiusX: 80,
         radiusY: 40,
         fill: 'yellow',
         stroke: 'black',
         draggable: true
       }

       const squareConfig = {
           x: 200,
           y: 400,
           width: 70,
           height: 70,
           fill: 'red',
           stroke: 'black',
           draggable: true
         }
        const hexagonConfig = {
          x:200,
          y:550,
          sides:6,
          radius:40,
          fill: 'red',
          stroke: 'black',
          draggable: true
        }
        const squareContainer = {
          x:500,
          y:50,
          width: 200,
          height: 200,
          stroke: 'black',
        }
        const ellipseContainer = {
          x:750,
          y:50,
          width: 200,
          height: 200,
          stroke: 'black',
        }
        const triangleContainer = {
          x:1000,
          y:50,
          width: 200,
          height: 200,
          stroke: 'black',
        }
        const circleContainer = {
          x:500,
          y:300,
          width: 200,
          height: 200,
          stroke: 'black',
        }

        const hexagonContainer = {
          x:750,
          y:300,
          width: 200,
          height: 200,
          stroke: 'black',
        }

        const labelHexagonContainer = {
          x:820,
          y:400,
          text: 'Hexagon',
          fontSize: 20
        }
        const labelCircleContainer = {
          x:570,
          y:400,
          text: 'Circle',
          fontSize: 20
        }
        const labelTriangleContainer = {
          x:1070,
          y:150,
          text:'Triangle',
          fontSize: 20
        }
        const labelEllipseContainer = {
          x:820,
          y:150,
          text:'Ellipse',
          fontSize: 20
        }

        const labelSquareContainer = {
          x:570,
          y:150,
          text:'Square',
          fontSize: 20
        }
        //Task Controlling Variables
        const currentShape = ref(null);
        const shapeIsDragging = ref(false);
        const squareMatched = ref(false);
        const ellipseMatched = ref(false);
        const triangleMatched = ref(false);
        const circleMatched = ref(false);
        const hexagonMatched = ref(false);
        //METHODS
        function shapeDragStart(el){
          //Set currently dragging element(by its shape)
          currentShape.value = el.shape;
          shapeIsDragging.value = true;
          console.log('shape dragging:',shapeIsDragging.value);
        }

        function shapeDragEnd(ptrX,ptrY){
          //Analyze the drag end position
          shapeIsDragging.value = false;
          console.log('circle dragging:',shapeIsDragging.value);
          console.log(ptrX,ptrY);
          if(currentShape.value === 'rect' && ptrX >=500 && ptrX<=700 && ptrY>=50 && ptrY<=250){
            //Color Matched
            console.log('Green Matched');
            squareMatched.value = true;
          }else if(currentShape.value === "ellipse" && ptrX >= ellipseContainer.x && ptrX <= ellipseContainer.x + ellipseContainer.width && ptrY >= ellipseContainer.y && ptrY <= ellipseContainer.y + ellipseContainer.height){
            console.log('red matched');
            // plainCircleRed.value.fill = currentShape.value;
            ellipseMatched.value = true;
          }else if(currentShape.value === "triangle" && ptrX >= triangleContainer.x && ptrX<= triangleContainer.x+triangleContainer.width && ptrY >= triangleContainer.y && ptrY <= triangleContainer.y + triangleContainer.height){
            console.log('Blue matched');
            // plainCircleBlue.value.fill = currentShape.value;
            triangleMatched.value = true;
          }else if(currentShape.value === "circle" && ptrX >= circleContainer.x && ptrX<= circleContainer.x+circleContainer.width && ptrY >= circleContainer.y && ptrY <= circleContainer.y + circleContainer.height){
            console.log('Yellow matched');
            // plainCircleYellow.value.fill = currentShape.value;
            circleMatched.value = true;
          }else if(currentShape.value === "polygon" && ptrX >= hexagonContainer.x && ptrX<= hexagonContainer.x+hexagonContainer.width && ptrY >= hexagonContainer.y && ptrY <= hexagonContainer.y + hexagonContainer.height){
            console.log('Yellow matched');
            // plainCircleYellow.value.fill = currentShape.value;
            hexagonMatched.value = true;
          }
        }
          const taskSucceded = computed(()=>{
            return circleMatched.value && squareMatched.value && ellipseMatched.value && triangleMatched.value && hexagonMatched.value;
          });

          //Emit Success
          const taskResult = watch(taskSucceded, ()=>{
             //emit success if task succeded
             context.emit('task-success');
          });


       return{
         configKonva,
         circleConfig,
         triangleConfig,
         ellipseConfig,
         squareConfig,
         hexagonConfig,
         squareContainer,
         ellipseContainer,
         triangleContainer,
         circleContainer,
         hexagonContainer,
         labelHexagonContainer,
         labelCircleContainer,
         labelTriangleContainer,
         labelEllipseContainer,
         labelSquareContainer,
         shapeDragStart,
         shapeDragEnd,
         squareMatched,
         circleMatched,
         hexagonMatched,
         ellipseMatched,
         triangleMatched,
         taskResult,
       }
    }
  }
</script>
