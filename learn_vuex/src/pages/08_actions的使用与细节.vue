<template>
  <div>
    <hr>
    <h2>当前计数：{{$store.state.counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr>
  </div>
</template>

<script>
  export default {
    methods: { 
      increment(){
        this.$store.dispatch("incrementAction",{name:"shopkeeper"});
      },
      decrement(){
        this.$store.dispatch({
          type:"decrementAction"
        })
      }
    },
    mounted() {
      this.$store.dispatch("getHomeUserData");
    },
    setup(props) {
    }
  }
</script>

<style scoped>

</style>