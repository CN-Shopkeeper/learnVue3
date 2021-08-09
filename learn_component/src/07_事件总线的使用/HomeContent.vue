<template>
    <div>
    </div>
</template>

<script>
import emitter from "./utils/eventBus.js";
    export default {
        created() {
            emitter.on("why",(info)=>{
                console.log("why",info);
            });
            emitter.on("kobe",(info)=>{
                console.log("kobe",info);
            });
            emitter.on("*",(type,info)=>{
                console.log("* listener",type,info);
            })
            
            // 取消emitter的所有监听
            // emitter.all.clear();

            // 定义一个函数
            // function onFoo(){}
            // emitter.on("foo",onFoo);
            // emitter.off("foo",onFoo);
        },
    }
</script>

<style scoped>

</style>