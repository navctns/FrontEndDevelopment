<template>
  <el-container>
    <el-main>

      <!--SKILLS-->
      <!-- <el-row type="flex">
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
      </el-row> -->
      <el-row type="flex">
        <!--SIDEBAR MENU -->
        <el-col :xs="2" :sm="2" :md="4" :lg="4">
          <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;"
            v-if="isMobileView">
            <el-radio-button :label="false"><font-awesome-icon :icon="['fas','cog']" /></el-radio-button>
            <el-radio-button :label="true">collapse</el-radio-button>
          </el-radio-group> -->
          <el-button v-if="isMobileView" @click="toggleSkillsBar"><font-awesome-icon :icon="['fas','cog']" /> Skills</el-button>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item index="2">
              <app-skill-card
                :skill-one="skills.javascript"
                @set-skill="switchProjectType"
                :size="skillCardSize"
              ></app-skill-card>
              <!-- <template #title>Navigator Two</template> -->
            </el-menu-item>
            <el-menu-item index="3">
              <!-- <i class="el-icon-document"></i> -->
              <app-skill-card
                :skill-one="skills.vuejs"
                @set-skill="switchProjectType"
                :size="skillCardSize"
              ></app-skill-card>
              <!-- <template #title>Navigator Three</template> -->
            </el-menu-item>
            <el-menu-item index="4">
              <!-- <i class="el-icon-setting"></i> -->
              <app-skill-card
                :skill-one="skills.python"
                @set-skill="switchProjectType"
                :size="skillCardSize"
              ></app-skill-card>
              <!-- <template #title>Navigator Four</template> -->
            </el-menu-item>
          </el-menu>
        </el-col>
        <!--PROJECTS-->
        <el-col :xs="22" :sm="22" :md="20" :lg="20">
          <el-card class="projects-container">
            <h3>{{projectsHeading}} Projects</h3>
            <el-row>
              <app-project-card v-for="project in projects"
                :key="project.name"
                :project-name="project.name"
                :img-url="project.imgUrl"
                :description="project.description"
                :github="project.github"
              ></app-project-card>
            </el-row>
          </el-card>
        </el-col>


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
      //For the collapse sidebar
      const isCollapse = ref(false);
      //variable for resizing skill-card
      const skillCardSize = ref('lg');
      function handleOpen(key, keyPath) {
        //For the collapse sidebar
        console.log(key, keyPath);
      }
      function handleClose(key, keyPath) {
        //For the collapse sidebar
        console.log(key, keyPath);
      }
      const sideNavSize = watch(isCollapse,()=>{
        //resize skill card on collapse and expand
        if(isCollapse.value){
          skillCardSize.value ='sm';
        }else{
          skillCardSize.value = 'lg';
        }
      });
      //Mobile view or not
      const isMobileView = ref(window.innerWidth<768);
      function toggleSkillsBar(){
        //Toggle skills bar on smaller screens
        isCollapse.value = !isCollapse.value;
      }
      //Initialize store
      const store = useStore();
      //Get Projects Data contents
      const projectsData = store.getters.contentsData('projects');
      //Type of project
      const projectType = ref('html');
      function switchProjectType(type){
        if(isMobileView.value){
          //collapse sidebar
          isCollapse.value = !isCollapse.value;
        }
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
        projectsHeading,
        isCollapse,
        handleOpen,
        handleClose,
        skillCardSize,
        sideNavSize,
        isMobileView,
        toggleSkillsBar
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
  margin:0;
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
  min-height: 85vh;
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /* min-height: 400px; */
    min-height: 100vh;
    z-index: 8;

  }
  .el-menu-vertical-demo{
    width:100%;
    min-height:100vh;
    z-index: 8;
    margin-top: 0.5em;
  }
  .el-menu--collapse{
    min-height: 100vh;
  }
  .el-menu-item{
    /* min-height: 15em; */
    height: auto;
    /* margin: 0.5em 0; */
    position: relative;
    padding:0;
  }
  .el-menu{
    display: flex;
    flex-direction: column;
    gap:0.5em;
    padding:0;
    /* z-index: 10; */
  }
  .el-button{
    position: fixed;
    top:4em;
    z-index: 9;
    margin-bottom: 0.5em;
  }
  @media (max-width:768) {
    .el-menu{
      width:50%;
    }
  }
</style>


<!-- <template>
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">expand</el-radio-button>
  <el-radio-button :label="true">collapse</el-radio-button>
</el-radio-group>
<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template #title>
      <i class="el-icon-location"></i>
      <span>Navigator One</span>
    </template>
    <el-menu-item-group>
      <template #title><span>Group One</span></template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Group Two">
      <el-menu-item index="1-3">item three</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <template #title><span>item four</span></template>
      <el-menu-item index="1-4-1">item one</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <template #title>Navigator Two</template>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <template #title>Navigator Three</template>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <template #title>Navigator Four</template>
  </el-menu-item>
</el-menu>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style> -->
