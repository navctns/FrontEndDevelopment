<template>
  <li>
    <app-small-card>
      <template #content>
        <h2>{{name}}</h2>
        <h3>{{topic}}</h3>
        <h3>{{rating}}</h3>
      </template>
      <template #footer>
        <app-button value="Contact" color="green" size="lg"></app-button>
        <router-link :to="{ name: 'coach-info', params: {coachId:id} }">
          <app-button value="View Details" color="blue" size="lg"></app-button>
        </router-link>
      </template>
    </app-small-card>
  </li>
</template>
<script>
  export default{
    props:['id','name','topic','rating']
  }
</script>
<style scoped="">
  li{
    padding:1em;
    width:90%;
    margin:1em 0;
    /* text-align: center; */
    display: flex;
    justify-content: center;
  }
  h2,h3{
    font-weight: 200;
    display: flex;
  }
</style>
