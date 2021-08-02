<template>
  <colors-task v-if="taskIndex === 1" @task-success="showResults"></colors-task>
  <shapes-task v-if="taskIndex === 2" @task-success="showResults"></shapes-task>
  <task-switcher @next-task="hideResults" v-if="showResultsBox"></task-switcher>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ColorsTask from './components/tasks-components/ColorsTask.vue'
import ShapesTask from './components/tasks-components/ShapesTask.vue'
import TaskSwitcher from './components/TaskSwitcher.vue'
import { ref } from 'vue';
export default {
  components:{
    ColorsTask,
    TaskSwitcher,
    ShapesTask,
  },
  setup() {
    const taskIndex = ref(1);
    const showResultsBox = ref(false);
    function showResults(){
      // taskIndex.value += 1;
      showResultsBox.value = true;
    }
    function hideResults(){
      taskIndex.value += 1;
      console.log('task no',taskIndex.value);
      showResultsBox.value = false;
    }
   return {
     taskIndex,
     showResults,
     showResultsBox,
     hideResults,
   };
 }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nextBtn{
  border: 1px solid #323232;
}
</style>
