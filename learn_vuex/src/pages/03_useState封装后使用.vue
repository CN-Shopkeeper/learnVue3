<template>
  <div>
    <h2>Home:{{counter}}</h2>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
import { useState } from '../hooks/useState'
  export default {
    setup(props) {
      const storeState = useState(["counter","name"])
      

      return {
        ...storeState 
      }
    }
  }
</script>

<style scoped>

</style>