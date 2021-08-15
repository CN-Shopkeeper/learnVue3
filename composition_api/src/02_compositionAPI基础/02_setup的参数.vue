<template>
    <div>
        home page
        <h2>{{message}}</h2>

        <h2>{{title}}</h2>
        <h2>当前计数: {{counter}}</h2>
    </div>
</template>

<script>
    export default {
        props:{
            message:{
                type:String,
                require:true
            }
        },
        /**
         * 参数一:props,父组件传递过来属性
         * 参数二:context,包含三个属性:attrs slots emit
         */
        // setup(props, context) {
        //     console.log(props.message);
        //     console.log(context.attrs.id,context.attrs.class);
        //     console.log(context.slots);
        //     console.log(context.emit);
        // }
        // 解构
        setup(props, {attrs,slots,emit}) {
            console.log(props.message);
            console.log(attrs.id,attrs.class);
            console.log(slots);
            console.log(emit);
        }
    }
</script>

<style lang="scss" scoped>

</style>