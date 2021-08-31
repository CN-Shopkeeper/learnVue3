<template>
  <div>
    <h2>User: {{$route.params.username}}</h2>
  </div>
</template>

<script>
import {useRoute, useRouter} from "vue-router"
  export default {
    created() {
      console.log(this.$route.params.username);
    },
    setup(props) {
      const route = useRoute();
      console.log(route.params.username);
    }
  }
</script>

<style scoped>

</style>