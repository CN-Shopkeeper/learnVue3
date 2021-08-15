<template>
    <div>
        home page
        <button @click="updateState">修改状态</button>
    </div>
</template>

<script>
import { reactive,ref,readonly } from 'vue';
    export default {
        setup() {
            // 普通对象
            const info1 ={name:"sk"};
            const readOnlyInfo1 = readonly(info1);
            // 响应式对象reactive
            const info2 = reactive({
                name:"sk"
            });
            const readOnlyInfo2 = readonly(info2);
            // 响应式对象ref
            const info3=ref("sk");
            const readOnlyInfo3 = readonly(info3);
            const updateState=()=>{
                // readOnlyInfo1.name="123";
                // readOnlyInfo2.name="123";
                readOnlyInfo3.value="123";
            }
            return {
                updateState
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>