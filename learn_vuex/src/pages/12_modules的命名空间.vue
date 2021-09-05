<template>
  <div>
    <hr>
    <h2>当前root计数：{{$store.state.counter}}</h2>
    <h2>当前home计数：{{$store.state.home.counter}}</h2>
    <h2>当前user计数：{{$store.state.user.counter}}</h2>
    <button @click="homeIncrement">home+1</button>
    <!-- 默认情况下：modules中只有state是独占的（需要使用state.xxx获取），其它的属性mutations等都是合并到根store中 -->
    <!-- <h2>{{$store.getters.doubleHomeCounter}}</h2> -->
    <h2>{{$store.getters["home/doubleHomeCounter"]}}</h2>
    <button @click="homeIncrementAction">home increment action</button>
    <hr>
  </div>
</template>

<script>
import {useStore, mapActions} from 'vuex'
  export default {
    methods: {
      homeIncrement(){
        this.$store.commit("home/increment")
      },
      homeIncrementAction(){
        this.$store.dispatch("home/incrementAction")
      }
    },
  }
</script>

<style scoped>

</style>