/*
 * @Author: your name
 * @Date: 2020-11-27 15:45:38
 * @LastEditTime: 2020-12-07 21:23:07
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
import CarShop from "@views/CarShop";
import AddToCart from "@views/CarShop/addCart";
import Detail from "@views/Detail";
import Trade from "@views/trade";
import Pay from "@views/pay";
import PaySuccess from "@views/pay/paysuccess";
import Center from "@views/Center";
import orderCont from "@views/Center/orderCont";
import Group from "@views/Center/group";
const push = VueRouter.prototype.push;
VueRouter.prototype.push = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  return push.call(this, location, onComplete, () => {});
};
VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  return push.call(this, location, onComplete, () => {});
};
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
      name: "search",
      path: "/search/:searchContent?",
      component: Search,
    },
    {
      path: "/carhop",
      component: CarShop,
    },
    {
      name: "addToCart",
      path: "/addToCart/:skuId?",
      component: AddToCart,
    },
    {
      path: "/detail/:id",
      component: Detail,
    },
    {
      path: "/trade",
      component: Trade,
    },
    {
      path: "/pay",
      component: Pay,
    },
    {
      path: "/paysuccess",
      component: PaySuccess,
    },
    {
      path: "/center",
      component: Center,
      children: [
        {
          path: "/center/myorder",
          component: orderCont,
        },
        {
          path: "/center/group",
          component: Group,
        },
        {
          path: "",
          redirect: "/center/myorder",
        },
      ],
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
export default router;
