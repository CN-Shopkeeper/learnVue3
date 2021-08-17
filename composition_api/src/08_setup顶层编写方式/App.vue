<template>
    <div>
        <h2>当前计数：{{counter}}</h2>
        <button @click="increment">+1</button>

        <hello-world message="呵呵额呵呵呵呵" @increment="getCounter"/>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import HelloWorld from './HelloWorld.vue';
    const counter = ref(0);
    const increment = ()=> counter.value++;

    const getCounter=(payload)=>{
        console.log(payload);
    }
</script>

<style scoped>

</style>