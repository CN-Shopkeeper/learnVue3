<template>
    <div>
        <h2>{{name}} - {{age}}</h2>
        <button @click="change">修改</button>
    </div>
</template>
 
<script>
import { reactive, toRefs, toRef } from "vue";
    export default {
        setup() {
            const info=reactive({name:"sk",age:18});
            // toRefs：将reactive对象中所有属性都转为ref，建立连接
            // let { name, age }=toRefs(info);
            // toRef：对其中一个属性进行转换为ref，建立连接
            let {name}=toRefs(info);
            let age=toRef(info,"age");
            const change=()=>{
                // age.value++;
                info.age++;
            }

            return {
                name,
                age,
                change
            }
        }
    }
</script>

<style scoped>

</style>