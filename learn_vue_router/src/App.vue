<template>
  <div>
    <router-link to="/home" replace active-class="home-active">首页</router-link>
    <router-link to="/about" replace active-class="about-active">关于</router-link>
    <router-link :to="'/user/'+name">用户</router-link>

    <br>
    <button @click="jumpToAbout">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  components: {
  },
  setup(props) {
    const router = useRouter();
    function jumpToAbout(){
      // 首先要拿到router对象（不推荐直接导入）
      router.push({
        path:"/about",
        query:{
          name: "shopkeeper",
          age:18
        }
      });
    }
    return {
      name: "shopkeeper",
      jumpToAbout
    }
  },
  // methods: {
  //   jumpToAbout(){
  //     // 首先要拿到router对象（不推荐直接导入）
  //     this.$router.push("/about");
  //   }
  // },
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
