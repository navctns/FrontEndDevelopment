<template>
  <v-stage :config="configKonva">
   <v-layer>
     <app-circle :config="coloredCircleGreen"
        v-if="!greenMatched"
       @drag-start="circleDragStart"
       @drag-end="circleDragEnd"
     ></app-circle>
     <app-circle :config="coloredCircleRed"
        v-if="!redMatched"
       @drag-start="circleDragStart"
       @drag-end="circleDragEnd"
     ></app-circle>
     <app-circle :config="coloredCircleBlue"
       v-if="!blueMatched"
       @drag-start="circleDragStart"
       @drag-end="circleDragEnd"
     ></app-circle>
     <app-circle :config="coloredCircleYellow"
       v-if="!yellowMatched"
       @drag-start="circleDragStart"
       @drag-end="circleDragEnd"
     ></app-circle>

     <v-circle :config="plainCircleRed"

     >
   </v-circle>

     <v-circle :config="plainCircleGreen"

     ></v-circle>
     <v-circle :config="plainCircleBlue"

     ></v-circle>
     <v-circle :config="plainCircleYellow"

     ></v-circle>
     <v-text :config="redText"/>
     <v-text :config="greenText"/>
     <v-text :config="blueText"/>
     <v-text :config="yellowText"/>
     <!-- <v-text v-if="taskSucceded" :config="successText"/>
     <v-rect v-if="taskSucceded" :config="nextPuzzle" @click="nextTask"/>
     <v-text v-if="taskSucceded" :config="nextBtn" class="nextBtn" @click="nextTask"/> -->
     <!-- <v-rect :config="configRect"></v-rect> -->
     <!-- <v-rect :config="circleContainerBox"></v-rect> -->
     <!-- <v-rect :config="rectContainerBox"></v-rect> -->
   </v-layer>
   <v-layer ref="dragLayer"></v-layer>

 </v-stage>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { ref, computed, watch } from 'vue';
export default {
  emits:['task-success'],
  setup(_,context) {

    //CANVAS PARAMETERS
     const configKonva = {
       width: 1500,
       height: 550
     };

     const coloredCircleGreen = {
       x: 200,
       y: 100,
       radius: 50,
       fill: "#66DE93",
       stroke: "#66DE93",
       strokeWidth: 4,
       draggable: true
     };

     const coloredCircleRed = {
       x: 200,
       y: 210,
       radius: 50,
       fill: "#FF616D",
       stroke: "#FF616D",
       strokeWidth: 4,
       draggable: true
     };

     const coloredCircleBlue ={
       x: 200,
       y: 320,
       radius: 50,
       fill: "#3C8DAD",
       stroke: "#3C8DAD",
       strokeWidth: 4,
       draggable: true
     };

     const coloredCircleYellow = {
       x: 200,
       y: 430,
       radius: 50,
       fill: "#E8E46E",
       stroke: "#E8E46E",
       strokeWidth: 4,
       draggable: true
     };

     const redText = {
       x:800,
       y:100,
       text: 'red',
       fontSize: 20
     };

     const greenText = {
       x:700,
       y:200,
       text: 'green',
       fontSize: 20
     };

     const blueText = {
       x:800,
       y:200,
       text: 'blue',
       fontSize: 20
     };

     const yellowText = {
       x:900,
       y:200,
       text: 'yellow',
       fontSize: 20
     };

     const successText = {
       x:500,
       y:500,
       text: 'Success, Your task is completed',
       fill:"green",
       fontSize: 40
     };

     const plainCircleRed = ref({
       x: 810,
       y: 100,
       radius: 50,
       fill: "#fff",
       stroke: "black",
       strokeWidth: 4,
       draggable: false
     });

     const plainCircleGreen = ref({
       x: 700,
       y: 210,
       radius: 50,
       fill: "#fff",
       stroke: "black",
       strokeWidth: 4,
       draggable: false
     });

     const plainCircleBlue = ref({
       x: 810,
       y: 210,
       radius: 50,
       fill: "#fff",
       stroke: "black",
       strokeWidth: 4,
       draggable: false
     });

     const plainCircleYellow = ref({
       x: 920,
       y: 210,
       radius: 50,
       fill: "#fff",
       stroke: "black",
       strokeWidth: 4,
       draggable:false
     });

     const configRect = {
       x:200,
       y:100,
       width:50,
       height:50,
       fill:'#5F939A',
       stroke:"#2F5D62",
       strokeWidth:2
     };

     const circleContainerBox = {
       x:100,
       y:400,
       width:300,
       height:100,
       fill:'#fff',
       stroke:"#2F5D62",
       strokeWidth:2
     };

     const rectContainerBox = {
       x:800,
       y:400,
       width:300,
       height:100,
       fill:'#fff',
       stroke:"#2F5D62",
       strokeWidth:2
     };

     const nextBtn = {
       x:640,
       y:560,
       text: 'Next Task',
       fill:"blue",
       fontSize: 30
     };

     const nextPuzzle = {
       x:600,
       y:550,
       width:200,
       height:50,
       stroke:"#323232",
       strokeWidth:1,
     };
     const circleIsDragging = ref(false);
     const currentCircleColor = ref(null);
     const greenMatched = ref(false);
     const redMatched = ref(false);
     const blueMatched = ref(false);
     const yellowMatched = ref(false);
     const taskIndex = ref(1);

     //METHODS

     function circleDragStart(color){
       // console.log('fill-color',color);
       //Set currently dragging circle(by its color)
       currentCircleColor.value = color;
       circleIsDragging.value = true;
       console.log('circle dragging:',circleIsDragging.value);
     }
     function circleDragEnd(ptrX,ptrY){
       circleIsDragging.value = false;
       console.log('circle dragging:',circleIsDragging.value);
       console.log(ptrX,ptrY);
       if(currentCircleColor.value === '#66DE93' && ptrX >=669 && ptrX<720 && ptrY>180 && ptrY<243){
         //Color Matched
         console.log('Green Matched');
         plainCircleGreen.value.fill = currentCircleColor.value;
         greenMatched.value = true;
       }else if(currentCircleColor.value === "#FF616D" && ptrX >= redText.x-30 && ptrX <= redText.x+30 && ptrY >= redText.y -30 && ptrY <= redText.y +30){
         console.log('red matched');
         plainCircleRed.value.fill = currentCircleColor.value;
         redMatched.value = true;
       }else if(currentCircleColor.value === "#3C8DAD" && ptrX >= blueText.x-30 && ptrX<= blueText.x+30 && ptrY >= blueText.y -30 && ptrY <= blueText.y +30){
         console.log('Blue matched');
         plainCircleBlue.value.fill = currentCircleColor.value;
         blueMatched.value = true;
       }else if(currentCircleColor.value === "#E8E46E" && ptrX >= yellowText.x-30 && ptrX<= yellowText.x+30 && ptrY >= yellowText.y -30 && ptrY <= yellowText.y +30){
         console.log('Yellow matched');
         plainCircleYellow.value.fill = currentCircleColor.value;
         yellowMatched.value = true;
       }

     }
     function nextTask(){
       console.log('goto next task');
       taskIndex.value +=1;
     }

     const taskSucceded = computed(()=>{
       return greenMatched.value && redMatched.value && blueMatched.value && yellowMatched.value;
     });

     //Emit Success
     const taskResult = watch(taskSucceded, ()=>{
        //emit success if task succeded
        context.emit('task-success');
     });

     return{
       configKonva,
       coloredCircleGreen,
       coloredCircleRed,
       coloredCircleBlue,
       coloredCircleYellow,
       redText,
       greenText,
       blueText,
       yellowText,
       successText,
       plainCircleRed,
       plainCircleBlue,
       plainCircleGreen,
       plainCircleYellow,
       configRect,
       circleContainerBox,
       rectContainerBox,
       nextBtn,
       nextPuzzle,
       circleIsDragging,
       currentCircleColor,
       greenMatched,
       redMatched,
       blueMatched,
       yellowMatched,
       taskIndex,
       circleDragStart,
       circleDragEnd,
       nextTask,
       taskSucceded,
       taskResult,
     }
 }

}
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.nextBtn{
  border: 1px solid #323232;
}
</style>
