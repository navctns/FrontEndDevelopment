<template>
  <app-card>
    <!-- <template #header> -->
    <!-- <div v-for = "coach in getCoachById"
      :key="coach.id"
    > -->
      <!-- <h3>{{getCoachById(parseInt(coachId)).name}}</h3> -->
      <!-- <h3 v-html="getCoach.name"></h3> -->

      <h3>Coach</h3>
      <h4>{{getCoach}}</h4>
    <!-- </div> -->

    <!-- </template> -->
  </app-card>
</template>
<script>
  // import { mapGetters } from 'vuex';
  export default{
    props:['coachId'],
    data(){
      return{
        coach:null,
      }
    },
    computed:{
      getCoach(){
        return this.$store.getters['coaches/getCoachById'](this.coachId);
        // return this.$store.dispatch('coaches/getCoachById',this.coachId)

      }
      // ...mapGetters({
      //   getCoachById:'coaches/getCoachById'
      // })

      // getCoach(){
      //   console.log(this.$store.getters['coaches/getCoachById'](this.coachId));
      //   const coach = this.$store.getters['coaches/getCoachById'](this.coachId);
      //   console.log(coach);
      //
      //   return this.$store.getters['coaches/getCoachById'](this.coachId);
      //   // return this.$store.getters['coaches/getCoachById'](this.coachId);
      //   // console.log(this.$store.getters['coaches/getCoachById'](this.coachId);
      //   // console.log(this.coachId);
      //   // const coach =  this.$store.dispatch('coaches/getCoachById',parseInt(this.coachId)).
      //   // const coach = '';
      //   // this.$store.dispatch('coaches/getCoachById',parseInt(this.coachId))
      //   // .then((coachObj)=>{
      //   //   // const that = this;
      //   //   console.log(coachObj,this.coach);
      //   //   this.coach = coachObj;
      //   //   return coachObj;
      //   // });
      //   // console.log(coach);
      //   // return this.$store.dispatch('coaches/getCoachById',parseInt(this.coachId));
      //   // return coach;
      // }
    }
  }
</script>
