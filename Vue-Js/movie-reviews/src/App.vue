<template>
  <div class="navbar navbar-expand-sm navbar-light bg-light mb-3">
    <div class="container">
      <ul class="navbar-nav">
        <li class="navbar-item">
          <a href="#" class="nav-link">Write Review</a>
        </li>
        <li class="navbar-item">
          <a href="#" class="nav-link">Review List</a>
        </li>
      </ul>
  </div>
</div>
  <div class="container">
  <h2>Movie Ratings and Reviews</h2>

    <div class="position-absolute top-50 start-50 translate-middle">
      <!-- <div class="form-group">
        <input className="form-control" type="text" placeholder="Type movie name here">
      </div> -->
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Type movie name here" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <button class='btn btn-primary' id="basic-addon2">Search</button>
      </div>
    </div>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  // name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
