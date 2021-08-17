<script>
    export default {
        render() {
            return(
                <div>
                    <h2>hello world</h2>
                    { this.$slots.default? this.$slots.default():<span>我是hello world的默认插槽</span>}
                </div>
            )
        },
    }
</script>

<style scoped>

</style>