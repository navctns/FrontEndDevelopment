<template>
  <el-container>
    <el-main>
      <el-row type="flex">
        <!-- <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <div class="content">
            <p>Projects are done on HTML, CSS, Javascript, and Vue js</p>
          </div>
        </el-col> -->
        <el-col :xs="24" :sm="24" :md="12" :lg="6">
          <el-card>
            <div class="two-item-container">
              <div class="img-sm-container">
                <h2>HTML</h2>
                <img src="../assets/img/icons8-html-5-100.png" alt="">
              </div>
              <div class="img-sm-container">
                <h2>CSS</h2>
                <img src="../assets/img/icons8-css3-100.png" alt="">
              </div>
            </div>
            <div class="btn-container">
              <el-button>View Projects</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6">
          <el-card>
            <div class="img-container">
              <h2>Javascript</h2>
              <img src="../assets/img/icons8-javascript-logo1-100.png" alt="">
            </div>
            <div class="btn-container">
              <el-button>View Projects</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6">
          <el-card>
            <div class="img-container">
              <h2>Vue Js</h2>
              <img src="../assets/img/icons8-vue-js-100.png" alt="">
            </div>
            <div class="btn-container">
              <el-button>View Projects</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6">
          <el-card>
            <div class="img-container">
              <h2>Python</h2>
              <img src="../assets/img/python-128px.png" alt="" style="width:100px; height:100px;">
            </div>
            <div class="btn-container">
              <el-button>View Projects</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!--PROJECTS-->
      <el-row type="flex">
        <el-card class="projects-container">
          <h2>HTML & CSS Projects</h2>
          <el-row>
            <app-project-card v-for="project in projects"
              :key="project.name"
              :img-url="project.imgUrl"
              :description="project.description"
            ></app-project-card>
          </el-row>
        </el-card>

      </el-row>
    </el-main>
  </el-container>
</template>
<script>
  import { ref, watch } from 'vue';
  import { useStore } from 'vuex';
  export default{
    setup(){
      //Initialize store
      const store = useStore();
      //Get Projects Data contents
      const projectsData = store.getters.contentsData('projects');
      //Type of project
      const projectType = ref('htmlCss');
      function switchProjectType(type){
        //Switch Projects based on type(html,js, python..)
        projectType.value = type;
      }
      //currentProjects based on ProjectType
      const currentProjects = ref(projectsData.htmlCss);
      //Watch Project Type change
      const watchProjectType = watch(projectType,()=>{
        //Change project data content when change projectType
        currentProjects.value = projectsData[projectType];
      });
      return {
        projects:currentProjects,
        switchProjectType,
        watchProjectType,
      }
    }
  }
</script>
<style scoped>
.el-main{
  height: 100vh;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
}
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.img-container{
  padding:1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:0;
}
.img-sm-container{
  padding:1em;
  /* min-height:10em; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:0;
}
.el-row{
  display: flex;
  justify-content: center;
  width:100%;
}
.two-item-container{
  display: flex;
  gap:1em;
}
.el-card{
  min-height: 16em;
}
.btn-container{
  display: flex;
  justify-content: center;
}
ul{
  list-style: none;
}
.projects-container{
  width:100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
.projects-container h2{
  text-align: center;
}

</style>
