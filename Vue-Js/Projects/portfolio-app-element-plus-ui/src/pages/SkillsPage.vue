<template>
  <el-container>
    <el-main>
      <el-row type="flex">
        <!--SKILLS-->
        <el-col :xs="24" :sm="24" :md="12" :lg="6">
          <app-skill-card
            :skill-one="skills.html"
            :skill-two="skills.css"
            @set-skill="switchProjectType"
          ></app-skill-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6">
          <app-skill-card
            :skill-one="skills.javascript"
            @set-skill="switchProjectType"
          ></app-skill-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6">
          <app-skill-card
            :skill-one="skills.vuejs"
            @set-skill="switchProjectType"
          ></app-skill-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6">
          <app-skill-card
            :skill-one="skills.python"
            @set-skill="switchProjectType"
          ></app-skill-card>
        </el-col>
      </el-row>
      <!--PROJECTS-->
      <el-row type="flex">
        <el-card class="projects-container">
          <h3>{{projectsHeading}} Projects</h3>
          <el-row>
            <app-project-card v-for="project in projects"
              :key="project.name"
              :project-name="project.name"
              :img-url="project.imgUrl"
              :description="project.description"
              :github="project.github"
              :show-git="project.showGit"

            ></app-project-card>
          </el-row>
        </el-card>

      </el-row>
    </el-main>
  </el-container>
</template>
<script>
  import { ref, watch, computed } from 'vue';
  import { useStore } from 'vuex';
  import AppSkillCard from '../components/UI/AppSkillCard.vue';
  export default{
    components:{
      AppSkillCard,
    },
    setup(){
      //Initialize store
      const store = useStore();
      //Get Projects Data contents
      const projectsData = store.getters.contentsData('projects');
      //Type of project
      const projectType = ref('html');
      function switchProjectType(type){
        console.log('project',type);
        //Switch Projects based on type(html,js, python..)
        projectType.value = type;
      }
      //currentProjects based on ProjectType
      const currentProjects = ref(projectsData.htmlCss);
      //Watch Project Type change
      const watchProjectType = watch(projectType,()=>{
        //Change project data content when change projectType
        currentProjects.value = projectsData[projectType];
        console.log('projects-current',projectsData.html,projectsData[projectType]);
      });
      //compute current projects
      const selectedProjects = computed(()=>{
        return projectsData[projectType.value];
      });
      //get skills
      const skills = store.getters.contentsData('skills');
      // Set Projects Heading(eg:Javascript Projects)
      const projectsHeading = computed(()=>{
        return skills[projectType.value].label;
      });
      return {
        projects:selectedProjects,
        switchProjectType,
        watchProjectType,
        skills,
        projectsHeading
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
  min-height: 10em;
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
  margin:0;
  min-height: 60vh;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
.projects-container h3{
  text-align: center;
  margin:0.5em 0;
}
/* .el-col{
  height: auto;
} */
</style>
