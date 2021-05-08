<template>
  <ul>
    <request-item
      v-for="request in requestsList"
        :key="request.id"
        :id="request.id"
        :coachId="request.coachId"
        :name="request.name"
        :message="request.message"
        :email="request.email"

    ></request-item>
  </ul>
</template>
<script>
  import RequestItem from './RequestItem.vue';
  export default{
    components:{
      RequestItem
    },
    computed:{
      requestsList(){
        return this.$store.getters['requests/getRequestsFromList'];
      }
    },
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
  ul{
    display: flex;
    flex-direction: column;
    gap:1em;
    list-style: none;
    margin: auto;
  }
</style>
