<template>
  <div>
    <hr>
    <h2>当前root计数：{{$store.state.home.counter}}</h2>
    <button @click="increment">home+1</button>
    <hr>
  </div>
</template>

<script>
import { createNamespacedHelpers} from 'vuex'
import {useState, useGetters} from '../hooks'
const {mapState,mapGetters,mapMutations,mapActions} = createNamespacedHelpers("home")

  export default {
    computed:{
      // 写法1
      // ...mapState({
      //   counter: state=> state.home.counter
      // }),
      // ...mapGetters({
      //   doubleHomeCounter: "home/doubleHomeCounter"
      // })
      
      //写法2：直接从根中获取
      // ...mapState("home",["counter"]),
      // ...mapGetters("home",["doubleHomeCounter"])

      // 写法3：从home中获取
      // ...mapState(["counter"]),
      // ...mapGetters(["doubleHomeCounter"])
    },
    methods: {
      // 写法1（错误写法）
      // ...mapMutations({
      //   increment:"home/increment"
      // }),
      // ...mapActions({
      //   incrementAction:"home/incrementAction"
      // })

      // 写法2：直接从根中获取
      // ...mapMutations("home",["increment"]),
      // ...mapActions("home",["incrementAction"])

      // 写法3：从home中获取
      // ...mapMutations(["increment"]),
      // ...mapActions(["incrementAction"])
    },
    setup(props) {
      const state = useState(["counter"])
      const getters= useGetters(["doubleHomeCounter"])
      const mutations = mapMutations(["increment"])
      const actions = mapActions(["incrementAction"])

      return{
        ...state,
        ...getters,
        ...mutations,
        ...actions
      }
    }
  }
</script>

<style scoped>

</style>