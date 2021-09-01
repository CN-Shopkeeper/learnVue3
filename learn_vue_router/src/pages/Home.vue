<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li>home</li>
      <li>home</li>
      <li>home</li>
    </ul>
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/shops">商品</router-link>
    <router-link to="/home/moment">动态</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>