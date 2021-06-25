<template>
  <v-stage :config="configKonva">
   <v-layer>
     <v-circle :config="coloredCircle1"
       @dragstart="circleDragStart"
       @dragend="circleDragEnd"
     ></v-circle>
     <v-circle :config="coloredCircle2"
       @dragstart="circleDragStart"
       @dragend="circleDragEnd"
     ></v-circle>
     <v-circle :config="coloredCircle3"
       @dragstart="circleDragStart"
       @dragend="circleDragEnd"
     ></v-circle>
     <v-circle :config="coloredCircle4"
       @dragstart="circleDragStart"
       @dragend="circleDragEnd"
     ></v-circle>
     <v-circle :config="configCircle1"
       @dragstart="circleDragStart"
       @dragend="circleDragEnd"
     >
   </v-circle>

     <v-circle :config="configCircle2"
       @dragstart="circleDragStart"
       @dragend="circleDragEnd"
     ></v-circle>
     <v-circle :config="configCircle3"
       @dragstart="circleDragStart"
       @dragend="circleDragEnd"
     ></v-circle>
     <v-circle :config="configCircle4"
       @dragstart="circleDragStart"
       @dragend="circleDragEnd"
     ></v-circle>
     <v-text :config="redText"/>
     <v-text :config="greenText"/>
     <v-text :config="blueText"/>
     <v-text :config="yellowText"/>

     <!-- <v-rect :config="configRect"></v-rect> -->
     <!-- <v-rect :config="circleContainerBox"></v-rect> -->
     <!-- <v-rect :config="rectContainerBox"></v-rect> -->
   </v-layer>
   <v-layer ref="dragLayer"></v-layer>

 </v-stage>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
   return {
     configKonva: {
       width: 1500,
       height: 800
     },
     coloredCircle1:{
       x: 200,
       y: 100,
       radius: 50,
       fill: "#66DE93",
       stroke: "#66DE93",
       strokeWidth: 4,
       draggable: true
     },
     coloredCircle2:{
       x: 200,
       y: 210,
       radius: 50,
       fill: "#FF616D",
       stroke: "#FF616D",
       strokeWidth: 4,
       draggable: true
     },
     coloredCircle3:{
       x: 200,
       y: 320,
       radius: 50,
       fill: "#3C8DAD",
       stroke: "#3C8DAD",
       strokeWidth: 4,
       draggable: true
     },
     coloredCircle4:{
       x: 200,
       y: 430,
       radius: 50,
       fill: "#E8E46E",
       stroke: "#E8E46E",
       strokeWidth: 4,
       draggable: true
     },
     redText:{
       x:800,
       y:100,
       text: 'red',
       fontSize: 20
     },
     greenText:{
       x:700,
       y:200,
       text: 'green',
       fontSize: 20
     },
     blueText:{
       x:800,
       y:200,
       text: 'blue',
       fontSize: 20
     },
     yellowText:{
       x:900,
       y:200,
       text: 'yellow',
       fontSize: 20
     },
     configCircle1: {
       x: 810,
       y: 100,
       radius: 50,
       fill: "#fff",
       stroke: "black",
       strokeWidth: 4,
       draggable: true
     },
     configCircle2: {
       x: 700,
       y: 210,
       radius: 50,
       fill: "#fff",
       stroke: "black",
       strokeWidth: 4,
       draggable: true
     },
     configCircle3: {
       x: 810,
       y: 210,
       radius: 50,
       fill: "#fff",
       stroke: "black",
       strokeWidth: 4,
       draggable: true
     },
     configCircle4: {
       x: 920,
       y: 210,
       radius: 50,
       fill: "#fff",
       stroke: "black",
       strokeWidth: 4,
       draggable: true
     },
     configRect:{
       x:200,
       y:100,
       width:50,
       height:50,
       fill:'#5F939A',
       stroke:"#2F5D62",
       strokeWidth:2
     },
     circleContainerBox:{
       x:100,
       y:400,
       width:300,
       height:100,
       fill:'#fff',
       stroke:"#2F5D62",
       strokeWidth:2
     },
     rectContainerBox:{
       x:800,
       y:400,
       width:300,
       height:100,
       fill:'#fff',
       stroke:"#2F5D62",
       strokeWidth:2
     },
     circleIsDragging:false,
   };
 },
 methods:{
   circleDragStart(){
     this.circleIsDragging = true;
     console.log('circle dragging:',this.circleIsDragging);
   },
   circleDragEnd(){
     this.circleIsDragging = false;
     console.log('circle dragging:',this.circleIsDragging);
   }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
