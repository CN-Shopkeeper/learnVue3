<template>
  <div>
    <button @click="loginClick">登录</button>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
  export default {
    setup(props) {
      const router=useRouter()
      const loginClick=()=>{
        window.localStorage.setItem("token","shopkeper")
        router.push({
          path:"/home"
        })
      }
      return {loginClick}
    }
  }
</script>

<style lang="scss" scoped>

</style>