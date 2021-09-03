<template>
  <div>
    <hr>
    <h2>当前计数：{{$store.state.counter}}</h2>
    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('decrement')">-1</button>
    <button @click="addTen">+10</button>
    <hr>
  </div>
</template>

<script>
import {INCREMENT_N} from '../store/mutation-types'
  export default {
    methods: {
      addTen(){
        this.$store.commit(INCREMENT_N,10)
      }
    },
  }
</script>

<style scoped>

</style>