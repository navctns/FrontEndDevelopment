<template lang="html">
  <!-- <div class="col s4 m4 center-align"> -->
  <div class="center-align">
    <div class="card scores-card darken-1">
      <!-- <div class="card-content white-text"> -->
        <div class="row">
          <!-- <div class="col m4">
            <span class="card-title"><h5>Score Card</h5></span>
          </div> -->
          <div class="col m6">
            <span><h4>{{runsCount}}/{{wicketsCount}}</h4></span>
          </div>
          <div class="col m6">
            <span><h5>Overs:{{oversCount}}.{{ballsCount}}</h5></span>
          </div>
        </div>
      <!-- </div> -->
      <!-- <div>
        <div class="row">
          <div class="col s6">
            <p class="center-align">Score</p>
          </div>
          <div class="col s6">
            <p class="center-align">Overs</p>
          </div>
        </div>
      </div> -->
    </div>

  </div>
</template>

<script>
export default {
  props:{
    runsCount:{
      type:Number,
      default:0,
    },
    oversCount:{
      type:Number,
      default:0,
    },
    ballsCount:{
      type:Number,
      default:0,
    },
    wicketsCount:{
      type:Number,
      default:0,
    },
  },
  data(){
    return{
    }
  },
}
</script>

<style lang="css" scoped>
span{
  padding:0;
}
.row{
  margin:0;
  padding:0;
}
</style>
