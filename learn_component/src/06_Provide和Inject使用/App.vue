<template>
    <div>
        <home></home>
        <button @click="addName">+name</button>
    </div>
</template>

<script>
import Home from "./Home.vue";
import {computed} from "vue";
    export default {
        components:{
            Home
        },
        provide(){
            return {
                name:"sk",
                age:18,
                // ref对象，value
                length: computed(()=>this.names.length)
            }
        },
        data(){
            return{
                names:["abc","cba","nba"]
            }
        },
        methods: {
            addName(){
                this.names.push("sk");
                console.log(this.names);
            }
        },
    }
</script>

<style scoped>

</style>