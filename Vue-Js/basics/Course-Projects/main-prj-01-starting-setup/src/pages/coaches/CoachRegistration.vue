<template>
  <base-card>
    <coach-form @save-data="saveData"></coach-form>
  </base-card>
</template>
<script>
  import CoachForm from '../../components/coaches/CoachForm.vue';
  export default{
    components:{
      CoachForm,
    },
    methods:{
      saveData(data){
        this.$store.dispatch('coaches/registerCoach', data);
        // this.$router.push('/coaches');
        this.$router.replace('/coaches');//Cant go back
      }
    }
  }
</script>
