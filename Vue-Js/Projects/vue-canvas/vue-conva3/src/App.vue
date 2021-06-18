<template>
  <v-stage :config="configKonva">
   <v-layer>
     <v-circle :config="configCircle"
       @dragstart="circleDragStart"
       @dragend="circleDragEnd"
     ></v-circle>
     <v-rect :config="configRect"></v-rect>
     <v-rect :config="circleContainerBox"></v-rect>
     <v-rect :config="rectContainerBox"></v-rect>
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
     configCircle: {
       x: 100,
       y: 100,
       radius: 70,
       fill: "#F55C47",
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
