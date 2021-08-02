<template>
  <el-header id="navbar-container">
    <the-navbar>
    </the-navbar>
    <!--NAVBAR-->

  </el-header>
  <el-container id="home" ref="home">
    <el-main>
      <el-row>
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="showcase-item">
            <el-card>
              <div class="demo-basic--circle">

                <el-card class="inner-card">
                  <div class="block">
                    <el-avatar :size="200" :src="circleUrl">
                    </el-avatar>
                  </div>
                  <h3>Naveen V</h3>
                  <h4>(Frontend Developer)</h4>
                </el-card>
                <el-card class="inner-card">
                  <div class="skills-header">
                    <!-- <app-tag type="danger" label="Skills" effect="dark" size="medium" width="lg"></app-tag> -->
                    <h3>Skills</h3>
                  </div>
                  <div class="tags-container">
                    <div class="tag-group">
                      <app-tag type="danger" effect="dark" label="html/css" size="medium"></app-tag>
                      <app-tag type="" effect="dark" label="Bootstrap" size="medium"></app-tag>
                      <app-tag type="warning" effect="dark" label="Javascript" size="medium"></app-tag>
                      <app-tag type="success" effect="dark" label="Vue Js" size="medium"></app-tag>
                      <app-tag type="warning" effect="dark" label="Python/Django" size="medium"></app-tag>
                    </div>
                  </div>
                </el-card>


              </div>

            </el-card>
          </div>


            <!-- <div class="person-info">
              <h4>Naveen Vijayan</h4>
              <h5>
                <a href="mailto:navctns@gmail.com">navctns@gmail.com</a>
              </h5>
            </div> -->
        </el-col>
        <el-col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="showcase-item">
            <el-card>
              <div class="showcase-text">
                <span>
                  <!-- I am Naveen, I am a Front end developer, I create maintainable web applications and static websites -->
                  <h1>As a Frontend Developer</h1>
                  <p>
                    i work with technologies HTML5,CSS3,Javascirpt,Vue Js, Firebase and Python.
                    My philosophy about software development is that simple and maintainable development is to be prefered over complex UIs and unwanted features.
                  </p>
                </span>
              </div>
            </el-card>
          </div>
        </el-col>
        <!-- <el-col span="24"> -->

        <!-- </el-col> -->
      </el-row>

      <!-- SKILLS SECION -->

      <!-- <el-row> -->
      <!-- </el-row> -->
    </el-main>

</el-container>
<!-- SKILLS AND PROJECTS -->
<el-container>
  <el-card id="skills-projects" ref="skills-projects">
    <h2>Skills and Projects</h2>
    <skills-page-scroller></skills-page-scroller>
  </el-card>
</el-container>

<!--EXPERIENCE AND ACADEMICS -->
<el-container>
  <el-card id="experience" ref="experience">
    <h2>Experience and Academics</h2>
    <experience-and-academics></experience-and-academics>
  </el-card>
</el-container>

</template>

<script>
  import SkillsPageScroller from './SkillsPageScroller.vue';
  import ExperienceAndAcademics from './ExperienceAndAcademics.vue';
  export default {
    components:{
      SkillsPageScroller,
      ExperienceAndAcademics,
    },
    data () {
      return {
        // circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        // circleUrl:"../assets/5301-A.jpg",
        // circleUrl:"https://www.cybsafe.com/wp-content/uploads/2020/11/play-icon-03-1.png",
        circleUrl:'https://raw.githubusercontent.com/navctns/FrontEndDevelopment/50Days50Projects/Vue-Js/Projects/portfolio-app-element-plus-ui/src/assets/img/5301-A.jpg',
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"],
        activeIndex: '1',
        activeIndex2: '1',
        navbarVisibility:window.innerWidth > 768?true:false,
      }
    },
    methods:{
      // scrollMeTo(refName){
      //   console.log('on-home',refName);
      //   // console.log(refName, typeof refName);
      //   // const element = this.$refs[refName];
      //   // const top = element.offsetTop;
      //   // console.log(element,top);
      //   // window.scrollTo(0, top);
      // },
      //Navbar Methods
      toggleNavbar(){
        this.navbarVisibility = !this.navbarVisibility;
      },
      hideNavbar(){
        if(window.innerWidth < 768 )
        this.navbarVisibility = false;
      },
      scrollMeTo(event){
        console.log(event);
        // this.$emit('scroll-to',refName);
        // var element = this.$refs[refName];
        // var top = element.offsetTop;
        //
        // window.scrollTo(0, top);
      }
    }
  }
</script>
<style scoped>

  .el-aside{
    min-height: 100vh;
    /* background:#424642; */
  }
  .el-main{
    /* min-height: 80vh; */
    /* width:100%; */
    /* background: #F3F4ED; */
    /* background: #ddffbc; */
    /* background: #f7f7f7; */
    background: #F9F9F9;

  }
  .el-col{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    /* height: 80vh; */
  }

  .el-card{
    width:98%;
    display: flex;
    justify-content: center;
    border-radius: 1em;
    /* background: #f4f4f2; */
    background: #F9F9F9;
    margin:0;
    padding:0;

  }
  .el-card h2{
    margin-top: 1.5em;
  }
  a{
    text-decoration: none;
    color:#323232;

  }
  .person-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
  }
  /* .el-row{
    padding:2em;
  } */
  h2{
    line-height: 3em;
    /* color:#52734d; */
    color:#323232;
    margin-top:2em;
  }
  h1{
    margin: 0;
    font-size: 2.5em;
    font-weight:1200;
  }
  .el-container{
    /* background: #ddffbc; */
    height: auto;
    margin-bottom:1em;
    /* padding-top:2em; */
  }
  .content{
    display: flex;
    /* justify-content: center; */
    align-items: flex-start;
    /* height: 100%; */
  }
  .img-container{
    padding:2em;
  }
  .demo-basic--circle,.showcase-text{
    /* height:85vh; */
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:0;

  }
  .showcase-item{
    display: flex;
    /* align-items: center; */
    justify-content: center;
    gap:0;
    padding:0;
    margin:0;
    width:100%;
    height: 100%;
  }
  h4{
    margin:0;
  }
  h3{
    margin: 0.2em 0;
    text-align: center;
  }
  .skills-header{
    display: flex;
    justify-content: center;
    width:100%;
  }
  .tag-group{
    margin: auto;
  }
  .tags-container{
    display: fltags-containerex;
    justify-content:center;
    width:100%;
    margin:0;
  }
  .el-card.inner-card{
    background: #F9F9F9;
  }
  .el-avatar{
    display: flex;
    justify-content: center;
  }
  .el-card .el-card{
    margin:0.2em 0;
  }
  h2{
    margin:0;
    text-align: center;
  }
  @media (max-width:768px) {
    h1{
      line-height: 1.2em;
    }
  }
</style>
