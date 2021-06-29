<template>
  <el-col :xs="24" :sm="24" :md="12" :lg="6">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="imgUrl" class="image">
      <div style="padding: 14px;">
        <h4>{{description}}</h4>
        <div class="bottom">
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
              <span>Using HTML,CSS,JS and Bootstrap</span>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
              <div class="btn-container">
                <el-button>View also</el-button>
              </div>
            </el-col>
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
}
.bottom{
  display: flex;
  justify-content: center;
  margin:0.5em 0;
}
.btn-container{
  display: flex;
  justify-content: center;
  margin: 0.5em 0;
}
.el-card{
  margin:1em 1em;
}
</style>
