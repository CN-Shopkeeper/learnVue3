<template>
    <div>
        <nav-bar :name="name">
            <template v-slot:left>
                <button>左边的按钮</button>
            </template>
            <template v-slot:center>
                <h2>我是标题</h2>
            </template>
            <template v-slot:right>
                <button>右边的按钮</button>
            </template>
            <template v-slot:[name]>
                <button>动态名称</button>
            </template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "./NavBar.vue";
    export default {
        components:{
            NavBar
        },
        data() {
            return {
                name:"sk"
            }
        },
    }
</script>

<style scoped>

</style>