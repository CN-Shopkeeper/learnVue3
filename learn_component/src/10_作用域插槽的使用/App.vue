<template>
    <div>
        <!-- 编译作用域 -->
        <!-- <child-cpn>
            <button>{{title}}</button>
        </child-cpn> -->

        <show-names :names="names">
            <template v-slot="slotProps">
                <button>{{slotProps.item}}-{{slotProps.index}}</button>
            </template>
        </show-names>
    </div>
</template>

<script>
import ChildCpn from "./ChildCpn.vue";
import ShowNames from "./ShowNames.vue";
    export default {
        components:{
            ChildCpn,
            ShowNames
        },
        data() {
            return {
                names:["sk","kobe","james","123"]
            }
        },
    }
</script>

<style scoped>

</style>