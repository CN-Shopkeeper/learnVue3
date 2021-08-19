<template>
    <div class="app">
        <teleport to='#sk'>
            <h2>当前计数</h2>
            <button>+1</button>
            <hello-world/>
        </teleport>
        <teleport to='#sk'>
            <span>呵呵呵</span>
        </teleport>
    </div>
</template>

<script>
import { getCurrentInstance} from "vue"
import HelloWorld from './HelloWorld.vue';
    export default {
        components:{
            HelloWorld
        },
        mounted() {
            console.log(this.$name);
        },
        setup(props) {
            const instance = getCurrentInstance();
            console.log("setup",instance.appContext.config.globalProperties.$name);
        }
    }
</script>

<style scoped>

</style>