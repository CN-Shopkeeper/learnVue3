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
    },
    children: [
      {
        path:"",
        redirect:"/home/message"
      },
      {
        path:'shops',
        component: ()=> import("../pages/HomeShops.vue")
      },
      {
        path:'message',
        component:()=> import("../pages/HomeMessage.vue")
      }
    ]
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
  },{
    path: "/login",
    component:()=>import("../pages/Login.vue")
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

// 动态添加路由
const categoryRoute = {
  path: "/category",
  component: ()=>import("../pages/Category.vue") 
}
const momentRoute = {
  path: "moment",
  component: ()=>import("../pages/HomeMoment.vue") 
}
// 添加顶级的路由对象
router.addRoute(categoryRoute);
// 添加二级的路由对象
router.addRoute("home",momentRoute);

// 导航守卫
let count=0
// to：Route对象，即将跳转到的route对象
// from：Route对象，从哪个路由对象导航过来的
/**
 * 返回值：
 * 1.false：不进行导航
 * 2.undefined或者不写返回值：进行默认的导航
 * 3.字符串：路径，跳转到对应的路径中
 * 4.对象：类似于router.push({path:"/login",component})
 */
router.beforeEach((to, from)=>{
  console.log(to.path,from.path);
  console.log(`进行了${++count}次跳转`)
  // if (to.path.indexOf("/home")!==-1){
  //   return "/login"
  // }
  if (to.path!== "/login"){
    const token = window.localStorage.getItem("token");
    if (!token){
      return "/login"
    }
  }
})

export default router;