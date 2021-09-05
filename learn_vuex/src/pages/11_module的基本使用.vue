<template>
  <div>
    <hr>
    <h2>当前root计数：{{$store.state.counter}}</h2>
    <h2>当前home计数：{{$store.state.home.counter}}</h2>
    <h2>当前user计数：{{$store.state.user.counter}}</h2>
    <hr>
  </div>
</template>

<script>
import {useStore, mapActions} from 'vuex'
  export default {
    setup(props) {
    }
  }
</script>

<style scoped>

</style>