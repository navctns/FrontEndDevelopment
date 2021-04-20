<template lang="html">
  <!-- <div class="col s4 m4  center-align"> -->
  <div class="center-align">
        <div class="card scores-card darken-1">
      <div class="card-content white-text">
        <!-- <span class="card-title"><h5>Score Visualization</h5></span> -->
        <div class="this-over">
          {{thisOver.one}}
        </div>
        <div class="this-over">
          {{thisOver.two}}
        </div>
        <div class="this-over">
          {{thisOver.three}}
        </div>
        <div class="this-over">
          {{thisOver.four}}
        </div>
        <div class="this-over">
          {{thisOver.five}}
        </div>
        <div class="this-over">
          {{thisOver.six}}
        </div>
      </div>
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
    thisOver:{
      type:Object,

    }
  },
}
</script>

<style lang="css" scoped>
.card-content {
  display:flex;
  gap:1em;
}
.this-over{
  background-color: #52734d;
  width: 100%;
}
</style>
