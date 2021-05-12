<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
        <div class="controls">
          <base-button mode="flat">Refresh</base-button>
          <base-button link to="/register">Register as Coach</base-button>
        </div>
        LIST OF COACHES
        <ul>
          <coach-item v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          >
        </coach-item>
      </ul>
    </base-card>

  </section>
</template>
<script>
  import CoachItem from '../../components/coaches/CoachItem.vue';
  import CoachFilter from '../../components/coaches/CoachFilter.vue';

  export default{
    components:{
      CoachItem,
      CoachFilter,
    },
    data(){
      return{
        activeFilters:{
          frontend:true,
          backend:true,
          career:true,
        }
      }
    },
    computed:{
      filteredCoaches(){
        const coaches = this.$store.getters['coaches/coaches'];
        console.log('all coaches', coaches);
        const filteredCoaches =  coaches.filter(coach => {
          if(this.activeFilters.frontend && coach.areas.includes('frontend')){
            console.log('include frontend')
            return true;
          }
          if(this.activeFilters.backend && coach.areas.includes('backend')){
            console.log('include backend')
            return true;
          }
          if(this.activeFilters.career && coach.areas.includes('career')){
            console.log('include career')
            return true;
          }
          return false;
        });
        // console.log('after filter',filteredCoaches)
        return filteredCoaches;
      },
      isCoach(){
        return this.$store.getters['coaches/isCoach'];
      }
    },
    methods:{
      setFilters(updatedFilters){
        this.activeFilters = updatedFilters;
      }
    }
  }
</script>
<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }
</style>
