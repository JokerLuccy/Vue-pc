/*
 * @Author: your name
 * @Date: 2020-11-27 15:45:38
 * @LastEditTime: 2020-11-27 20:30:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isHideFooter: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isHideFooter: true,
      },
    },
    {
      path: "/search",
      component: Search,
    },
  ],
});
export default router;
