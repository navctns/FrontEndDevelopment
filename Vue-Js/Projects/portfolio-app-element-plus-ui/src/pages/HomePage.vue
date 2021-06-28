<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="showcase-item">
            <el-card>
              <div class="demo-basic--circle">
                <div class="block"><el-avatar :size="200" :src="circleUrl"></el-avatar></div>
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
                <p>
                  <!-- I am Naveen, I am a Front end developer, I create maintainable web applications and static websites -->
                  As a Web Developer i work with technologies HTML5,CSS3,Javascirpt,Vue Js, Firebase and Python.
                  My philosophy about software development is that simple and maintainable development is to be prefered over complex UIs and unwanted features.
                </p>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <!-- SKILLS SECION -->

    </el-main>
</el-container>
</template>

<script>
  import SkillsPage from './SkillsPage.vue';
  export default {
    component:{
      SkillsPage,
    },
    data () {
      return {
        // circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        // circleUrl:"../assets/5301-A.jpg",
        circleUrl:"https://www.cybsafe.com/wp-content/uploads/2020/11/play-icon-03-1.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
      }
    }
  }
</script>
<style scoped>

  .el-aside{
    min-height: 100vh;
    background:#424642;
  }
  .el-main{
    min-height: 80vh;
    /* width:100%; */
    /* background: #F3F4ED; */
    /* background: #ddffbc; */
    background: #f7f7f7;
  }
  .el-col{
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 80vh; */
  }

  .el-card{
    width:98%;
    display: flex;
    justify-content: center;
    border-radius: 1em;
    background: #f4f4f2;

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
    color:#52734d;
  }
  .el-container{
    background: #ddffbc;
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
  }
</style>
