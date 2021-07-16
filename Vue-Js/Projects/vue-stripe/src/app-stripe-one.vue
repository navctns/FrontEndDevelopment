<template>
  <div>
    <button @click="redirect">Pay Now</button>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="name" name="name">
      <input type="email" placeholder="email" name="email">
      <input type="text" placeholder="city" name="city">
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
              price:"price_1JBJWBGKa9SqPTOMqafpNpmP",
              quantity:1
            }
          ],

          mode:"payment"
        });
      }
      function handleSubmit(){
        //Form submit
        // console.log('hi', event);
        if(loading.value) return;
          loading.value = true;
        //get data from form
        const{ name, email, city} = Object.fromEntries(
          new FormData(event.target)
        );
        //billing details
        const billingDetails = {
          name,
          email,
          address:{
            city,
          }
        }
        //card element
        const cardElement = elements.getElement("card");
        //Request response (Try/Catch)
        try{
          const response = await fetch("http://localhost:3001/stripe",
            {
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({amount:1999})
            })
            const {secret} = await response.json();
            console.log("secret", secret);
        }catch(error){
          
        }
      }
      return{
        redirect,
        handleSubmit,
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
</style>
