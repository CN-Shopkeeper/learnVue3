<template>
    <div>
        <h2>{{info}}</h2>
        <button @click="changeInfo">修改</button>
    </div>
</template>
 
<script>
import { ref, shallowRef, triggerRef } from "vue";
    export default {
        setup() {
            // 浅层响应式
            const info=shallowRef({name:"sk"});
            const changeInfo=()=>{
                info.value.name="james";
                triggerRef(info);
            }
            return {
                info,
                changeInfo
            }
        }
    }
</script>

<style scoped>

</style>