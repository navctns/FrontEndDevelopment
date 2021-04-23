<template>
  <!-- <teleport to="body"> -->
    <base-error v-if="invalidInput">
      <template v-slot:header>
        <h5>Invalid Input</h5>
      </template>
      <template #body>
        <p>Please fill all fields</p>
      </template>
    </base-error>

  <!-- </teleport> -->

  <base-card>
  <form @submit.prevent="submitData">
    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" id="title" name="title" ref="title">
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" name="description" rows="3" ref="description"></textarea>
    </div>
    <div class="form-control">
      <label for="link">Link</label>
      <input type="url" id="link" name="link" ref="link">
    </div>
    <div class="form-control">
      <base-button type="submit">Add Resource</base-button>
    </div>
  </form>

  </base-card>

</template>
<script>
  export default{
    // emits:['add-resource'],
    inject:['addResource'],
    data(){
      return{
        invalidInput:false,
      }
    },
    methods:{
      submitData(){
        const titleInput = this.$refs.title.value;
        const descriptionInput = this.$refs.description.value;
        const linkInput = this.$refs.link.value;
        if(titleInput.trim() === '' || descriptionInput.trim() === '' || linkInput.trim() === ''){
          // this.$emit('add-resource',titleInput,descriptionInput,linkInput);
          console.log('input invalid');
          this.invalidInput = true;
        }else{
          this.addResource(titleInput,descriptionInput,linkInput);
        }
      }
    }
  }
</script>
<style scoped>
label {
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
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
