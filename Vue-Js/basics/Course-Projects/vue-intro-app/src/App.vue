<template>
  <header>
    <h1>My Friends</h1>
  </header>
  <ul>
    <friend-contact
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phone-number="friend.phone"
      :email-address="friend.mail"
      :is-favourite="friend.isFavourite"
      @toggle-favourite="toggleFavouriteStatus"
    ></friend-contact>
    <!-- <friend-contact
      name="Julie Jones"
      phone-number="8455 1492 33"
      email-address="julie@localhost.com"
      is-favourite="1"
      star-rating="3"
    ></friend-contact> -->
  </ul>
</template>

<script>

export default {
    data(){
      return{
        friends:[
          {
            id:'manuel',
            name:'Manuel Lorenz',
            phone:'234-5553-444',
            mail:'manauellorenz@mail.com',
            isFavourite:true,
          },
          {
            id:'julie',
            name:'Julia Johns',
            phone:'277-4513-444',
            mail:'julia@mail.com',
            isFavourite:false,
          },
          {
            id:'Mathew',
            name:'Mathew Johns',
            phone:'555-4533-444',
            mail:'mathew@mail.com'
          }
        ]
      }
    },
    methods:{
      toggleFavouriteStatus(friendId){
        // alert('toggle favourite');
        //Use data passed from component
        const identifiedFriend = this.friends.find(friend => friend.id === friendId);
        identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
      }
    }
  }
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
.star-rating {
  display: block;
  margin-bottom: 1em;
}
.active{
  /* color:#e6dd3b; */
  color:#9ede73;
}
/* STAR RATING STYLES */

</style>
