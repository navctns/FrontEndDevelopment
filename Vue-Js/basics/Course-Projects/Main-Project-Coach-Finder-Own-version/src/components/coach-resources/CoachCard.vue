<template>
  <li>
    <app-small-card>
      <template #content>
        <h2>{{name}}</h2>
        <h3>{{topic}}</h3>
        <h3>{{rating}}</h3>
      </template>
      <template #footer>
        <router-link to="/coaches" class="link">
          <app-button value="Contact" color="green" size="xxl"></app-button>
        </router-link>
        <router-link class="link" :to="{ name: 'coach-info', params: {coachId:id} }">
          <app-button value="View Details" color="blue" size="xxl"></app-button>
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
.link{
  margin: 0;
  width: 100%;
  display: block;
  background-color: inherit;
  padding: 0;

}
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
