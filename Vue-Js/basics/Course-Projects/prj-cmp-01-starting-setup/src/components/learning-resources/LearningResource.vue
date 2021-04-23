<template>
  <li>
    <base-card>
      <div>
        <header>
          <h3>{{title}}</h3>
          <!-- <button>Delete</button> -->
          <base-button mode="flat">Delete</base-button>
        </header>
      </div>
      <p>{{description}}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>
<script>
  export default{

    props:['title','description','link'],
  }
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
  margin: 1em;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;

}

a {
  text-decoration: none;
  /* color: #ce5c00; */
  /* color:#feffde; */
  /* background:#52734d; */
  color:#464f41;
  /* background: #91c788;
  padding:0.5em;
  margin:0.5em;
  border-radius: 0.5em; */
}

a:hover,
a:active {
  color: #c89300;
}

</style>
