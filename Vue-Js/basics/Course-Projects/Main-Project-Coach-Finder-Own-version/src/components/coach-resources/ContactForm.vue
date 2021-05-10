<template>
  <form class="form-control" @submit.prevent="submitData">
    <input v-model="name" class="form-item" type="text" placeholder="Your name">
    <input v-model="email" class="form-item" type="mail" placeholder="your mail">
    <textarea v-model="message" class="form-item" name="name" rows="2" cols="40" placeholder="your message"></textarea>
    <app-button size="xxl" value="Contact Coach" color="green"></app-button>
  </form>
  <!-- <form>
    <input type="text" placeholder="Name">
    <input type="mail" placeholder="Email">
    <textarea name="name" rows="2" cols="40"></textarea>
    <app-button value="Contact Coach" size="lg" color="blue"></app-button>
  </form> -->
</template>
<script>
  export default{
    props:['coachId'],
    data(){
      return{
        name:'',
        email:'',
        message:'',
      }
    },
    methods:{
      submitData(){
        console.log(this.coachId)
        const reqObj = {
            id:new Date().toISOString(),
            coachId:this.coachId,
            name:this.name,
            message:this.message,
            email:this.email
        }
        this.$store.dispatch('requests/addRequest',reqObj);
        this.name = '';
        this.email = '';
        this.message = '';
        // const  this.$store.getters['coaches/getCoachById'](this.coachId);

      }
    }
  }
</script>
<style scoped>
.form-control{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:0.5em;
  margin: auto;
}
.form-item{
  border-radius: 0.3em;
  /* border:1px solid #3d84b8; */
  border:1px solid #91c788;
  width:100%;
  font-size:1.2em;
}
  /* form{
    width:50%;
  } */
</style>
