<template>
  <div ref="card"></div>
</div>
</template>
<!-- <script src="https://js.stripe.com/v3/"></script> -->

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { StripeCheckout } from '@vue-stripe/vue-stripe';

//Stripe vars
let stripe = window.Stripe(`pk_test_TYooMQauvdEDq54NiTphI7jx`),
    elements = stripe.elements(),
    card = undefined;

let style = {
  base: {
    border: '1px solid #D8D8D8',
    borderRadius: '4px',
    color: "#000",
    display:'flex',
    justifyContent:'center',
  },

  invalid: {
    // All of the error styles go inside of here.
  }

};

export default {
  name: 'App',
  components: {
    // HelloWorld,
    StripeCheckout
  },
  data(){
    return{
      stripeAPIToken:'pk_test_TYooMQauvdEDq54NiTphI7jx',
    }
  },

  mounted: function () {
    card = elements.create('card', style);
    card.mount(this.$refs.card);
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
<!-- Stripe's publishable key, you can retrieve this from your Stripe dashboard. -->
