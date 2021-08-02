<template lang="html">
  <form @submit.prevent="createFriend">
    <input type="text" name=""  placeholder="name" v-model="inputName">
    <!-- <input type="text" name=""  placeholder="id" v-model="inputId"> -->
    <input type="phone" name=""  placeholder="phone" v-model="inputPhone">
    <input type="email" name=""  placeholder="mail" v-model="inputMail">
    <label for="favourite">Favourite</label>
    <input type="checkbox" name="favourite" value="" placeholder="Favourite">
    <!-- <a href="" type="submit" class="btn">Create</a> -->
    <button class="btn">Create Contact</button>
  </form>
</template>

<script>
export default {
  emit:['new-friend'],
  data(){
    return{
      inputName:'',
      inputId:'',
      inputPhone:'',
      inputMail:'',
    }
  },
  methods:{
    createFriend(){
      console.log('form inputs',this.inputName,this.inputId)
      if(this.inputName !== '' && this.inputPhone !== '' && this.inputMail !== '' ){
        //Create a new friend object
        const newFriend = {
          id:new Date().toISOString(),
          name:this.inputName,
          phone:this.inputPhone,
          mail:this.inputMail,
          isFavourite:false,
        }
        //Emit to parent (App)
        this.$emit('new-friend',newFriend);
      }

    }
  }
}
</script>

<style lang="css" scoped>
</style>
