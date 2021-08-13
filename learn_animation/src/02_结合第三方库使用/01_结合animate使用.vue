<template>
  <div class="app">
      <div>
        <button @click="isShow=!isShow">显示/隐藏</button>
      </div>
      <transition enter-active-class="animate__animated animate__rotateIn" 
        leave-active-class="animate__animated animate__rotateOutDownLeft">
        <h2 class="title" v-if="isShow">hello world</h2>
      </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true
      }
    },
  }
</script>

<style scoped>

  .title{
    display: inline-block;
  }

  /* .sk-enter-active{
    animation: rollIn 1s ease-in
  }
  
  .sk-leave-active{
    animation: rollOut 1s ease-in
  } */
</style>