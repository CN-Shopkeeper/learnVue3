<template>
  <div class="app">
      <div>
        <button @click="isShow=!isShow">显示/隐藏</button>
      </div>
      <transition  @enter="enter"
        @leave="leave"
        :css="false">
        <h2 class="title" v-if="isShow">hello world</h2>
      </transition>
  </div>
</template>

<script>
import gsap from "gsap";
  export default {
    data() {
      return {
        isShow: true,
        distance: 200
      }
    },
    methods: {
      enter(el, done) {
        console.log("enter");
        gsap.from(el,{
          scale:0,
          x:this.distance,
          // 默认是0.5s
          duration:1,
          // 如果不写时，默认在动画开始时同步回调done
          onComplete: done
        })
      },
      leave(el,done) {
        console.log("leave");
        gsap.to(el,{
          scale:0,
          x:200,
          duration:1,
          onComplete:done
        })
      },
    },
  }
</script>

<style scoped>

  .title{
    display: inline-block;
  }

</style>