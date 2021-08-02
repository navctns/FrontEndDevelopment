<template>
<base-card>

  <header>
    <div>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </div>
    <p>{{ infoText }}</p>

  </header>
</base-card>

</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style>



</style>
