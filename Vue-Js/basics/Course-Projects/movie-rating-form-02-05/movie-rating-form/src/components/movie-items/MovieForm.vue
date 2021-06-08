<template>
      <form>
        <h2>Add Movie</h2>
        <div class="form-control">
          <label for="movie-name">Movie</label>
          <input type="text" name="movie-name" id="movie-name" v-model="titleInp"/>
        </div>
        <div class="form-control">
          <label for="movie-director">Director</label>
          <input type="text" name="movie-director" id="movie-director" v-model="directorInp"/>
        </div>
        <div class="form-control">
          <label for="movie-writer">Writer</label>
          <input type="text" name="movie-writer"  v-model="writerInp"/>
        </div>
        <div class="form-control">
          <label for="movie-synopsis">Synopsis</label>
          <textarea name="movie-synopsis" id="movie-synopsis" rows="3" v-model="synopsisInp"></textarea>
        </div>
        <div class="form-control">
          <label for="movie-genre">Genre</label>
          <select name="movie-genre" id="movie-genre" rows="3"  v-model="genreInp">
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="drama">Drama</option>
            <option value="comdey">Comedy</option>
            <option value="Sci-fi"></option>
          </select>
        </div>
        <div class="form-control">
          <label for="movie-img">Movie poster</label>
          <input type="url" name="movie-img" id="movie-img" rows="3" v-model="imgUrlInp">
        </div>
        <div class="form-control">
          <p class="success-msg" v-if="showSuccessDialog">Item Added</p>
        </div>
        <div class="form-control">
          <!-- <button>Save Item</button> -->
          <app-button type='button' value="Save Item" mode="flat" :nav="false" @click.prevent="submitData"></app-button>
        </div>
      </form>
</template>
<script>
  export default{
    // inject:['addMovie'],
    data(){
      return{
        titleInp:'',
        directorInp:'',
        writerInp:'',
        synopsisInp:'',
        genreInp:'action',
        imgUrlInp:'',
        showSuccessDialog:false,
        dataSubmitted:false,
      }
    },
    methods:{
      submitData(){
        console.log('submit data');
        const newMovie = {
          id:new Date().toISOString(),
          title:this.titleInp,
          genre:this.genreInp,
          director:this.directorInp,
          writer:this.writerInp,
          imgUrl:this.imgUrlInp,
          synopsis:this.synopsisInp,
        };
        console.log('movie obj', newMovie);
        // this.addMovie(newMovie);
        this.$store.dispatch('addMovie', newMovie);
        // this.dataSubmitted = true;
        this.showSuccessDialog = true;
        setTimeout(() =>{
          this.showSuccessDialog = false;
        },2000);
      },
      closeModal(){
        this.showSuccessDialog = false;
      },

    }

  }
</script>
<style scoped>
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    margin-left: 10rem;
    width:30%;
    display: flex;
    justify-content:flex-start;
  }
  input,
  textarea,
  select {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
    display: flex;
    justify-content:flex-start;

  }
  input:focus,
  textarea:focus {
    outline: none;
    border-color: #21bf73;
    background-color: #f7ebff;
  }
  .success-msg{
    color:green;
    display: block;
  }
  /* select{
    width:50%;
    display: flex;
    justify-content: flex-start;
  } */
  .form-control {
    margin: 1.5rem 0;
    display: flex;
    gap:1em;
    align-items: center;
    justify-content: center;
  }

  /* Referred */
  /* label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}
input:focus,
textarea:focus {
  outline: none;
  border-color:#8ab6d6;
  background-color: #f7ebff;
}
.form-control {
  margin: 1rem 0;

} */
/* Form specific */
form {
  /* margin: 2rem auto; */
  /* max-width: 60rem; */
  /* min-width:60em; */
  width:100%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}
/* .form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
}
h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}
input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}
select {
  width: auto;
}
input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}
input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}
button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}
button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
.form-control.invalid input{
  border-color:#aa2b1d;
}
.form-control.invalid label,.form-control.invalid p{
  color:#aa2b1d;
} */
h2{
  text-align: center;
}
</style>
