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
import {mapActions} from 'vuex'
  export default {
    // methods: {
    //   ...mapActions(["incrementAction","decrementAction"]),
    //   ...mapActions({
    //     add:"incrementActions",
    //     sub:"decrementActions"
    //   })
    // },
    mounted() {
    },
setup(props) {
  const actions = mapActions(["incrementAction","decrementAction"])
  return {
    ...actions
  }
}
  }
</script>

<style scoped>

</style>