<template lang="html">
  <ul>
    <coach-card
      v-for="coach in coachesList"
        :key="coach.id"
        :id="coach.id"
        :name="coach.name"
        :topic="coach.topic"
        :rating="coach.rating"
    ></coach-card>
  </ul>
</template>

<script>
import CoachCard from './CoachCard.vue';
export default {
  components:{
    CoachCard,
  },
  computed:{
    coachesList(){
      console.log('coatchesList from cmp');
      const coaches = this.$store.getters['coaches/getAllCoaches'];
      console.log(coaches);
      return this.$store.getters['coaches/getAllCoaches'];
    }
  },
  data(){
    return{

    }

  }
}
</script>

<style lang="css" scoped>
  ul{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    justify-content: center;
    list-style: none;
    grid-gap: 0;
  }
</style>
