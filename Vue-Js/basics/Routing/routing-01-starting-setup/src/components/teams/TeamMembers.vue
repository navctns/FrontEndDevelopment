<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  props:['teamId'],
  inject:['users','teams'],
  data() {
    return {
      teamName: '',
      members:[],
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
    };
  },
  methods:{
    loadTeamMembers(teamId){
      // const teamId = route.params.teamId;
      console.log('team id ',teamId);
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const membersIds = selectedTeam.members;
      const selectedMembers = [];

      for(const memberId of membersIds){
        const selectedUser = this.users.find(user => user.id === memberId);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    }
  },
  created(){
    //When component is created before it shown on screen
    this.loadTeamMembers(this.teamId)
    // console.log(this.asc);//Undefined 
    //Cant be accessed as a prop
    console.log(this.$route.query)
  },
  watch:{
    teamId(newId){
      this.loadTeamMembers(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
