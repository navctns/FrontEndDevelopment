<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <stripe-checkout :pk="stripePublishKey"></stripe-checkout>
  <!-- <div ref="card">sss</div> -->
  <label>Card</label>
  <div id="card-element">

</div>
</template>
<!-- <script src="https://js.stripe.com/v3/"></script> -->

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { StripeCheckout } from '@vue-stripe/vue-stripe';

//Stripe vars
// let stripe = Stripe(`pk_test_TYooMQauvdEDq54NiTphI7jx`),
//     elements = stripe.elements(),
//     card = undefined;

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
  methods:{

    includeStripe( URL, callback ){
      /*
      Includes Stripe.js dynamically
      */
      let documentTag = document, tag = 'script',
          object = documentTag.createElement(tag),
          scriptTag = documentTag.getElementsByTagName(tag)[0];
      object.src = '//' + URL;
      if (callback) { object.addEventListener('load', function (e) { callback(null, e); }, false); }
      scriptTag.parentNode.insertBefore(object, scriptTag);
    },
    configureStripe(){
      this.stripe = window.Stripe( this.stripeAPIToken );

      this.elements = this.stripe.elements();
      this.card = this.elements.create('card',style);

      this.card.mount('#card-element');
    },

  },
  mounted: function(){
    // card = elements.create('card',style);
    // card.mount(this.$refs.card);
    this.includeStripe('js.stripe.com/v3/', function(){
    this.configureStripe();
    }.bind(this) );
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<!-- Stripe's publishable key, you can retrieve this from your Stripe dashboard. -->
