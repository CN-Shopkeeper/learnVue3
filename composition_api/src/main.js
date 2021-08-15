import { createApp } from 'vue'
// import App from './01_mixin和extends/App.vue';
import App from "./02_compositionAPI基础/App.vue";

createApp(App).mount('#app')
// const app=createApp(App);
// app.mixin({
//     created() {
//         console.log("全局的生命周期")
//     },
// })
// app.mount('#app');