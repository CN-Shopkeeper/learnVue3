<template>
  <div>
    <h2>Home:{{sCounter}}</h2>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    computed:{
      sCounter(){
        return this.$store.state.counter
      },
      // 传入一个数组
      // ...mapState(["counter","name"])
      // 传入一个对象
...mapState({
  sCounter:state=>state.counter,
  name:state=>state.name
})
    }
  }
</script>

<style scoped>

</style>