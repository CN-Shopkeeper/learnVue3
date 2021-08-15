<template>
    <div>
        home page
        <h2>{{message}}</h2>

        <h2>{{title}}</h2>
        <h2>当前计数: {{counter}}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
    export default {
        props:{
            message:{
                type:String,
                require:true
            }
        },
        setup() {
            let counter=100;
            // 局部函数
            const increment=()=>{
                counter++;
                console.log("button click");
            }
            return {
                title:"hello home",
                counter,
                increment
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>