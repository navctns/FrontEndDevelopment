<template>
  <coach-details :coachId="coachId"></coach-details>
</template>
<script>
  import CoachDetails from '../components/coach-resources/CoachDetails.vue';
  export default{
    components:{
      CoachDetails
    },
    props:['coachId']
  }
</script>
