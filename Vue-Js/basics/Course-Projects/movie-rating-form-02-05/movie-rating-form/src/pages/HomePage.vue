<template>

    <div>

        <router-link to='/movies'>
          Explore Movies
        </router-link>
        <router-link to='/filmAppreciation'>
          Film Appreciation
        </router-link>

    </div>

</template>
<style scoped>
div{
    display: flex;
    justify-content: center;
    gap:1em;
    align-items: center;
    min-height: 100vh;
    /* background: url('../assets/susan-gold-sQGCHET1wvc-unsplash.jpg'); */
    /* background: url('../assets/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg'); */
    background: url('../assets/erik-witsoe-GF8VvBgcJ4o-unsplash.jpg');
    background-size: cover;
}
a{
  text-decoration: none;
  padding:0.5em;
  border-radius: 0.5em;
  /* border: 1px solid #21bf73; */
  width:10rem;
  cursor: pointer;
  text-decoration: none;
  /* background-color: transparent; */
  background: #03256c;
  display: block;
  text-align: center;
  /* color:#393e46; */
  color:#fafafa;
}

/* a:hover{
  background-color: #b0eacd;
  color:#323232;
} */
a:hover{
  opacity: 0.8;
}

/* ANIMATIONS */
/* @keyframes home {
  from{
    opacity:0;
    transform:translateX(-50px) scale(0.7);
  }
  to{
    opacity:1;
    transform: translateX(0) scale(1);
  }
} */

/* .showcase-enter-active{
  transition:all 0.3s ease-out;
  position:absolute;

}
.showcase-leave-active{
  transition: all 0.3s ease-in reverse;
  position:absolute;

}
.showcase-enter-from{
  opacity:0;
  transform:translateY(-900px);
}
.showcase-enter-to,
.showcase-leave-from{
  opacity:1;
  transform:translateY(0);
}
.showcase-leave-to{
  opacity:0;
  transform:translateY(0px);
} */
</style>
