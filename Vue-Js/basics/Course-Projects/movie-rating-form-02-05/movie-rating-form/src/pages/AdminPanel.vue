<template lang="html">
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
      <div class="container">
        <div class="panel-nav">
          <app-card>
            <ul>
              <li>
                <!-- <navigation-button> -->
                  <!-- <router-link :to="{name:'main-panel', params:{section:'addMovie'}}">Add Movie</router-link> -->
                  <div class="link-container">
                    <router-link to="/panel/addMovie">Add Movie</router-link>
                    <i class="fas fa-chevron-right"></i>

                  </div>

                <!-- </navigation-button> -->
              </li>
              <li>
                <!-- <button>Stored Movies</button> -->
                <div class="link-container">
                  <router-link :to="{name:'stored-movies'}">Movies List</router-link>
                  <i class="fas fa-chevron-right"></i>
                </div>
              </li>
            </ul>
          </app-card>
        </div>

        <div class="content-wrapper">
          <!-- <movie-form></movie-form> -->
          <router-view></router-view>
        </div>
      </div>
  </div>


</template>

<script>
// import MovieForm from '../components/movie-items/MovieForm.vue';
// import NavigationButton from '../components/UI/NavigationButton.vue';
export default {
  components:{
    // MovieForm,
    // NavigationButton,
  }
}
</script>

<style lang="css" scoped>
  .container{
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap:1em;
    margin:0 1em;
  }
  .panel-nav{
    /* width:40%; */
    list-style: none;
    /* margin:1em 0; */
    padding:0;
    text-align: center;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: flex-start; */
  }
  .panel-nav ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:1em;
    padding: 0;
  }
  .panel-nav li {
    display: flex;
  }
  .container > .contend-wrapper{
    width:60%;
  }
  .link-container {
    padding:1em;
    /* display: block; */
    width:100%;
    width:15rem;
    border: 1px solid #766161;
    border-radius: 0.5em;
    display:flex;
    gap:1em;
    justify-content: space-between;
    align-items: center;
  }

  .fa-chevron-right:hover{
    transform: scale(1.1);
  }
  .link-container a{
    text-decoration: none;
  }
  a{
    color:#393e46;
    padding:1em;
    background-color: #f4f3f3;
    display: block;
    width:80%;
    border-radius: 0.5em;
  }
  a:focus,
  a:hover{
    background-color: #dfdfdf;
  }
</style>
