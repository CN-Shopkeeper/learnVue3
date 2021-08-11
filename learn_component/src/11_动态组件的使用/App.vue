<template>
    <div>
        <button v-for="item in tabs" :key="item"
            @click="btnClick(item)"
            :class="{active:currentTab===item}">
            {{item}}
        </button>

        <!-- 动态组件 -->
        <!-- is属性需要的内容：component函数全局注册的组件；或当前app的components局部注册的组件 -->
        <!-- keep alive -->
        <keep-alive include="home,about">
            <component :is="currentTab"
                name="sk"
                :age="18"
                @pageClick="pageClick"></component>
        </keep-alive>
        
        <!-- 通过v-if来实现 -->
        <!-- <template v-if="currentTab==='home'">
            <div>
                <home/>
            </div>
        </template>
        <template v-else-if="currentTab==='about'">
            <div>
                <about/>
            </div>
        </template>
        <template v-else>
            <div>
                <category/>
            </div>
        </template> -->
    </div>
</template>

<script>
import Home from "./pages/Home.vue";
import Category from "./pages/Category.vue";
import About from "./pages/About.vue";
    export default {
        data() {
            return {
                tabs:["home","about","category"],
                currentTab: "home"
            }
        },
        methods: {
            btnClick(item){
                this.currentTab=item;
            },
            pageClick(){
                console.log("page click");
            }
        },
        components:{
            Home,
            Category,
            About
        }
    }
</script>

<style scoped>
    .active{
        color: red;
    }
</style>