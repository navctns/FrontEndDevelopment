<template>
  <div @click="$emit('close')" :class="{backScreen:normalModal,backScreenSearch:searchModal}"></div>
  <teleport to="body">
    <dialog open :class="{normDialog:normalModal,searchDialog:searchModal}">
      <header v-if="mode!=='search'">
        <slot name="header"></slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu :class="{menuNorm:mode!=='search',menuSearch:mode==='search'}">
        <slot name="actions">
          <app-button @click="$emit('close')" mode="bg-blue" value="Close"></app-button>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>
<script>
  export default{
    emits:['close'],
    props:{
      autoClose:{
        type:Boolean,
        default:false,
      },
      mode:{
        type:String,
        default:''
      }
    },
    computed:{
      searchModal(){
        return !this.autoClose && this.mode === 'search';
      },
      normalModal(){
        return !this.autoClose && this.mode === '';
      }
    },
    mounted(){
      if(this.autoClose){
        setTimeout(()=>{
          this.$emit('close');
        },2000);
      }
    }
  }
</script>
<style scoped>
.backScreen{
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
  }
  .backScreenSearch{
    position: fixed;
    top:0;
    left: 0;
    height: 100vh;
    width: 100%;
    /* background-color: rgba(0, 0, 0, 0.75); */
    z-index: 10;
    }
  .resultBox{
    margin:10rem 0;
  }
header{
  font-weight: 600;
  font-size: 18px;
  padding:0.2em;
  margin:0;
  color:#323232;
  text-align: center;
  background: #293b5f;
}
section{
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
menu{
  display: flex;
  justify-content: center;
}
.normDialog {
  position: fixed;
  top: 10vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  /* color:#323232; */
  color:#fafafa;
  /* background: #323232; */
  background: #47597e;

  }
  .searchDialog {
    position: absolute;
    top: 20vh;
    left: 5%;
    width: 90%;
    /* min-width: 40%;
    max-width: 80%; */
    z-index: 100;
    border-radius: 12px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.5em;
    margin: 0;
    overflow: hidden;
    color:#323232;
    color:#fafafa;
    background: #323232;

    /* background: #323232; */
    /* background: #47597e; */

    }
  @media(max-width:768px) {
    section{
      display: flex;
      justify-content: center;
      height: auto;
      padding:1em;
    }
    .menuNorm{
      margin: 1em 0;
      padding:0;
    }
    .menuSearch{
      margin:0;
      padding: 0;
    }
    .searchDialog{
      position: absolute;
      top:22vh;
      /* width:95%;
      left:1em; */
    }
  }
</style>
