<template>
    <div>
        <!-- 模拟绑定和事件触发 -->
        <!-- <button @click="btnClick">my input 按钮</button>
        <h2>my input的message {{modelValue}}</h2> -->

        <!-- 通过input -->
        <!-- <input type="text" :value="modelValue" @input="btnClick"> -->

        <!-- 绑定到props中是不对的 -->
        <!-- <input type="text" v-model="modelValue"> -->

        <input type="text" v-model="value">
    </div>
</template>

<script>
    export default {
        props:{
            modelValue: String
        },
        emits:["update:modelValue"],
        computed:{
            value:{
                set(value){
                    this.$emit("update:modelValue",value);
                },
                get(){
                    return this.modelValue;
                }
            }
        },
        methods: {
            btnClick(event){
                this.$emit("update:modelValue",event.target.value);
            }
        },
    }
</script>

<style scoped>

</style>