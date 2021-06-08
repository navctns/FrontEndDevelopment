<template>
  <div class="container">

    <div class="navigations">
      <router-link v-for="movement in movementsData" :key="movement.moviesDataKey" :to="{ name: 'film_movement', params: {path:movement.path,header:movement.header,moviesDataKey:movement.moviesDataKey, moviesNav:movement.moviesNav} }">{{movement.header}}</router-link>
    </div>
    <div class="traditions">

      <router-view v-slot="slotProps">
        <transition name="info" mode="out-in">
          <keep-alive>
            <component :is="slotProps.Component"></component>
          </keep-alive>
        </transition>
      </router-view>

    </div>

  </div>
</template>
<script>
  // import movieTraditions from './movieTraditions.js';
  import filmMovementPaths from './data/filmMovementPathsData.js';
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  export default{
    setup(){

      const filmMovementsData = filmMovementPaths;
      //Load vuex
      const store = useStore();
      const filmMovements = computed(()=>{
        return store.getters.getFilmMovements;
      });
      return{
        movements:filmMovements,
        movementsData:filmMovementsData,
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
    padding:1em;
    width:15rem;
    background: #323232;
    display: flex;
    justify-content: center;
    text-align: center;
    border-radius: 0.5em;
    margin: 1em 0;
    font-weight: 600;

  }
  a:hover{
    opacity: 0.9;
    background: #03256c;
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

</style>
