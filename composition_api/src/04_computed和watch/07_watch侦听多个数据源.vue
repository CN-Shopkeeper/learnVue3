<template>
    <div>
        <h2 ref="title">{{info.name}}</h2>
        <button @click="changeData">修改数据</button>
    </div>
</template>

<script>
import { ref, reactive, watch} from "vue";
    export default {
        setup() {
            // 定义响应式对象
            const info =reactive({
                name: "sk",
                age:19
            });
            const name = ref("sk");
            // 侦听多个数据源
            watch([()=>{
                return {...info}
            },name],([newInfo,newName],[oldInfo,oldName])=>{
                console.log(newInfo,newName,oldInfo,oldName);
            });
            const changeData=()=>{
                info.name="shopkeeper";
                // name.value="shopkeeper";
            }
            return{
                changeData,
                info,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>