<template>
  <div>
    <button @click="redirect">Pay Now</button>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="name">
      <input type="text" placeholder="place">
      <div id="stripe-element-mount-point"></div>
      <button type="submit" :class="{dis:loading}">
        {{loading? "Loading":"Pay 1500Rs"}}
      </button>
    </form>
  </div>
</template>
<script>
  import { onMounted, ref } from 'vue';
  export default{
    setup(){
      let stripe = null;
      let loading = ref(true);
      let elements = null;

      onMounted(async ()=>{
        // console.log(process.env.VUE_STRIPE_KEY);
        // stripe = await window.Stripe(process.env.VUE_STRIPE_KEY);
        stripe = await window.Stripe('pk_test_H5Axucb4BHgpiYDouiMY2xor00u6CC96Qt');
        //Add Credit card element
        const ELEMENT_TYPE = "card";
        elements = stripe.elements();
        const element = elements.create(ELEMENT_TYPE);//can add style if want to
        element.mount("#stripe-element-mount-point");
        loading.value = false;
      });

      function redirect(){
        stripe.redirectToCheckout({
          successUrl:'http://localhost:8080/success',
          cancelUrl:'http://localhost:8080/',
          lineItems:[
            {
            // With price-id of the product
              price:"price_1JBJWBGKa9SqPTOMqafpNpmP",
              quantity:1
            }
          ],

          mode:"payment"
        });
      }
      function handleSubmit(){
        //Form submit
        console.log('hi', event);
      }
      return{
        redirect,
        handleSubmit,
      }
    }
  }
</script>
