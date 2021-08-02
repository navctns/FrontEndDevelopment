
const app = Vue.createApp({
  data(){
    return{
      isVisible: true
    }
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible;
    }
  },
});
app.mount('#app');
// new Vue({
//   el: '#app',
//   data: {
//     isVisible: true
//   },
//   methods: {
//     toggleBox() {
//       this.isVisible = !this.isVisible;
//     }
//   },
// });
