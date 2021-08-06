import {sum} from 'js/math';
import { createApp } from 'vue';
import axios from 'axios';
const {priceFormat} = require('./js/format');



import App from '@/vue/app'

import "js/element";

if (module.hot) {
    module.hot.accept("js/element.js",()=>{
        console.log("element模块发生更新！");
    })
}

console.log(priceFormat(sum(20,30)));


const app=createApp(App);
app.mount("#app");

// axios.get("/api/moment").then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })