import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store"
import Home from "@/views/Home/index.vue"
import Layout from "@/layout"

Vue.use(VueRouter)
const routerList = []
function importAll(routers) {
  routers.keys().forEach(key => {
    routerList.push(routers(key).default)
  })
}
importAll(require.context("../router", true, /\.routes\.js$/))
const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout
  },
  ...routerList
]

const router = new VueRouter({
  routes
})

/**
 * 全局路由配置
 * 路由开始之前的操作
 */
// router.beforeEach(function(to, from, next) {
//   // 获取当前请求的名称
//   let toName = to.name
//   // 获取用户登录标识
//   let isLogin = store.state.userInfo.isLogin

//   // 用户未登录，且请求的不是登录页面
//   if (!isLogin && toName !== "login") {
//     if (to.path === "/login") {
//       // 如果是登录页面路径，就直接next()
//       next()
//     } else {
//       // 不然就跳转到登录页面
//       next({
//         name: "login"
//       })
//     }
//   } else {
//     // 用户已登录，且请求的是登录页面
//     if (isLogin && toName === "login") {
//       // 跳转到首页
//       next({
//         path: "/"
//       })
//     } else {
//       // 默认操作
//       next()
//     }
//   }
// })
export default router
