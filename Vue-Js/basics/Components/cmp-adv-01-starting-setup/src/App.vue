<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{slotProps.item}}</h2>
        <p>{{slotProps['anotherProp']}}</p>
        <p>Something</p>
      </template>
    </course-goals> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComonent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComonent === 'manage-goals'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedComonent"></component>
    </keep-alive>
  </div>
</template>

<script>
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components:{
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComonent:'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponent(cmp){
      this.selectedComonent = cmp;
    }
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

</style>
