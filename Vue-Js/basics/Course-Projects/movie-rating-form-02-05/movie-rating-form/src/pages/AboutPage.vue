<template>
  <app-card>
    <div>
      <h2>About</h2>
      <p>
        Like every Art form Movies are not just for watching passivly,
        Movies can be observed, analyzed on certain ways. Through that film experience can enrich. Here you can know about
        films and refer about it
      </p>
      <h3>Source Credits</h3>
      <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
      <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="">
    </div>
  </app-card>

</template>
<style scoped>
  div{
    /* display: grid; */
    display: flex;
    flex-direction: column;
    gap:0;
    /* justify-content: center; */
    place-items:center;
    grid-gap: 1em;
    /* align-items: flex-start; */
    min-height: 100vh;
    margin: 0;
    padding: 0 2em;
    width:100%;
  }
  div img{
    display: flex;
    justify-content: center;
    width:50%;
  }
  h2,h3{
    margin:0;
    display: flex;
    justify-content: center;
 }
 img{
  width:100%;
  height: auto;
 }
 @media(max-width:768px) {
   h2,h3{
     font-weight: 500;
   }
   p{
     font-size:0.9em;
   }
   div img{
     width:auto;
     height:auto;
   }
   div{
     padding: 0.5em;
   }
 }
</style>
