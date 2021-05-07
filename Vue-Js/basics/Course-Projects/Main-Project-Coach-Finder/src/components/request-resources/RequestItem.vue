<template>
  <li>
    <app-small-card width="sm">
      <template #rightTag>
        <icon-button mode="delete"></icon-button>
      </template>
      <template #default>
        <h4>{{message}}</h4>
        <h5>{{email}}</h5>
      </template>
      <template #footer>
        <textarea name="name" rows="2" cols="40"></textarea>
        <app-button value="Reply" size="sm" color="green"></app-button>
      </template>
    </app-small-card>
  </li>
</template>
<script>
  export default{
    props:['coachId','message','email'],
  }
</script>
