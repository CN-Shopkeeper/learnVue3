import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

// import Home from '../pages/Home.vue';
// import About from '../pages/About.vue';

// 配置映射关系
const routes = [
  {path: '/', redirect: '/home'},
  {
    path: '/home', 
    component: ()=>{
      return import(/* webpackChunkName: "home-chunk" */"../pages/Home.vue")
    },
    name: "home",
    meta: {
      name: "shopkeeper"
    }
  },
  {
    path: '/about', 
    component: ()=>{
      return import(/* webpackChunkName: "page-chunk" */"../pages/About.vue")
    },
    name: "about"
  },
  {
    path: "/user/:username",
    component: ()=>{
      return import("../pages/User.vue")
    }
  },
  {
    // 固定写法pathMatch
    path: "/:pathMatch(.*)",
    component: ()=>{
      return import("../pages/NotFound.vue")
    }
  }
];

// 创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;