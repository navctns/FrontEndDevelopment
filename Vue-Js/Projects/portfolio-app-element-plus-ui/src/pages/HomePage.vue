<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
            <div class="demo-basic--circle">
              <div class="block"><el-avatar :size="200" :src="circleUrl"></el-avatar></div>
            </div>
            <!-- <div class="person-info">
              <h4>Naveen Vijayan</h4>
              <h5>
                <a href="mailto:navctns@gmail.com">navctns@gmail.com</a>
              </h5>
            </div> -->
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <div class="showcase-text">
            <h2>
              I am Naveen, I am a Front end developer, I create maintainable web applications and static websites
            </h2>
          </div>
        </el-col>
      </el-row>
    </el-main>
</el-container>
</template>

<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        // circleUrl:"../assets/5301-A.jpg",
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
    min-height: 100vh;
    width:100%;
    background: #F3F4ED;
  }
  .el-col{
    display: flex;
    justify-content: center;
  }
  .el-row{
    display: f
  }
  .el-card{
    width:80%;
    display: flex;
    justify-content: center;
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
  .el-row{
    padding:2em;
  }
  h2{
    
  }
</style>
