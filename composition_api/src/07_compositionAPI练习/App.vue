<template>
    <div>
        <h2>计数器值：{{counter}}</h2>
        <h2>计数器值*2：{{doubleCounter}}</h2>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>

        <h2>{{data}}</h2>
        <button @click="changeData">change data</button>

        <p class="content"></p>

        <div class="scroll">
            <div class="scroll-x">scroll-x: {{scrollX}}</div>
            <div class="scroll-y">scroll-y: {{scrollY}}</div>
        </div>

        <div class="mouse">
            <div class="mouse-x">mouse-x: {{mouseX}}</div>
            <div class="mouse-y">mouse-y: {{mouseY}}</div>
        </div>
    </div>
</template>

<script>
// import { ref, computed } from 'vue';
import {
    useCounter,
    useTitle,
    useScrollPosition,
    useLocalStorage,
    useMousePosition
} from './hook';
    export default {
        setup(props) {
            // counter
            const { counter, doubleCounter, increment, decrement} = useCounter();
            // title
            const titleRef=useTitle("sk");
            setTimeout(()=>{
                titleRef.value="shopkeeper";
            },3000);
            // 滚动位置
            const { scrollX,scrollY } = useScrollPosition();
            // 鼠标位置
            const { mouseX, mouseY} =useMousePosition();

            // 数据保存
            const data=useLocalStorage("info",{name:"sk",age:18});
            const changeData=()=>{
                data.value="hahaha";
            };

            return {
                counter, doubleCounter, increment, decrement,
                scrollX, scrollY,
                mouseX, mouseY,
                data, changeData
            }
        }
    }
</script>

<style scoped>
    .content{
        width: 3000px;
        height: 5000px;
    }
    .scroll{
        position: fixed;
        right: 30px;
        bottom: 30px;
    }
    .mouse{
        position: fixed;
        right: 30px;
        bottom: 80px;
    }
</style>