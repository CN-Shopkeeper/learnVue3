<template>
    <div>
        <button @click="increment">{{counter}}</button>
    </div>
</template>

<script>
import {onMounted, onUpdated,onUnmounted,ref} from 'vue';
    export default {
        setup(props) {
            const counter =ref(0);
            const increment=()=>{
                counter.value++;
            };
            onMounted(() => {
                console.log("app mounted");
            });
            onUpdated(() => {
                console.log("app updated");
            });
            onUnmounted(() => {
                console.log("app unmounted");
            });
            return {
                counter,
                increment
            }
        }
    }
</script>

<style scoped>

</style>