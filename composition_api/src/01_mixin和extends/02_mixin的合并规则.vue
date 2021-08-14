<template>
    <div>
        <h2>{{message}}</h2>
        <button @click="foo">按钮点击</button>
    </div>
</template>

<script>
import {demoMixin} from './mixins/demoMixin.js'
    export default {
        mixins:[demoMixin],
        data() {
            return {
                title: "hello world",
                message: "hello app"
            }
        },
        methods: {
            foo(){
                console.log("app foo"); 
            }
        },
        created() {
            console.log("app created");
        },
    }
</script>

<style scoped>

</style>