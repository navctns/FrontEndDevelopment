<template>
  <el-card>
    <div :class="{twoItemContainer:skillTwo}">
      <div :class="{imgSmContainer:skillTwo,imgContainer:!skillTwo}">
        <h3>{{skillOne.name}}</h3>
        <img :src="skillOne.imgUrl" :class="{resizeIcon:skillOne.name==='Python'}" alt="">
      </div>
      <div class="imgSmContainer" v-if="skillTwo">
        <h3>{{skillTwo.name}}</h3>
        <img :src="skillTwo.imgUrl" alt="">
      </div>
    </div>
    <div class="btn-container">
      <el-button @click="viewProjects">View Projects</el-button>
    </div>
  </el-card>
</template>
<script>
  export default{
    emits:['set-skill'],
    props:{
      skillOne:{
        type:Object,
        required:true,
      },
      skillTwo:{
        type:Object,
        required:false,
      }
    },
    setup(props, context){
      function viewProjectsForSkill( _ ,skillTerm = (props.skillOne.name).toLowerCase().split(" ").join("")){
        //Switch skill for showing project based on that skill
        console.log('skill term',skillTerm);
        context.emit('set-skill',skillTerm);
      }
      return{
        viewProjects:viewProjectsForSkill,
      }
    }
  }
</script>
<style scoped>
.imgContainer{
  padding:0.5em;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap:0.5em;
}
img{
  width:68px;
  height: auto;
}
.imgSmContainer{
  padding:0.5em;
  /* min-height:10em; */
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap:0;
}
.twoItemContainer{
  display: flex;
  justify-content: center;
  gap:1em;
}
.btn-container{
  display: flex;
  justify-content: center;
}
/* .resizeIcon{
  width:100px;
  height: auto;
} */
.el-card{
  width:100%;
  height: auto;
}
</style>
