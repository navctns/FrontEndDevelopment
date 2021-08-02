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
     <!-- <v-circle :config="coloredCircleRed"
       @dragstart="circleDragStart"
       @dragend="circleDragEnd"
     ></v-circle>
     <v-circle :config="coloredCircleBlue"
       @dragstart="circleDragStart"
       @dragend="circleDragEnd"
     ></v-circle>
     <v-circle :config="coloredCircleYellow"
       @dragstart="circleDragStart"
       @dragend="circleDragEnd"
     ></v-circle> -->
     <!-- Non-Colored circles -->
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
     <v-text v-if="taskSucceded" :config="successText"/>
     <v-rect v-if="taskSucceded" :config="nextPuzzle" @click="nextTask"/>
     <v-text v-if="taskSucceded" :config="nextBtn" class="nextBtn" @click="nextTask"/>
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
     coloredCircleGreen:{
       x: 200,
       y: 100,
       radius: 50,
       fill: "#66DE93",
       stroke: "#66DE93",
       strokeWidth: 4,
       draggable: true
     },
     coloredCircleRed:{
       x: 200,
       y: 210,
       radius: 50,
       fill: "#FF616D",
       stroke: "#FF616D",
       strokeWidth: 4,
       draggable: true
     },
     coloredCircleBlue:{
       x: 200,
       y: 320,
       radius: 50,
       fill: "#3C8DAD",
       stroke: "#3C8DAD",
       strokeWidth: 4,
       draggable: true
     },
     coloredCircleYellow:{
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
     successText:{
       x:500,
       y:500,
       text: 'Success, Your task is completed',
       fill:"green",
       fontSize: 40
     },
     plainCircleRed: {
       x: 810,
       y: 100,
       radius: 50,
       fill: "#fff",
       stroke: "black",
       strokeWidth: 4,
       draggable: false
     },
     plainCircleGreen: {
       x: 700,
       y: 210,
       radius: 50,
       fill: "#fff",
       stroke: "black",
       strokeWidth: 4,
       draggable: false
     },
     plainCircleBlue: {
       x: 810,
       y: 210,
       radius: 50,
       fill: "#fff",
       stroke: "black",
       strokeWidth: 4,
       draggable: false
     },
     plainCircleYellow: {
       x: 920,
       y: 210,
       radius: 50,
       fill: "#fff",
       stroke: "black",
       strokeWidth: 4,
       draggable:false
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
     nextBtn:{
       x:640,
       y:560,
       text: 'Next Task',
       fill:"blue",
       fontSize: 30
     },
     nextPuzzle:{
       x:600,
       y:550,
       width:200,
       height:50,
       stroke:"#323232",
       strokeWidth:1,
     },
     circleIsDragging:false,
     currentCircleColor:null,
     greenMatched:false,
     redMatched:false,
     blueMatched:false,
     yellowMatched:false,
     taskIndex:1,
   };
 },
 methods:{
   circleDragStart(color){
     // console.log('fill-color',color);
     //Set currently dragging circle(by its color)
     this.currentCircleColor = color;
     this.circleIsDragging = true;
     console.log('circle dragging:',this.circleIsDragging);
   },
   circleDragEnd(ptrX,ptrY){
     this.circleIsDragging = false;
     console.log('circle dragging:',this.circleIsDragging);
     console.log(ptrX,ptrY);
     if(this.currentCircleColor === '#66DE93' && ptrX >=669 && ptrX<720 && ptrY>180 && ptrY<243){
       //Color Matched
       console.log('Green Matched');
       this.plainCircleGreen.fill = this.currentCircleColor;
       this.greenMatched = true;
     }else if(this.currentCircleColor === "#FF616D" && ptrX >= this.redText.x-30 && ptrX <= this.redText.x+30 && ptrY >= this.redText.y -30 && ptrY <= this.redText.y +30){
       console.log('red matched');
       this.plainCircleRed.fill = this.currentCircleColor;
       this.redMatched = true;
     }else if(this.currentCircleColor === "#3C8DAD" && ptrX >= this.blueText.x-30 && ptrX<= this.blueText.x+30 && ptrY >= this.blueText.y -30 && ptrY <= this.blueText.y +30){
       console.log('Blue matched');
       this.plainCircleBlue.fill = this.currentCircleColor;
       this.blueMatched = true;
     }else if(this.currentCircleColor === "#E8E46E" && ptrX >= this.yellowText.x-30 && ptrX<= this.yellowText.x+30 && ptrY >= this.yellowText.y -30 && ptrY <= this.yellowText.y +30){
       console.log('Yellow matched');
       this.plainCircleYellow.fill = this.currentCircleColor;
       this.yellowMatched = true;
     }

   },
   nextTask(){
     console.log('goto next task');
     this.taskIndex +=1;
   }
 },
 computed:{
   taskSucceded(){
     //Task success check
     return this.greenMatched && this.redMatched && this.blueMatched && this.yellowMatched;
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
