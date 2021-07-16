<template>
  <v-stage :config="configKonva">
    <v-layer>
      <!--DRAGGABLE ITEMS -->
      <v-circle :config="circleConfig"/>
      <v-line :config="triangleConfig"/>
      <v-ellipse :config="ellipseConfig"/>
      <v-rect :config="squareConfig"/>
      <v-regular-polygon :config="hexagonConfig"/>
      <!--NON DRAGGABLE DRAG TO PLACE -->
      <v-rect :config="squareContainer"/>
      <v-rect :config="ellipseContainer"/>
      <v-rect :config="triangleContainer"/>
      <v-rect :config="circleContainer"/>
      <v-rect :config="hexagonContainer"/>
      <!-- LABELS -->
      <v-text :config="labelHexagonContainer"/>
      <v-text :config="labelCircleContainer"/>
      <v-text :config="labelTriangleContainer"/>
      <v-text :config="labelEllipseContainer"/>
      <v-text :config="labelSquareContainer"/>
    </v-layer>
  </v-stage>
</template>
<script>
  export default{
    setup(){
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
         radiusX: 100,
         radiusY: 50,
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
       }
    }
  }
</script>
