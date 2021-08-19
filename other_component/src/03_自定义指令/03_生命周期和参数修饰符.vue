<template>
    <div>
        <button v-if="counter<2" v-sk.aaa.bbbb="'123'" @click="increment">当前计数：{{counter}}</button>
    </div>
</template>

<script>
import { ref } from 'vue';
    export default {
        // 局部指令
        directives:{
            sk:{
                created(el,bindings,vnode,preVnode) {
                    console.log("sk created",el,bindings,vnode,preVnode);
                    console.log(bindings.value);
                    console.log(bindings.modifiers);
                },
                beforeMount() {
                    console.log("sk beforeMount");
                },
                mounted() {
                    console.log("sk mounted");
                },
                beforeUpdate() {
                    console.log("sk beforeUpdate");
                },
                updated() {
                    console.log("sk updated");
                },
                beforeUnmount() {
                    console.log("sk beforeUnMount");
                },
                unmounted() {
                    console.log("sk unmounted");
                },
            }
        },
        setup(props) {
            const counter=ref(0);

            const increment=()=>counter.value++;

            return {
                counter,
                increment
            }
        }
    }
</script>

<style scoped>

</style>