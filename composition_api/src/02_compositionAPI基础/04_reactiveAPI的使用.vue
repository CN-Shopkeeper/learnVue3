<template>
    <div>
        home page
        <h2>{{message}}</h2>

        <h2>当前计数: {{state.counter}}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {reactive} from 'vue';
    export default {
        props:{
            message:{
                type:String,
                require:true
            }
        },
        setup() {
            const state = reactive({
                counter:100
            });
            // 局部函数
            const increment=()=>{
                state.counter++;
                console.log("button click",state.counter);
            }
            return {
                state,
                increment
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>