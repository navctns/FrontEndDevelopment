<template>
  <div>
    <button @click="redirect">Pay Now</button>
    <button @click="redirectSubscription">Buy Subscription Product</button>
  </div>
</template>
<script>
  import { onMounted, ref } from 'vue';
  // import { useRouter } from 'vue-router';
  export default{
    setup(){
      // const router = useRouter();
      let stripe = null;
      let loading = ref(true);
      let elements = null;
      const style = {
            base: {
              iconColor: '#c4f0ff',
              color: '#fff',
              fontWeight: '500',
              fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
              fontSize: '16px',
              fontSmoothing: 'antialiased',
              ':-webkit-autofill': {
                color: '#fce883',
              },
              '::placeholder': {
                color: '#87BBFD',
              },
            },
            invalid: {
              iconColor: '#FFC7EE',
              color: '#FFC7EE',
            },
          };
      onMounted(async ()=>{
        // console.log(process.env.VUE_STRIPE_KEY);
        // stripe = await window.Stripe(process.env.VUE_STRIPE_KEY);
        stripe = await window.Stripe('pk_test_H5Axucb4BHgpiYDouiMY2xor00u6CC96Qt');
        //Add Credit card element
        const ELEMENT_TYPE = "card";
        //Initialize stripe element
        elements = stripe.elements();
        //Create card element with style
        const element = elements.create(ELEMENT_TYPE, style);//can add style if want to
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
              // price:"price_1JBJWBGKa9SqPTOMqafpNpmP",
              price:"price_1JEEUPGKa9SqPTOMgmOJ8g6j",
              quantity:1
            }
          ],

          mode:"subscription"
        });
      }
      async function redirectSubscription(){
        //Redirect to Subscription product checkout page
          // stripe.redirectToCheckout({
          //   successUrl:'http://localhost:8080/success',
          //   cancelUrl:'http://localhost:8080/',
          //   lineItems:[
          //     {
          //       price:"price_1JEEUPGKa9SqPTOMgmOJ8g6j",
          //       quantity:1,
          //     }
          //   ],
          //   mode:"payment"
          // });
          console.log('Subscription');
          //GET CUSTOMER DATA
          // const{ name, email, city} = Object.fromEntries(
          //   new FormData(event.target)
          // );
          //billing details
          // const billingDetails = {
          //   name,
          //   email,
          //   address:{
          //     city,
          //   }
          // }
          //CREATE CUSTOMER
          // const customer = await stripe.customers.create({
          //     email: billingDetails.email,
          //     payment_method: 'pm_card_visa',
          //     invoice_settings: {
          //       default_payment_method: 'pm_card_visa',
          //     },
          //   });
          //Add SUBSCRIPTION
          // const subscription = await stripe.subscriptions.create({
          //     customer: customer.id,
          //     items: [{
          //       price: 'price_1JEEUPGKa9SqPTOMgmOJ8g6j',
          //     }],
          //     add_invoice_items: [{
          //       price: 'price_1JEEUPGKa9SqPTOMgmOJ8g6j',
          //     }],
          //   });
      }

      return{
        redirect,
        redirectSubscription,
        // handleSubmit,
        loading,
      }
    }
  }
</script>
<style scoped>
  form{
    border: 1px solid #323232;
    margin:1em 1em;
    border-radius:0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }
  input{
    display: block;
    margin:1em 1em;
    width:90%;
  }
  button{
    margin: 1em 1em;
    background: #7C83FD;
    color:#fafafa;
    border-radius: 0.5em;
  }
  button:focus,
  button:hover{
    cursor: pointer;
  }
</style>
