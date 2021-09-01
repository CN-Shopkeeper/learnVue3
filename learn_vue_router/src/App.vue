<template>
  <div>
    <!-- props：href 跳转的链接 -->
    <!-- props：route对象 -->
    <!-- props：navigate函数 -->
    <!-- props：isActive 当前是否处于活跃状态 -->
    <!-- props：isExactActive 是否是精确活跃状态 -->
    <router-link to="/home" active-class="home-active" v-slot="props" custom>
      <!-- <nav-bar title="首页"></nav-bar> -->
      <button>{{props.href}}</button>
      <!-- <p>{{props.route}}</p> -->
      <button @click="props.navigate">导航</button>
      <span :class="{'active': props.isActive}">{{props.isActive}}</span>
    </router-link>
    <router-link to="/about" replace active-class="about-active">关于</router-link>
    <router-link :to="'/user/'+name">用户</router-link>
    <router-link to="/category"></router-link>

    <button @click="jumpToAbout">关于</button>
    <router-view v-slot="props">
      <transition name="shopkeeper">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
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
  .shopkeeper-enter-from,
  .shopkeeper-leave-to{
    opacity: 0;
  }
  .shopkeeper-enter-active,
  .shopkeeper-leave-avtive{
    transition: opacity 1s ease;
  }
</style>
