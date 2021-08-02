<template>
  <div :style="backgroundStyle" class="main-bg">
    <el-container class="main-bg">
      <el-main>
        <el-row :gutter="0" type="flex">
            <el-col :span="8" :offset="12">
              <div class="grid-content">
                <login-form @switch="chooseRegister" v-if="mode === 'login'"></login-form>
                <register-form @switch="chooseLogin" v-if="mode === 'register'"></register-form>
              </div>
            </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>

</template>
<script>
import { ref } from 'vue';
import LoginForm from '../../components/auth/LoginForm.vue';
import RegisterForm from '../../components/auth/RegisterForm.vue';

export default{

  components:{
    LoginForm,
    RegisterForm,
  },
  setup(){
    //login/register mode
    const mode = ref('register');
    const backgroundStyle = `backgroundImage:url('../../assets/img/joanna-kosinska-1_CMoFsPfso-unsplash.jpg');`;
    function chooseLogin(){
      //when user choose to login
      mode.value = 'login';
    }
    function chooseRegister(){
      //when user choose to choose to register
      mode.value = 'register';
    }
    return{
      mode,
      chooseLogin,
      chooseRegister,
      backgroundStyle
    }
  }
}
</script>
<style scoped>
  .main-bg{
    background:url('../../assets/img/jess-bailey-l3N9Q27zULw-unsplash.jpg');
    background-size: contain;
    height:100vh;
    margin:0;
  }
</style>
