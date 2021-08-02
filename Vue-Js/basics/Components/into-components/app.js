
app = Vue.createApp({
  data(){
    return{
      friends:[
        {
          id:'manuel',
          name:'Manuel Lorenz',
          phone:'01234 5678 991',
          email:'manual.mail.in',
        },
        {
          id:'julie',
          name:'Julie Jones',
          phone:'09876 543 221',
          email:'julie@localhost.com'
        }
      ],
      detailsAreVisible:false,
    }
  },
  methods:{
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});


//CREATE COMPONENT
app.component('friend-contact', {
  template:`
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails">
        {{detailsAreVisible ? 'Hide':'Show'}} Details
      </button>
      <ul v-show="detailsAreVisible">
        <li><strong>Phone:</strong>{{friend.phone}}</li>
        <li><strong>Email:</strong>{{friend.email}}</li>
      </ul>
    </li>
  `,
  data(){
    return{
      detailsAreVisible:false,
      friend:{
        id:'manuel',
        name:'Manuel Lorenz',
        phone:'01234 5678 991',
        email:'manual.mail.in',
      },
    }
  },
  methods:{
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
})

//MOUNT AFTER DEFINING COMPONENTS
app.mount('#app');
