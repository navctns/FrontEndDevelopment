<template lang="html">
  <base-card>
    <div class="button-items">
      <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
      <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resources</base-button>
    </div>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"
    ></component>
  </keep-alive>

</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';

export default {
  components:{
    AddResource,
    StoredResources,
  },
  data(){
    return{
      selectedTab:'stored-resources',
      storedResources:[
        {
          id:'official-guide',
          title:'Official Guide',
          description:'Official Vue JS Documentation',
          link:'https://v3.vuejs.org/',
        },
        {
          id:'google',
          title:'google',
          description:'Learn from Google',
          link:'https://www.google.com/',
        },
      ]
    }
  },
  provide(){
    return {
      resources:this.storedResources,
      addResource:this.addResource,
    }
  },
  computed:{
    storedResButtonMode(){
      return this.selectedTab === 'stored-resources' ? null:'flat';
    },
    addResButtonMode(){
      return this.selectedTab === 'add-resource' ? null:'flat';
    }
  },
  methods:{
    setSelectedTab(tab){
      this.selectedTab = tab;
    },
    addResource(title,description,link){
      const newResource = {
        id: new Date().toISOString(),
        title:title,
        description:description,
        link:link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    }
  },
}
</script>

<style lang="css" scoped>
  .button-items{
    display: flex;
    justify-content: center;
    gap:1em;
  }
</style>
