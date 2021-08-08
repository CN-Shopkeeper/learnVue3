<template>
    <div>
        <h2>当前计数{{counter}}</h2>
        <counter-opetation 
            @add="addOne" 
            @sub="subOne"
            @addN="addNNum">
        </counter-opetation>
    </div>
</template>

<script>
import CounterOpetation from "./CounterOperation.vue";
    export default {
        components:{
            CounterOpetation
        },
        data(){
            return {
                counter:0
            }
        },
        methods: {
            addOne(){
                this.counter++;
            },
            subOne(){
                this.counter--;
            },
            addNNum(num,name,age){
                this.counter+=num;
            }
        },
    }
</script>

<style scoped>

</style>