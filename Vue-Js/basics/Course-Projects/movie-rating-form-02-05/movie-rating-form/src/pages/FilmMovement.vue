<template>
  <transition name="info" mode="out-in">
    <div>
      <h2>{{movementContent.header}}</h2>
      <p style="white-space: pre-line;">
        {{movementContent.content}}
      </p>
      <router-link :to="{ name:'film_movement_movies', params:{movement:moviesDataKey,header:moviesNav}}">{{movementContent.moviesNav}}</router-link>
    </div>
  </transition>

</template>
<script>
  export default{
    props:['moviesDataKey','header','moviesNav'],
    data(){
      return{
        headerStr:'',
        content:'',
        moviesNavLabel:'',
      }

    },
    watch:{
      moviesNav(){
        //Dynamic Updation of content on changeing s film movement
        this.headerStr = this.$route.params.header;
        this.moviesNavLabel = this.$route.params.moviesNav;
      }
    },
    computed:{
      movementContent(){
        return this.$store.getters.getMovementContents(this.moviesDataKey);
      }
    },
    mounted(){
      console.log('beforeMount',this.moviesDataKey);
      this.headerStr = this.$route.params.header;
      this.moviesNavLabel = this.$route.params.moviesNav;
    }
  }
</script>
<style scoped>
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
a{
  text-decoration: none;
  color:#fafafa;
  padding:1em;
  width:20rem;
  background: #03256c;
  color:#fafafa;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 0.5em;
  margin: 1em 0;
}
a:hover{
  opacity: 0.9;
}
.info-enter-from{
  opacity: 0;
  /* transform:translateX(-1000px); */
}
.info-leave-to{
  opacity:0;
  /* transform:translateX(-1000px); */
}
.info-enter-active{
  transition:all 1s ease-out;
}
.info-leave-active{
  transition:all 1s ease-in;
}
.info-enter-to,
.info-leave-from{
  opacity:1;
  /* transform:translateY(0); */
}
</style>
