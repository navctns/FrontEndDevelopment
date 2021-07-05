<template>
  <el-card>
    <div :class="{twoItemContainer:skillTwo}">
      <div :class="{imgSmContainer:smImgContainer,imgContainer:imgContainer,smSizeContainer:smSizeContainer}">
        <h3>{{skillOne.name}}</h3>
        <img :src="skillOne.imgUrl" :class="{resizeIcon:skillOne.name==='Python'}" alt="">
      </div>
      <div class="imgSmContainer" v-if="secondSkillVisibility">
        <h3>{{skillTwo.name}}</h3>
        <img :src="skillTwo.imgUrl" alt="">
      </div>
    </div>
    <!-- <div class="btn-container" v-if="size==='lg'"> -->
    <div class="btn-container">
      <el-button @click="viewProjects">View Projects</el-button>
    </div>
  </el-card>
</template>
<script>
  import { computed } from 'vue';
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
      },
      size:{
        type:String,
        required:false,
        default:'sm',
      }
    },
    setup(props, context){
      function viewProjectsForSkill( _ ,skillTerm = (props.skillOne.name).toLowerCase().split(" ").join("")){
        //Switch skill for showing project based on that skill
        console.log('skill term',skillTerm);
        context.emit('set-skill',skillTerm);
      }
      //compute card style classes
      const smImgContainer = computed(()=>{
        //two skills and size is large
        return props.skillTwo && props.size === 'lg';
      });
      const imgContainer = computed(()=>{
        //two skills and size is large
        return !props.skillTwo && props.size === 'lg';
      });
      const smSizeContainer = computed(()=>{
        //when parent navbar is collapsed
        return props.size === 'sm';
      });
      //Second skill(css) visibility
      const secondSkillVisibility = computed(()=>{
        //only shown when navbar expands(lg mode)
        return props.skillTwo && props.size === 'lg';
      });
      return{
        viewProjects:viewProjectsForSkill,
        smImgContainer,
        imgContainer,
        smSizeContainer,
        secondSkillVisibility
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
  margin-bottom: 0.5em;
}
.twoItemContainer{
  display: flex;
  justify-content: center;
  gap:1em;
}
.btn-container{
  display: flex;
  justify-content: center;
  margin: 0.5em;
}
.smSizeContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:0.5em;
}
/* .resizeIcon{
  width:100px;
  height: auto;
} */
.el-card{
  width:100%;
  height: auto;
  padding:0;
  background: #F9F9F9;
}
h3{
  margin:0;
}
</style>
