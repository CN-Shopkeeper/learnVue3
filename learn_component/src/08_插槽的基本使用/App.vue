<template>
    <div>
        <my-slot-cpn>
            <button>我是按钮</button>
            <my-button/>
        </my-slot-cpn>
        <my-slot-cpn>
        </my-slot-cpn>
    </div>
</template>

<script>
import MySlotCpn from "./MySlotCpn.vue";
import MyButton from "./MuButton.vue";
    export default {
        components:{
            MySlotCpn,
            MyButton
        }
    }
</script>

<style scoped>

</style>