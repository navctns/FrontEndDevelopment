<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{error}}</p>
      <p v-else-if="!isLoading &&(!results || results.length === 0)">No Stored Experiences found, Start adding some survey results first...</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  props: ['updateData'],
  components: {
    SurveyResult,
  },
  mounted(){
    this.loadExperiences();
  },
  data(){
    return{
      results:[],
      isLoading:false,
      error:null,
      // getNewData:false,
    };
  },
  watch:{
    updateData(){
      if(this.updateData){
        console.log('UX:update data')
        this.loadExperiences();
      }
    },
  },
  methods:{
    loadExperiences(){
      this.isLoading = true;
      this.error = null;//Resetting error to null
      //since GET method is default, and not needed header and body, can get data like this
      fetch('https://vue-http-connect-14047-default-rtdb.firebaseio.com/surveys.json')
      .then((response)=>{
        if(response.ok){
          return response.json();
        }
      }).then((data)=>{
        this.isLoading = false;
        console.log(data);
        const results = [];
        for(const id in data){
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating,
          });
        }
        this.results = results;
      })
      .catch((error)=>{
        console.log(error);
        this.error = 'Failed to fetch data - Please try again later';
        this.isLoading = false;
      })

    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
