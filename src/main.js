/*
 * @Author: your name
 * @Date: 2020-11-27 14:13:36
 * @LastEditTime: 2020-11-27 18:02:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_reception\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/reset.css";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
