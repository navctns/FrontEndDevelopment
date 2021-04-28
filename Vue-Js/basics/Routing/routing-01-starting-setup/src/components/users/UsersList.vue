<template>
  <button @click="programmaticNavigation">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data(){
    return{
      changesSaved:false,
    }
  },
  inject: ['users'],
  methods:{
    programmaticNavigation(){
      //Do some process Navigate after
      this.$router.push('/teams');
      //Other methods
      // this.$router.back();
      // this.$router.forward();
    },
    saveChanges(){
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next){
    console.log('UsersList cmp beforeRouteEnter');
    console.log(to,from);
    next();
  },
  unmounted(){
    //Whenever unmounting component (changing navigation)
    console.log('unmounted');
    //but you cant deny a navigation
  },
  beforeRouteLeave(to, from, next){
    //In some cases when want to do something
    // whenever leaves the component
    //Eg:when we want to save a form on component
    //we can warn the user about the unsaved changes
    console.log('users List cm beforeRouteLeave');
    console.log(to, from);
    if(this.changesSaved){
      next();
    }else{
      const userWantsToLeave = confirm('Are you sure? You got unsaved changes ?');
      next(userWantsToLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
