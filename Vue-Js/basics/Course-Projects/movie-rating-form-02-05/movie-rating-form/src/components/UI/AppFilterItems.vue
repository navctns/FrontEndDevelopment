<template>
  <div>
    <app-card>
      <!-- FILTERS WITH SLIDER -->
      <!-- Slide I -->
      <ul class="navbar" v-if="firstSection">
        <li
         v-for="filter in filters.fst"
            :key="filter.name">
            <app-button :active="activeFilter===filter.name" text-color="white"  v-if="filterBy ==='genre'" :value="filter.name" :name="filter.name" :id="filter.id" mode="flat" @click="sortBy($event)"></app-button>
            <app-button :active="activeFilter===filter.name" text-color="white" v-else :value="filter.label" :name="filter.name" mode="flat" @click="sortBy($event)"></app-button>
        </li>
        <li>
          <!-- <app-button text-color="white" value=">>>" mode="flat" @click="slideList('sec')"></app-button> -->
          <i class="fas fa-angle-double-right fa-2x" @click="slideList('sec')"></i>
        </li>
      </ul>
      <!-- Slide II -->

      <ul class="navbar" v-if="listSecondSection">
        <li>
          <!-- <app-button text-color="white" value="<<<" mode="flat" @click="slideList('fst')"></app-button> -->
          <i class="fas fa-angle-double-left fa-2x" @click="slideList('fst')"></i>

        </li>
        <li
         v-for="filter in filters.sec"
            :key="filter.name">
            <app-button :active="activeFilter===filter.name" text-color="white" v-if="filterBy ==='genre'" :value="filter.name" :name="filter.name" :id="filter.id" mode="flat" @click="sortBy($event)"></app-button>
            <app-button :active="activeFilter===filter.name" text-color="white" v-else :value="filter.label" :name="filter.name" mode="flat" @click="sortBy($event)"></app-button>
          </li>
          <li>
            <!-- <app-button text-color="white" value=">>>" mode="flat" @click="slideList('thd')"></app-button> -->
            <i class="fas fa-angle-double-right fa-2x" @click="slideList('thd')"></i>

          </li>
      </ul>
      <!-- Slide III -->
      <ul class="navbar" v-if="thirdSection">
        <li>
          <!-- <app-button text-color="white" value="<<<" mode="flat" @click="slideList('sec')"></app-button> -->
          <i class="fas fa-angle-double-left fa-2x" @click="slideList('sec')"></i>
        </li>
        <li
         v-for="filter in filters.thd"
            :key="filter.name">
            <app-button :active="activeFilter===filter.name" text-color="white" v-if="filterBy ==='genre'" :value="filter.name" :name="filter.name" :id="filter.id" mode="flat" @click="sortBy($event)"></app-button>
            <app-button :active="activeFilter===filter.name" text-color="white" v-else :value="filter.label" :name="filter.name" mode="flat" @click="sortBy($event)"></app-button>
          </li>
      </ul>
      <!-- FILTERS WITHOUT SLIDER -->
      <ul class="navbar" v-if="!sliderOn">
        <li
         v-for="filter in filters"
            :key="filter.name">
            <app-button :active="activeFilter===filter.name" text-color="white" v-if="filterBy ==='genre'" :value="filter.name" :name="filter.name" :id="filter.id" mode="flat" @click="sortBy($event)"></app-button>
            <app-button :active="activeFilter===filter.name" text-color="white" v-else :value="filter.label" :name="filter.name" mode="flat" @click="sortBy($event)"></app-button>
          </li>
      </ul>
    </app-card>
  </div>
</template>
<script>
  export default{
    // props:['filterBy','keywords'],
    props:{
      filterBy:{
        type:String,
      },
      keywords:{
        type:Array,
      },
    },
    emits:['sort-by'],
    data(){
      return{
        sliderOn:false,
        listSecondSection:false,
        listFirstSection:false,
        listThirdSection:false,
        activeFilter:null,
      }
    },
    computed:{
      firstSection(){
        //Visibility of first slide
        return this.sliderOn && this.listFirstSection;
      },
      secondSection(){
        //Visibility of Second slide
        return this.sliderOn && this.listSecondSection;
      },
      thirdSection(){
        //Visibility of Third slide
        return this.sliderOn && this.listThirdSection;
      },


      filters(){
        //Filter names are set according //
        //category names set on movie obj
        //Setting filter buttons according to category names
        //languages, genres,...
        if(this.filterBy === 'genre' || this.filterBy === 'lang'){
          console.log(this.keywords);
          if(this.keywords.length >6){
            const keywordsCpy = this.keywords.slice();
            const fstSec = keywordsCpy.slice(0,6);
            const secSec = keywordsCpy.slice(6,12);
            const thdSec = keywordsCpy.slice(12,keywordsCpy.length-1);
            const keywordArrays = {
              fst:fstSec,
              sec:secSec,
              thd:thdSec,
            }
            return keywordArrays;
          }
          return this.keywords;
        }else if(this.filterBy === 'resent'){
          //Upcoming,Top Rated, Popular
            return this.keywords;
        }else{
          return [];
        }
      }
    },
    watch:{
      keywords(newVal){
        //Evaluate the need of slider on change of props
        this.slilderMode(newVal);
      },
      filterBy(newVal){
        //For better showing on both options
        //without contradiction
        if(newVal === 'lang'){
          this.sliderOn = false;
          this.listSecondSection = false;
          this.listFirstSection = false;
          this.listThirdSection = false;
        }else if(newVal === 'genre'){
          this.sliderOn = true;
          this.listSecondSection = false;
          this.listFirstSection = true;
          this.listThirdSection = false;
        }else if(newVal === 'resent'){
          this.sliderOn = false;
          this.listSecondSection = false;
          this.listFirstSection = false;
          this.listThirdSection = false
        }
      }
    },
    methods:{
      slideList(section){
        //For Navigating between Slides
        if(section === 'sec'){
          console.log('second section');
          this.listFirstSection = false;
          this.listSecondSection = true;
          this.listThirdSection = false;
        }else if(section === 'fst'){
          this.listSecondSection = false;
          this.listFirstSection = true;
          this.listThirdSection = false;

        }
        else if(section === 'thd'){
          this.listSecondSection = false;
          this.listFirstSection = false;
          this.listThirdSection = true;
        }

      },
      slilderMode(){
        //Decides whehter a slider is needed or not
        if(this.keywords.length >6){
          this.sliderOn = true;
          this.listFirstSection = true;
        }else{
          this.sliderOn = false;
          this.listSecondSection = false;
          this.listFirstSection = false;
          this.listThirdSection = false;
        }

      },
      sortBy(event){
        //Sort parameters from specific buttons(specific genres)
        console.log(event.target.name,event.target.id);
        if(this.filterBy === 'genre'){
          this.activeFilter = event.target.name;
          this.$emit('sort-by',event.target.id);
        }else{
          this.activeFilter = event.target.name;
          this.$emit('sort-by',event.target.name);
        }
      }
    },
    mounted(){
      this.slilderMode();
    }
  }
</script>
<style scoped>
ul.navbar{
  display: flex;
  justify-content: center;
  list-style: none;
  gap:1em;
  margin:1.5em 0;
  max-width:100%;
}
li{
  /* display: block; */
  display: flex;
  align-items: center;
}
div{
  padding: 0;
}
.fa-angle-double-left:hover,
.fa-angle-double-right:hover{
  transform:scale(1.1);
}
@media(max-width:768px) {
  ul.navbar{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 0.8em;
    grid-gap: 0.5em;
    place-items:center;
    padding:0;
  }
  li{
    display: block;
  }
}
</style>
