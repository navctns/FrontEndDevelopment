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
                <el-button>View also</el-button>
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
  export default{
    props:['imgUrl','projectName','description'],
  }
</script>
<style scoped>
/* .el-card{
  width:30%;
  height: auto;
} */
.el-card img{
  width:100%;
  height: auto;
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
  justify-content: center;
  align-items: center;
  margin: 0.2em 0;
  /* margin-bottom: 0.5em; */
}
.el-card{
  margin:0 0.2em;
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
</style>
