<template>
    <div>
        <h2 v-bind="$attrs">{{title}}</h2>
        <p>{{content}}</p>
    </div>
</template>

<script>
    export default {
        inheritAttrs:false,
        // props: [
        //     "title",
        //     "content"
        // ]
        props:{
            title:String,
            content:{
                type:String,
                required:true,
                default:123
            },
            info:{
                type: Object,
                // 引用类型，需要写成函数
                default(){
                    return {name:"sk"}
                }
            }
        }
    }
</script>

<style scoped>

</style>