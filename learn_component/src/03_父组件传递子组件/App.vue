<template>
    <div>
        <show-message class="123" title="标题1" content="内容1"></show-message>
        <show-message title="标题2" content="内容2"></show-message>
        <show-message title="标题3" content="内容3"></show-message>
        <show-message :title="title" :content="content"></show-message>
        <show-message :title="message.title" :content="message.content"></show-message>
        <show-message v-bind="message"></show-message>
        
        <multi-root-element id="aaa"></multi-root-element>
    </div>
</template>

<script>
import ShowMessage from "./ShowMessage.vue";
import MultiRootElement from "./MultRootElement.vue";
    export default {
        components:{
            ShowMessage,
            MultiRootElement
        },
        data(){
            return {
                title: "title",
                content:"content",
                message:{
                    title:"message title",
                    content:"message content"
                }
            }
        }
    }
</script>

<style scoped>

</style>