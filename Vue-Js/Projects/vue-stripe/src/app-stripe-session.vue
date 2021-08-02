<template>
  <div>
    <button @click="redirect">Pay Now</button>
  </div>
</template>
<script>
  // import { onMounted } from 'vue';
  const stripe = require('stripe')('pk_test_H5Axucb4BHgpiYDouiMY2xor00u6CC96Qt');
  export default{
    setup(){
      // let stripe = null;

      // onMounted(async ()=>{
      //   // console.log(process.env.VUE_STRIPE_KEY);
      //   // stripe = await window.Stripe(process.env.VUE_STRIPE_KEY);
      //   stripe = await window.Stripe('pk_test_H5Axucb4BHgpiYDouiMY2xor00u6CC96Qt');
      //
      // });

      async function redirect(){
        console.log('redirect');
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: 'T-shirt',
                },
                unit_amount: 2000,
              },
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: 'https://example.com/success',
          cancel_url: 'https://example.com/cancel',
        });
        console.log("session",session);
        //Redirect
        stripe.redirectToCheckout(session);
      }
      return{
        redirect
      }
    }
  }
</script>

const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 2000,
      },
      quantity: 1,
    },
  ],
  mode: 'payment',
  success_url: 'https://example.com/success',
  cancel_url: 'https://example.com/cancel',
});
