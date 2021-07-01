
<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-button v-if="isMobileView" @click="toggleSkillsBar"><font-awesome-icon :icon="['fas','cog']" /> Skills</el-button>
  <el-aside style="background-color: rgb(238, 241, 246)" v-if="showSideNav">
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
      <!-- <el-submenu index="1">
        <template #title><i class="el-icon-message"></i>Navigator One</template>
        <el-menu-item-group>
          <template #title>Group 1</template>
          <el-menu-item index="1-1">Option 1</el-menu-item>
          <el-menu-item index="1-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="1-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>Option4</template>
          <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <!-- <el-submenu index="2">
        <template #title><i class="el-icon-menu"></i>Navigator Two</template>
        <el-menu-item-group>
          <template #title>Group 1</template>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="2-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template #title>Option 4</template>
          <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template #title><i class="el-icon-setting"></i>Navigator Three</template>
        <el-menu-item-group>
          <template #title>Group 1</template>
          <el-menu-item index="3-1">Option 1</el-menu-item>
          <el-menu-item index="3-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="3-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template #title>Option 4</template>
          <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
    </el-menu>
  </el-aside>

  <el-container>
    <!-- <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <template #dropdown>
          <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>Tom</span>
    </el-header> -->

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
        projectType:'html',
        showSideNav:window.innerWidth<768?false:true,
        projectsVisibility:true,
      }
    },
    computed:{
    //   skillCardSize(){
    //     //resize skill card on collapse and expand
    //     if(window.innerWidth<768){
    //       return 'sm';
    //     }else{
    //       return 'lg';
    //     }
    //   }
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
  }
  .projects-container{
    width:100%;
    margin:0;
    min-height: 85vh;
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
  @media (max-width:768) {
    .el-aside{
      width:100%;
      position: absolute;
    }
  }
</style>
