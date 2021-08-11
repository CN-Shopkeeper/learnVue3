<template>
    <div>
        App 组件
        <home/>
        <suspense>
            <template #default>
                <async-category></async-category>
            </template>
            <template #fallback>
                <loading></loading>
            </template>
        </suspense>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

import Home from "./Home.vue";
import Loading from "./Loading.vue";
// import Loading from './Loading.vue';
// import AsyncCategory from "./AsyncCategory.vue";
// 传入工厂函数
const AsyncCategory = defineAsyncComponent(()=>import("./AsyncCategory.vue"));;
// 
// const AsyncCategory = defineAsyncComponent({
//     loader: ()=>import("./AsyncCategory.vue"),
//     // 加载之前的占位组件
//     loadingComponent: Loading,
//     // 加载错误的组件
//     // errorComponent:
//     // 延迟显示：在显示loadingComponent组件之前，等待多长时间
//     delay: 2000,
//     /**
//      * err:错误信息
//      * retry：函数，调用retry尝试重新加载
//      * fail：一个函数，指示程序退出
//      * attempts：记录尝试次数
//      */
//     onError: function(err,retry,fail,attempts){

//     }
// })

    export default {
        components:{
            Home,
            AsyncCategory,
            Loading
        }
        
    }
</script>

<style scoped>

</style>