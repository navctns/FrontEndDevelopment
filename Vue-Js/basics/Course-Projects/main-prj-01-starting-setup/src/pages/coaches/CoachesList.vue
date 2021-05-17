<template>
  <div>
    <base-dialog :show="!!error" title="An error occured!" @close="handleError">
      <p>{{error}}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <base-card>
          <div class="controls">
            <base-button mode="flat" @click="loadCoaches">Refresh</base-button>
            <base-button link to="/register">Register as Coach</base-button>
          </div>

          <div v-if="isLoading">
            <base-spinner></base-spinner>
          </div>
          <ul v-if="hasCoaches">
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
        <h3 v-else>No coaches found</h3>
      </base-card>

    </section>
  </div>

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
        isLoading:false,
        activeFilters:{
          frontend:true,
          backend:true,
          career:true,
        },
        error:null,
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
        console.log('after filter',filteredCoaches)
        return filteredCoaches;
      },
      isCoach(){
        return this.$store.getters['coaches/isCoach'];
      },
      hasCoaches(){
        return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
      }
    },
    methods:{
      setFilters(updatedFilters){
        this.activeFilters = updatedFilters;
      },
      async loadCoaches( refresh = false){
        console.log('refresh', refresh);
        this.isLoading = true;
        try{
          await this.$store.dispatch('coaches/loadCoaches',{forceRefresh:refresh});
        }catch(error){
          this.error = error.message || 'Something went wrong';
        }
        console.log('coaches loaded to list')
        this.isLoading = false;
      },
      handleError(){
        this.error = null;
        console.log('error', !!this.error);
      }
    },
    created(){
      console.log('created - load coaches');
      this.loadCoaches();
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
