<template lang="html">
  <ul>
    <coach-card
      v-for="coach in coaches"
        :key="coach.id"
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
  data(){
    return{
      coaches:[
        {
          id:1,
          name:'Hari',
          topic:'Maths',
          rating:'5',
        },
        {
          id:2,
          name:'Ben',
          topic:'Architecture',
          rating:'4',
        },
        {
          id:3,
          name:'Naveen',
          topic:'Python',
          rating:'4',
        },
        {
          id:3,
          name:'Naveen',
          topic:'Python',
          rating:'4',
        },
      ]
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
