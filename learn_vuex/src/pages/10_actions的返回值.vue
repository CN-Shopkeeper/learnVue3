<template>
  <div>
    <hr>
    <h2>当前计数：{{$store.state.counter}}</h2>
    <button @click="incrementAction">+1</button>
    <button @click="decrementAction">-1</button>
    <hr>
  </div>
</template>

<script>
import {useStore, mapActions} from 'vuex'
import { onMounted} from 'vue'
  export default {
    mounted() {
    },
    setup(props) {
      const store = useStore();
      onMounted(()=>{
        const promise=store.dispatch("getHomeUserData2");
        promise.then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      })
    }
  }
</script>

<style scoped>

</style>