<template>
  <div>
    <hr>
      <h2>总价值:{{$store.getters.totalPrice}}</h2>
      <h2>总价值:{{$store.getters.totalPriceForCountN(4)}}</h2>
    <hr>
      <h2>{{nameInfo}}</h2>
      <h2>{{counterInfo}}</h2>
    <hr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
computed:{
  ...mapGetters(["nameInfo","counterInfo"])
},
    setup(props) {
      return {
      }
    }
  }
</script>

<style scoped>

</style>