<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ user.age }}</h3> -->
    <user-data :first-name="firstName" :last-name="lastName" :age="user.age"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="Firstname" v-model="firstName">
      <input type="text" placeholder="Lastname" ref="lastNameInput">
      <button @click="setLastName">Set Lastname</button>
    </div>
  </section>
</template>

<script>
import UserData from './components/UserData.vue';
import {ref, computed } from 'vue';
import { reactive } from 'vue';
// import { ref, reactive, isReactive, isRef, toRefs } from 'vue';

export default {
  components:{
    UserData
  },
  setup(){
    //COMPUTED
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);

    function setFirstName(event){
      firstName.value = event.target.value;
    }
    function setLastName(){
      lastName.value = lastNameInput.value.value;
    }
    const uName = computed(function(){
      return firstName.value + ' ' + lastName.value;
    });
    //ref creates value can be used in template
    //ref function creates a reactive object
    //WITHOUT OBJECT
    // const uName = ref('Andre Zulawski');
    // const uAge = ref(45);
    //WITH REF and OBJECT
    // const user = ref({
    //   name:'Andre Zulawski',
    //   age:45,
    // })
    //WITH REACTIVE AND OBJECT(should be object)
    // const uAge = ref(31);
    const user = reactive({
      name:'Andre Zulawski',
      age:45,
    });
    // console.log(uAge.value);
    // console.log(user.name);
    // console.log(isRef(uAge.value));
    // console.log(isReactive(user.name));
    // const userRefs = toRefs(user);
    setTimeout(function(){
      //WITHOUT OBJECT
      // uName.value = 'Andre';
      // uAge.value = 47;
      //WITH REF and OBJECT
      // user.value.name = 'Andre';
      // user.value.age = 47;
      //WITH REACTIVE
      user.name = 'Andre';
      user.age = 47;
    },2000);

    function setNewAge(){
      user.age = 52;
    }

    return{
      // userName:user.value.name,
      // age:user.value.age,
      // userName:userRefs.name,
      // age:userRefs.age,
      user:user,
      setAge:setNewAge,
      userName:uName,
      setFirstName,
      setLastName,
      firstName,
      lastName,
      lastNameInput

    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
