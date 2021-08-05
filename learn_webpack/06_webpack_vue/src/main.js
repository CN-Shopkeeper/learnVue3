import {sum} from './js/math';
// import { createApp } from 'vue/dist/vue.esm-bundler';
// template已经交给.vue文件，并由vue/compiler-sfc处理，所以这里只需要用runtime的包
import { createApp } from 'vue';
const {priceFormat} = require('./js/format');

import App from './vue/app.vue'

import "./js/element";

console.log(priceFormat(sum(20,30)));


// vue代码
// const app=createApp({
//     template: "#my-app",
//     data(){
//         return {
//             title: "hello world"
//         }
//     }
// });

const app=createApp(App);
app.mount("#app");