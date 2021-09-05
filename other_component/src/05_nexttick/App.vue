<template>
  <div>
    <h2 class="title" ref="titleRef">{{message}}</h2>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import {ref, onUpdated, nextTick} from 'vue'
  export default {
    setup(props) {
      const message = ref("");
      const titleRef =ref(null)
      const addMessageContent = ()=>{
        message.value+="哈哈哈哈哈哈";
        nextTick(()=>{
          console.log("addMessageContent",titleRef.value.offsetHeight);
        })
      };
      // 其它组件的更新也会调用这个回调
      onUpdated(() => {
        console.log("onUpdated",titleRef.value.offsetHeight);
      });
      return {
        message,
        titleRef,
        addMessageContent
      }
    }
  }
</script>

<style scoped>
  .title{
    width: 120px;
  }
</style>