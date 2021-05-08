<template>
  <app-card>
    <template #header>
      <div class="header">
        <!-- <img src="https://lh3.googleusercontent.com/proxy/_X-cc5R-H_iNsCOp3-zjtJDBL1zWmdCl2by4UEX5yOCEkoQ4FuuK4-VwfIUplUqonbfL1y87Np0SLJYpWX0yF1CGjXj5A4sS7DggKThKoOoyrYfiDgmocAZekGHgqdh8tByLnSEDmj-AO_97AQ" alt=""> -->
        <!-- <img src="https://source.unsplash.com/random/120x80" alt=""> -->
        <img src="../assets/img/profile.png" alt="">

        <!-- <app-button @click="showContactForm" value="Contact" color="blue"></app-button> -->
      </div>
      <div class="info">

        <section class="content-flex">
          <h4><span>Name : </span>{{getCoach.name}}</h4>
          <h4><span>Area of Expertise : </span>{{getCoach.topic}}</h4>
          <h4><span>Rating : </span>{{getCoach.rating}}</h4>
          <h4><span>Rating : </span>{{getCoach.rating}}</h4>
          <h4><span>Rating : </span>{{getCoach.rating}}</h4>
          <h4><span>Rating : </span>{{getCoach.rating}}</h4>
          <h4><span>Rating : </span>{{getCoach.rating}}</h4>

        </section>
        <icon-button mode="save"></icon-button>
      </div>

    </template>

    <template #default>
      <div class="content">
        <!-- <div class="form-control">
          <input class="form-item" type="text" placeholder="Your name">
          <input class="form-item" type="mail" placeholder="your mail">
          <textarea class="form-item" name="name" rows="2" cols="40" placeholder="your message"></textarea>
          <app-button size="xxl" value="Contact Coach" color="green"></app-button>
        </div> -->
        <contact-form :coachId="coachId"></contact-form>
        <app-button value="See More" size="sm"></app-button>
        <h4>About {{getCoach.name}}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, voluptate. Quisquam quaerat sed dolore eum voluptates repudiandae. Dolor, inventore, eos?</p>
      </div>
    </template>
  </app-card>
</template>
<script>
  import ContactForm from './ContactForm.vue';
  // import { mapGetters } from 'vuex';
  export default{
    props:['coachId'],
    components:{
      ContactForm
    },
    data(){
      return{
        coach:null,
        contactFormVisibility:false,
      }
    },
    computed:{
      getCoach(){
        return this.$store.getters['coaches/getCoachById'](this.coachId);
        // return this.$store.dispatch('coaches/getCoachById',this.coachId)
      }
    },
    methods:{
      showContactForm(){
        this.contactFormVisibility = !this.contactFormVisibility;
      }
    }
  }
</script>
<style scoped>
.form-control{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:0.5em;
  margin: auto;
}
.form-item{
  border-radius: 0.3em;
  /* border:1px solid #3d84b8; */
  border:1px solid #91c788;
  width:100%;
  font-size:1.2em;
}
  span{
    font-weight: 200;
  }
  .header,.content{
    display: flex;
    flex-direction:column;
    justify-content:center;
    padding:1em;
    gap:0.5em;
  }
  .content-flex{
    display:grid;
    grid-template-columns: 1fr 1fr;
  }
  div h2{
    text-align: center;
  }

  .info{
    display: flex;
    width:100%;
    justify-content: space-between;
    padding:1em;
    gap:0;
    align-items: flex-start;
  }
</style>
