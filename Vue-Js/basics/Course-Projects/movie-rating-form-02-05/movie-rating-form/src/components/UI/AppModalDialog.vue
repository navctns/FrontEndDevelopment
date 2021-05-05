<template>
  <div @click="$emit('close')" :class="{backScreen:!autoClose}"></div>
  <teleport to="body">
    <dialog open>
      <header>
        <slot name="header"></slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions">
          <app-button @click="$emit('close')" value="Close"></app-button>
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
header{
  font-weight: 600;
  font-size: 12px;
  padding:2em;
  margin:auto;
}

dialog {
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
  }
</style>
