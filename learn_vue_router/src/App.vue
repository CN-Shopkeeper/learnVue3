<template>
  <div>
    <router-link to="/home" replace active-class="home-active">首页</router-link>
    <router-link to="/about" replace active-class="about-active">关于</router-link>
    <router-link :to="'/user/'+name">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
  },
  setup(props) {
    return {
      name: "shopkeeper"
    }
  }
} 
</script> 

<style>
  .home-active{
    color: red;
  }
  .about-active{
    color: blue;
  }
</style>
