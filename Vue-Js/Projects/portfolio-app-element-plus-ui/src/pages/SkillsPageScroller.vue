<template>
<el-container style="height: 500px; border: 1px solid #eee">

  <el-button v-if="isMobileView" @click="toggleSkillsBar"><font-awesome-icon :icon="['fas','cog']" /> Skills</el-button>
  <el-aside style="background-color: rgb(238, 241, 246)" v-if="showSideNav">
    <!-- <h3>Skills</h3> -->
    <!-- <div class="skills-header" v-if="!isMobileView">
      <app-tag type="success" label="Skills" effect="dark" size="medium" width="lg"></app-tag>
    </div> -->
    <!--SKILLS Header -->
    <el-header style="text-align: center; font-size: 18px">
      <span><h3>Skills</h3></span>
    </el-header>
    <el-menu :default-openeds="['1', '3']">
      <el-menu-item index="2">
          <!-- <i class="el-icon-setting"></i> -->
          <app-skill-card
            :skill-one="skills.html"
            @set-skill="switchProjectType"
            :size="skillCardSize"
          ></app-skill-card>
          <!-- <template #title>Navigator Four</template> -->
        </el-menu-item>
        <el-menu-item>
          <app-skill-card
            :skill-one="skills.javascript"
            @set-skill="switchProjectType"
            :size="skillCardSize"
          ></app-skill-card>
        <!-- <template #title>Navigator Two</template> -->
        </el-menu-item>
        <el-menu-item>
          <app-skill-card
            :skill-one="skills.vuejs"
            @set-skill="switchProjectType"
            :size="skillCardSize"
          ></app-skill-card>
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
  </el-aside>
  <!-- PROJECTS -->
  <el-container>
    <el-main v-if="projectsVisibility">
      <el-card class="projects-container">
        <h2>{{projectsHeading}} Projects</h2>
        <el-row>
          <app-project-card v-for="project in projectsData"
            :key="project.name"
            :project-name="project.name"
            :img-url="project.imgUrl"
            :description="project.description"
            :github="project.github"
            :project-url="project.domain"

          ></app-project-card>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
  import AppSkillCard from '../components/UI/AppSkillCard.vue';

  export default {
    components:{
      AppSkillCard,
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item),
        skills :this.$store.getters.contentsData('skills'),
        skillCardSize:'sm',
        isMobileView:window.innerWidth<768,
        isCollapse:false,
        projectType:'vuejs',
        showSideNav:window.innerWidth<768?false:true,
        projectsVisibility:true,
      }
    },
    computed:{
        projectsData(){
          return this.$store.getters.contentsData('projects')[this.projectType];
        },
        projectsHeading(){
          return this.skills[this.projectType].label;
        }

    },
    methods:{
      switchProjectType(type){
        if(this.isMobileView){
          //collapse sidebar
          // this.showSideNav = !this.showSideNav;
          this.toggleSkillsBar()
        }
        console.log('project',type);
        //Switch Projects based on type(html,js, python..)
        this.projectType = type;
      },
      toggleSkillsBar(){
        //Toggle skills bar on smaller screens
        this.showSideNav = !this.showSideNav;
        //show and hide projects main (for better styling)
        this.projectsVisibility = !this.projectsVisibility;
      }
  }
}
</script>

<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    width:200px;
  }
  .el-menu-item{
    position: relative;
    min-height: 14em;
    margin:0.8em 0;
    min-width: 90%;
    background: #F9F9F9;

  }
  .projects-container{
    width:100%;
    margin:0;
    min-height: 85vh;
    background: #F9F9F9;

    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }
  .el-row{
    display: flex;
    justify-content: center;
    width:100%;
    gap:1em;
  }
  .projects-container h2{
    text-align: center;
  }
  .el-button{
    position: fixed;
    top:4em;
    z-index: 9;
    margin-bottom: 0.5em;
  }
  h3{
    margin:0;
    text-align: center;
    font-size: 18px;
  }
  .skills-header{
    display: flex;
    justify-content: center;
  }
  .el-header{
    margin: 0 1em;
    /* position: fixed;
    width:100%; */
    display: flex;
    justify-content: center;
  }
  @media (max-width:768) {
    .el-aside{
      width:100%;
      position: absolute;
    }
    .el-container{
      margin:0;
    }
  }
</style>
