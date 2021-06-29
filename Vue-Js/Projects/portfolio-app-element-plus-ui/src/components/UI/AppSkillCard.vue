<template>
  <el-card>
    <div :class="{twoItemContainer:skillTwo}">
      <div :class="{imgSmContainer:skillTwo,imgContainer:!skillTwo}">
        <h2>{{skillOne.name}}</h2>
        <img :src="skillOne.imgUrl" :class="{resizeIcon:skillOne.name==='Python'}" alt="">
      </div>
      <div class="imgSmContainer" v-if="skillTwo">
        <h2>{{skillTwo.name}}</h2>
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
      function viewProjectsForSkill( _ ,skillTerm = (props.skillOne.name).toLowerCase()){
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
  padding:1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:0;
}
.imgSmContainer{
  padding:1em;
  /* min-height:10em; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:0;
}
.twoItemContainer{
  display: flex;
  gap:1em;
}
.btn-container{
  display: flex;
  justify-content: center;
}
.resizeIcon{
  width:100px;
  height: auto;
}
</style>
