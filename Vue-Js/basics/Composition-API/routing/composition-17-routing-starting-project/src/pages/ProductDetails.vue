<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price}}</h3>
    <p>{{ description}}</p>
  </section>
</template>

<script>
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props:['pid'],
  setup() {
    // console.log(props.pid)
    const products = inject('products');
    const route = useRoute();
    const selectedProduct = products.value.find(product =>
      product.id === route.params.pid);

    const title = computed(()=>{
      return selectedProduct.title;
    })
    const price = computed(() =>{
      return selectedProduct.title;
    })
    const description = computed(() => {
      return selectedProduct.description;
    });
    return { title, price, description, selectedProduct };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
