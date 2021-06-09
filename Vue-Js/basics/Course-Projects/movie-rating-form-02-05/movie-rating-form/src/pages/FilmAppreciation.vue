<template>
  <div :class="{backdrop:backdrop}" @click="showHideNavigations(false)">

    <div class="show-hide-navigations" @mouseover="showHideNavigations(true)">
      <!-- <app-button value="traditions" @mouseover="showHideNavigations(true)"  ></app-button> -->
      <i class="fas fa-bars"></i>
      <span>Traditions</span>
    </div>
    <div class="container">
      <div class="navigations" v-if="navigationsVisiblility">
        <router-link v-for="movement in movementsData" :key="movement.moviesDataKey" :to="{ name: 'film_movement', params: {path:movement.path,header:movement.header,moviesDataKey:movement.moviesDataKey, moviesNav:movement.moviesNav} }" @click="showHideNavigations(false)">{{movement.header}}</router-link>
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
          <app-button value="^" @click="scrollToTop"></app-button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  // import movieTraditions from './movieTraditions.js';
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
      function showHideNavigations(inp){
        if(!inp){
          // const screenWidth = window.screen.width;
          const screenWidth = window.innerWidth;

          console.log('screen width', screenWidth);
          if(screenWidth<768){
            navigationsVisiblility.value = inp;
          }
        }else{
          navigationsVisiblility.value = inp;
        }
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
    /* display: flex;
    flex-direction: column; */
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap:1em;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
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
    flex-direction: column;
    gap:0.2em;

  }
  .traditions{
    width:100%;
    display: flex;
    flex-direction: column;
    gap:1em;
    /* justify-content: center; */
    align-items: center;
  }
  a.router-link-active{
    background: #03256c;
    /* padding:0.5em; */
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.75);
  }
  @media(max-width:768px) {
    /* .navigations{
      transform:translateX(-100vh);
    } */
    .container{
      grid-template-columns: 1fr;
      transition: 0.3s ease-in;
    }
    .show-hide-navigations{
      /* display: block; */
      margin: 2em 0;
      display: flex;
      gap:0.5em;
      padding:0.5em;
    }
    .show-hide-navigations:hover{
      .navigations{

      }
    }
  }
</style>
