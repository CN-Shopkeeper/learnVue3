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
                age:19,
                friend:{
                    name:"kobe"
                }
            });
            // 源码中，传入reactive会默认开启deep侦听，而传入getter方法不会
            watch([()=>{
                return {...info}
            }],(newInfo,oldInfo)=>{
                console.log(newInfo,oldInfo);
            },{
                deep:true,
                immediate:true
            });
            const changeData=()=>{
                info.friend.name="james";
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