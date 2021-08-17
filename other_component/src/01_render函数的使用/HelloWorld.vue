<script>
import { h } from 'vue';
    export default {
        render() {
            return h("div",null,[
                h("h2",null,"hello world"),
                this.$slots.default? this.$slots.default({name:"sk"}):h("span",null,"我是hello world的默认插槽") 
            ]);
        },
    }
</script>

<style scoped>

</style>