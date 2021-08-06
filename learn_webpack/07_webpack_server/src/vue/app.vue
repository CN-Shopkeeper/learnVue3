<template>
    <div>
        <h2>我是vue渲染出来的</h2>
        <h2>{{title}}</h2>
        <hello-world></hello-world>
    </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue"
export default {
    components:{
        HelloWorld
    },
    data(){
        return {
            title: "hello world"
        }
    },
    methods:{

    }
}
</script>

<style >
    h2{
        color: red;
    }
</style>