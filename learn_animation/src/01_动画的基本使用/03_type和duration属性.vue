<template>
  <div class="app">
      <div>
        <button @click="isShow=!isShow">显示/隐藏</button>
      </div>
      <transition name="sk">
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
  .app{
    width: 200px;
    margin: 0 auto;
  }

  .title{
    display: inline-block;
  }

  .sk-enter-from,
  .sk-leave-to{
    opacity: 0;
  }

  .sk-enter-to,
  .sk-leave-from{
    opacity: 1;
  }

  .sk-enter-active,
  .sk-leave-active{
    transition: opacity 1s ease;
  }

  .sk-enter-active{
    animation: bounce 1s ease
  }
  
  .sk-leave-active{
    animation: bounce 1s ease reverse
  }

  @keyframes bounce {
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1.2);
    }
    100%{
      transform: scale(1);
    }
  }
</style>