<template>
    <div>
        <h2>{{counter}}</h2>
        <home/>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {provide, ref, readonly} from 'vue';
import Home from './Home.vue';
    export default {
        components:{
            Home
        },
        setup(props) {
            const name=ref("shopkeeper");
            const counter=ref(100);

            const increment=()=>{
                counter.value++;
            };
            provide("name",readonly(name));
            provide("counter",readonly(counter));

            return {
                increment,
                counter
            }
        }
    }
</script>

<style scoped>

</style>