<template>
    <div>
        <!-- <input type="text" v-model="message">
        <input type="text" :value="message" @input="message=$event.target.value"> -->
        
        <!-- 在组件上使用v-model -->
        <!-- <my-input v-model="message"></my-input> -->
        <!-- <my-input :modelValue="message" @update:model-value="message=$event"></my-input> -->
        
        <!-- 绑定两个v-model -->
        <my-input-2 v-model="message" v-model:title="title"></my-input-2>

        <h2>{{message}}</h2>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
import MyInput from "./MyInput.vue";
import MyInput2 from './MyInput2.vue'
    export default {
        components:{
            MyInput,
            MyInput2
        },
        data() {
            return {
                message:"hello world",
                title:"title"
            }
        },
    }
</script>

<style scoped>

</style>