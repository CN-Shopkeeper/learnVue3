<template>
    <div>
        home page
        <!-- 当在template中使用ref对象时，会自动解包counter->value -->
        <h2>当前计数: {{counter}}</h2>
        <!-- ref解包是浅层解包 -->
        <h2>当前计数{{info.counter.value}}</h2>
        <!-- 用reactive包裹就可以解包 -->
        <h2>当前计数{{reactiveInfo.counter}}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
    export default {
        setup() {
            // counter变成了ref可响应式的引用
            let counter = ref(100);
            const info ={counter};
            const reactiveInfo = reactive({
                counter
            })
            
            const increment=()=>{
                // 但是在这里不会自动解包
                counter.value++;
                console.log("button click",counter.value);
            }
            return {
                counter,
                info,
                reactiveInfo,
                increment
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>