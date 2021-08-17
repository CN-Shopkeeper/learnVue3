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
            const info =reactive({
                name: "sk",
                age:19
            });
            // 侦听watch是，传入一个getter函数
            // watch(()=>info.name,(newValue,oldValue)=>{
            //     console.log("newValue",newValue,"oldValue",oldValue);;
            // });

            // 传入可响应式对象：reactive对象/ref对象
            // reactive对象获取到的newValue和oldValue都是reactive对象
            // watch(info,(newValue,oldValue)=>{
            //     console.log("newValue",newValue,"oldValue",oldValue);;
            // });
            // 如果希望newValue和oldValue是一个普通的对象
            watch(()=>{
                return {...info};
            },(newValue,oldValue)=>{
                console.log("newValue",newValue,"oldValue",oldValue);;
            });
            // ref对象获取到的newValue和oldValue都是值的本身
            const name = ref("sk");
            watch(name,(newValue,oldValue)=>{
                console.log("newValue",newValue,"oldValue",oldValue);;
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