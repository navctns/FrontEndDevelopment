<template>
  <transition name="info" mode="out-in">
    <div>
      <h2>{{movementContent.header}}</h2>
      <p>
        Parallel cinema, or New Indian Cinema, was a film movement in Indian cinema that originated in the state of West Bengal in the 1950s as an alternative to the mainstream commercial Indian cinema.

    Inspired by Italian Neorealism, Parallel Cinema began just before the French New Wave and Japanese New Wave, and was a precursor to the Indian New Wave of the 1960s. The movement was initially led by Bengali cinema and produced internationally acclaimed filmmakers such as Satyajit Ray, Mrinal Sen, Ritwik Ghatak, Tapan Sinha and others. It later gained prominence in other film industries of India.

    It is known for its serious content, realism and naturalism, symbolic elements with a keen eye on the sociopolitical climate of the times, and for the rejection of inserted dance-and-song routines that are typical of mainstream Indian films.
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
        console.log('movies nav', this.moviesNav);
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
      console.log('updations',this.header, this.moviesDataKey,this.headerStr, this.moviesNavLabel);
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
  width:15rem;
  /* background: #323232; */
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
