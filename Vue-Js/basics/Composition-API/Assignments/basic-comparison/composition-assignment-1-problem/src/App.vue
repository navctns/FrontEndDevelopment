<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!--    //USING SEPARATE REF -->
  <!-- <h3 v-if="goalVisibility">{{courseGoal}}</h3> -->
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <!-- <button @click="toggleGoal">Toggle Goal</button> -->
  <!--     //USING REF OBJECT -->
  <h3 v-if="courseGoal.visibility">{{courseGoal.goal}}</h3>
  <button @click="toggleGoal">Toggle Goal</button>
  <input type="text" placeholder="change goal" v-model="courseGoal.newGoalVal" @blur="changeGoal">
  <button @click="prevGoal">Prev Goal</button>
  <!--USING OPTIONS API -->
  <!-- <h3 v-if="goalVisibility">{{courseGoal}}</h3> -->
  <!-- <button @click="toggleGoal">Toggle Goal</button> -->
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';

export default {
  //USING OPTIONS API
  // data(){
  //   return{
  //     courseGoal:'Learn Vue to Create Useful & Crazy Apps',
  //     goalVisibility:true,
  //   }
  // },
  // methods:{
  //   toggleGoal(){
  //     this.goalVisibility = !this.goalVisibility;
  //   }
  // }

  //USING COMPOSITION API
  setup(){
    //USING SEPARATE REF
    // const courseGoal = ref('Learn Vue to Create Useful & Crazy Apps');
    // const courseGoalVisibility = ref(true);
    // function toggleGoal(){
    //   courseGoalVisibility.value = ! courseGoalVisibility.value;
    // }
    //USING REF OBJECT
    // const courseGoal = ref({
    //   goal:'Learn Vue to Create Useful & Crazy Apps',
    //   visibility:true,
    // });
    // function toggleGoal(){
    //   courseGoal.value.visibility = ! courseGoal.value.visibility;
    // }
    //USING REACTIVE OBJECT
    const courseGoal = reactive({
      goal:'Learn Vue to Create Useful & Crazy Apps',
      visibility:true,
      oldGoal:'',
      newGoalVal:'',
    });
    function toggleGoal(){
      courseGoal.visibility = ! courseGoal.visibility;
    }
    function changeGoal(){
      courseGoal.oldGoal = courseGoal.goal;
      courseGoal.goal = courseGoal.newGoalVal;
    }
    function undoGoalChange(){
      courseGoal.goal = courseGoal.oldGoal;
    }
    return{
      //USING SEPARATE REF
      // courseGoal:courseGoal,
      // goalVisibility:courseGoalVisibility,
      // toggleGoal:toggleGoal,
      //USING REF OBJECT
      courseGoal:courseGoal,
      toggleGoal:toggleGoal,
      changeGoal,
      prevGoal:undoGoalChange,

    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
