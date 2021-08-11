<template>
    <div>
        <h2 ref="title">{{message}}</h2>
        <button @click="changeMessage">修改message</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message:"hello home"
            }
        },
        methods: {
            changeMessage(){
                this.message="hello change"
            }
        },
        beforeCreate() {
            console.log("beforeCreate");
        },
        created() {
            console.log("created");
        },
        beforeMount() {
            console.log("beforeMount");
        },
        mounted() {
            console.log("mounted");
        },
        beforeUnmount() {
            console.log("beforeUnmount");
        },
        unmounted() {
            console.log("unmounted");
        },
        beforeUpdate() {
            console.log(this.$refs.title.innerHTML);
            console.log("beforeUpdate");
        },
        updated() {
            console.log(this.$refs.title.innerHTML);
            console.log("updated");
        },
    }
</script>

<style scoped>

</style>