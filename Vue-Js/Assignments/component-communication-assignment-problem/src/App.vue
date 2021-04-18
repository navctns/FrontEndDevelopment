<template lang="html">
  <div class="user-details">
    <active-user :user-data="activeUser"></active-user>
    <user-data :user-data="activeUser"></user-data>
  </div>
</template>

<script>
export default {
  data(){
    return{
      users:[
        {
          name:'Matt New',
          age:32,
          username:'matnew',
          active:false,
        },
        {
          name:'Ravan',
          age:28,
          username:'ravan19',
          active:true,
        },
        {
          name:'Seetha',
          age:25,
          username:'seetha20',
          active:false,
        }
      ],
      activeUser:{
                name:'Ravan',
                age:28,
                username:'ravan19',
                active:true,
              },
    }
  },
  methods:{
    getActiveUser(){
      let activeUser = '';
      this.users.forEach(user =>{
        if(user.active){
          activeUser = user;
        }
      });
      return activeUser;
    }
  },
}
</script>

<style lang="css" scoped>
  .user-details{
    display: flex;
    /* flex-direction: column; */
    gap:1em;
  }
  .user-details > * {
    width: 100%;
    /* padding:1em; */
    border:2px #8ab6d6 solid;
    text-align: center;
    color:#464f41;
    background: #d8e3e7;
  }

</style>
