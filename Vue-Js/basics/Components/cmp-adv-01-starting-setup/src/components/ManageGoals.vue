<template lang="html">
  <h2>Manage Goals</h2>
  <input type="text" ref="goal">
  <button @click="setGoal">Set Goal</button>
  <!-- USE  TELEPORT TO PLACE AN ELEMENT
  IN DIFFERENT POSITION USING CSS SELECTOR FOR SEMANTIC CORRECTIONS -->
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid</h2>
      <p>Please enter atleast a few characters...</p>
      <button class="btn-danger" @click="confirmError">Okay</button>
    </error-alert>
  </teleport>

</template>
<script>
import ErrorAlert from './ErrorAlert.vue';

  export default{
    components:{
      ErrorAlert,
    },
    data(){
      return{
        inputIsInvalid:false,
      }
    },
    methods:{
      setGoal(){
        const enteredValue = this.$refs.goal.value;
        if(enteredValue === ''){
          this.inputIsInvalid = true;
        }
      },
      confirmError(){
        this.inputIsInvalid = false;
      },
    }
  }
</script>
<style scoped="">
   .btn-danger{
    /* background: #eeebdd; */
    background: #ff8882;
    color:#810000;
    border-radius: 0.5em;
    padding:0.5em;
  }
</style>
