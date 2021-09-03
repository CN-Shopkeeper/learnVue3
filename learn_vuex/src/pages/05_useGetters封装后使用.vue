<template>
  <div>
    <hr>
    <h2>{{nameInfo}}</h2>
    <h2>{{counterInfo}}</h2>
    <hr>
  </div>
</template>

<script>
import { useGetters } from '../hooks/useGetters'
  export default {
    setup(props) {
      const storeGetters = useGetters(["nameInfo","counterInfo"]);
      return {
        ...storeGetters
      }
    }
  }
</script>

<style scoped>

</style>