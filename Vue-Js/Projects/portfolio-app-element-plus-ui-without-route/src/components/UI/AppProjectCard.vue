<template>
  <el-col :xs="24" :sm="24" :md="12" :lg="6">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="imgUrl" class="image">
      <div class="project-info">
        <h4>{{projectName}}</h4>
        <div class="bottom">
          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
              <span>{{description}}</span>
              <div class="btn-container">
                <a target="_blank" :href="projectUrl" v-if="showDeployed"><el-button>View also</el-button></a>
                <a :href="github" target="_blank" v-if="githubLink"><font-awesome-icon :icon="['fab','github']" /></a>
              </div>
            </el-col>
            <!-- <el-col :xs="24" :sm="24" :md="12" :lg="12">
              <div class="btn-container">
                <el-button>View also</el-button>
              </div>
            </el-col> -->
          </el-row>

          <!-- <time class="time">{{ currentDate }}</time> -->
        </div>
      </div>
    </el-card>
  </el-col>
</template>
<script>
  import { computed } from 'vue';
  export default{
    // props:['imgUrl','projectName','description','github','projectUrl','showGit'],
    props:{
      imgUrl:{
        type:String,
      },
      projectName:{
        type:String,
      },
      description:{
        type:String,
      },
      github:{
        type:String,
      },
      projectUrl:{
        type:String,
      },
      showGit:{
        type:Boolean,
      },
    },
    setup(props){
      const githubVisibility = computed(()=>{
        return props.showGit;
      });
      const githubLink= computed(()=>{
        //to deside whether repo is to be shown or not
        if(props.github === 'private'){
          return false;
        }else{
          return true;
        }
      });
      const showDeployed = computed(()=>{
        //show deployed site or not
        if(props.projectUrl === 'none'){
          return false;
        }else{
          return true;
        }
      });
      return{
        githubVisibility,
        githubLink,
        showDeployed,
      }
    }
  }
</script>
<style scoped>
/* .el-card{
  width:30%;
  height: auto;
} */
.el-card img{
  width:100%;
  height:auto;
  min-height:8em;
  padding:0;
  margin:0;
}
.bottom{
  display: flex;
  justify-content: center;
  margin:0.2em 0;
  padding:0.5em;
}
.btn-container{
  display: flex;
  gap:1em;
  justify-content: center;
  align-items: center;
  margin: 0.2em 0;
  /* margin-bottom: 0.5em; */
}
.el-card{
  margin:0 0.2em;
  background: #F9F9F9;

}
.el-col{
  min-height: 6em;
}
.project-info{
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4{
  margin:0.2em 0;
}
span{
  min-height: 3em;
}
a{
  color:#323232;
  text-decoration: none;
}
a:focus,
a:hover{
  opacity:0.7;
}
</style>
