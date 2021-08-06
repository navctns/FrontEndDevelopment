<template>
  <!-- <div :class="{backdrop:backdrop}"> -->
  <div class="main">
    <div class="show-hide-navigations" @click="showHideNavigations">
       <span class="nav-button">
         <i class="fas fa-bars"></i>
        <span>Film Movements</span>
      </span>
    </div>
    <div class="container">
      <div class="navigations" v-if="navigationsVisiblility">
        <router-link v-for="movement in movementsData" :key="movement.moviesDataKey" :to="{ name: 'film_movement', params: {path:movement.path,header:movement.header,moviesDataKey:movement.moviesDataKey, moviesNav:movement.moviesNav} }" @click="showHideNavigations">{{movement.header}}</router-link>
      </div>
      <div class="traditions">

        <router-view v-slot="slotProps">
          <transition name="info" mode="out-in">
            <keep-alive>
              <component :is="slotProps.Component"></component>
            </keep-alive>
          </transition>
        </router-view>
        <div class="scroll-block">
          <!-- <app-button value="^" @click="scrollToTop"></app-button> -->
          <i class="fas fa-arrow-circle-up fa-3x" @click="scrollToTop"></i>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import filmMovementPaths from './data/filmMovementPathsData.js';
  import { computed, ref, watch } from 'vue';
  import { useStore } from 'vuex';
  export default{
    setup(){

      const navigationsVisiblility = ref(window.innerWidth>768?true:false);
      const filmMovementsData = filmMovementPaths;
      //Load vuex
      const store = useStore();
      const filmMovements = computed(()=>{
        return store.getters.getFilmMovements;
      });

      function scrollToTop(){
        window.scrollTo(0,0);
      }
      function showHideNavigations(){
        // console.log('show/hide',inp);
        // if(!inp){
          // const screenWidth = window.s@mouseover="showHideNavigations(true)"creen.width;
          const screenWidth = window.innerWidth;
          if(screenWidth<768){
            navigationsVisiblility.value = !navigationsVisiblility.value ;
          }
        // }else{
        //   navigationsVisiblility.value = inp;
        // }
      }
      const screenWidth = ref(window.innerWidth);
      const responsiveWidth = watch(screenWidth,()=>{
        if(window.innerWidth >768){
          navigationsVisiblility.value = true;
        }
      });
      const backdrop = computed(()=>{
        return window.innerWidth < 768 && navigationsVisiblility.value;
      });
      return{
        movements:filmMovements,
        movementsData:filmMovementsData,
        scrollToTop,
        navigationsVisiblility,
        showHideNavigations,
        responsiveWidth,
        backdrop,
      }
    }
  }
</script>
<style scoped>
  .container{
    padding: 0 1em;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap:1em;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    background:#343a40;
  }
  a{
    text-decoration: none;
    color:#fafafa;
    padding:0.2em;
    width:20rem;
    background: #323232;
    display: flex;
    justify-content: center;
    text-align: center;
    border-radius: 0.5em;
    margin: 0.2em 0;
    font-weight: 300;

  }
  a:hover{
    opacity: 0.9;
    background: #03256c;
  }
  .navigations{
    display: flex;
    /* display:grid; */
    flex-direction: column;
    gap:0.2em;

  }
  .traditions{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:1em;
    align-items: center;
  }
  a.router-link-active{
    background: #03256c;
    text-decoration: none;
    color:#fafafa;
  }
  .scroll-block{
    display: flex;
    align-items:flex-end;
    justify-content: flex-end;
    padding:1em;
    width:100%;
  }
  .show-hide-navigations{
    display: none;
  }
  .backdrop {
    /* position: fixed; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.75);
  }
  .fa-arrow-circle-up:hover,
  .fa-arrow-circle-up:focus{
    cursor: pointer;
  }
  .nav-button{
    background:#161616;
    border-radius: 0.5em;
    padding:0.5em;
    display: flex;
    gap:0.5em;
    align-items: center;
  }
  .nav-button:hover,
  .nav-button:focus{
    cursor: pointer;
  }
  .main{
    margin:2.8em 0;
  }
  @media(max-width:768px) {


    .container{
      grid-template-columns: 1fr;
      transition: 0.3s ease-in;
      padding: 0.5em;
    }
    .show-hide-navigations{
      margin: 2em 0;
      display: flex;
      justify-content: flex-end;
      gap:0.5em;
      padding:0.5em;
    }
    .navigations{
      /* display: grid;
      grid-template-columns: 1fr 1fr; */
      z-index: 10;
      overflow: hidden;
    }


  }
</style>
