import { createApp } from 'vue'
// import App from './01_render函数的使用/App.vue';
// import App from "./02_jsx的使用/App.vue";
import App from "./03_自定义指令/App.vue";
// import App from './04_teleport内置组件/App.vue'; 

import registerDirectives from "./directives";

import pluginObject from './plugins/plugin_object';
import pluginFunction from './plugins/plugin_function';



const app=createApp(App);
// registerDirectives(app);

// app.use(pluginObject);
app.use(pluginFunction);

// 全局自定义指令
// app.directive("focus",{
//     mounted(el,bindings,vnode,preVnode) {
//         console.log("focus mounted");
//         el.focus();
//     },
// });
app.mount('#app')

