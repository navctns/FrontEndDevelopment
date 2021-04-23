<template lang="html">
  <div>
    <!-- <h4>Name:{{userData.name}}</h4> -->
    <!-- <h5>Age:{{userData.age}}</h5> -->
    <form @submit.prevent="addUserData">
      <div>
        <label for="">Name</label>
        <input type="text" v-model="name">
      </div>
      <div>
        <label for="">Age</label>
        <input type="number" v-model="age">
      </div>
      <div>
        <button class="btn">Add User</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props:{
    userData:Object,
  },
  emits:['new-user-data'],
  data(){
    return{
      name:'',
      age:0,
    }
  },
  methods:{
    addUserData(){
      if(this.age !== 0 && this.name !== '' ){
        console.log(this.name,this.age);
        this.$emit('new-user-data',this.name,this.age);
      }
    }
  }
}
</script>

<style lang="css" scoped>
  form{
    display:flex;
    flex-direction: column;
    gap:1em;
    padding:1em;
    justify-content:start;
  }
  form > * {
    display: flex;
    justify-content: start;
    gap:1em;
    width:100%;
  }
  form > * > * {
    width: 100%;
  }
  .btn{
    border:2px solid #8ab6d6;
    background: #2978b5;
    color:#f8f5f1;
    padding:0.5em;
  }
</style>
