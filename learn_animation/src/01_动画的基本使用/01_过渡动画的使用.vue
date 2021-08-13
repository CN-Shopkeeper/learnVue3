<template>
  <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <transition name="sk">
        <h2 v-if="isShow">hello world</h2>
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
    transition: opacity 2s ease;
  }
</style>